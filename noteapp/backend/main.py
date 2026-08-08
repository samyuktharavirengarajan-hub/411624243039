import os
from datetime import datetime
from typing import Generator

from dotenv import load_dotenv
from fastapi import Depends, FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, ConfigDict
from sqlalchemy import Column, DateTime, Integer, String, Text, create_engine, or_
from sqlalchemy.orm import Session, declarative_base, sessionmaker

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "mysql+pymysql://root:password@localhost:3306/noteapp",
)

engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
    pinned = Column(Integer, default=0, nullable=False)
    completed = Column(Integer, default=0, nullable=False)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="NOTEAPP API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TaskCreate(BaseModel):
    title: str
    description: str | None = None


class TaskUpdate(BaseModel):
    title: str
    description: str | None = None


class TaskResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    description: str | None
    created_at: datetime
    updated_at: datetime
    pinned: int
    completed: int

def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def root():
    return {"message": "NOTEAPP API is running"}


@app.get("/api/tasks", response_model=list[TaskResponse])
def get_tasks(
    search: str = Query(default="", max_length=100),
    db: Session = Depends(get_db),
):
    query = db.query(Task)
    search = search.strip()
    if search:
        pattern = f"%{search}%"
        query = query.filter(or_(Task.title.like(pattern), Task.description.like(pattern)))
    return query.order_by(Task.created_at.desc()).all()


@app.get("/api/tasks/count")
def get_task_count(db: Session = Depends(get_db)):
    return {"count": db.query(Task).count()}


@app.post("/api/tasks", response_model=TaskResponse, status_code=201)
def create_task(payload: TaskCreate, db: Session = Depends(get_db)):
    title = payload.title.strip()
    if not title:
        raise HTTPException(status_code=400, detail="Task title is required")

    task = Task(title=title, description=(payload.description or "").strip() or None)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task


@app.put("/api/tasks/{task_id}", response_model=TaskResponse)
def update_task(task_id: int, payload: TaskUpdate, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    title = payload.title.strip()
    if not title:
        raise HTTPException(status_code=400, detail="Task title is required")

    task.title = title
    task.description = (payload.description or "").strip() or None
    task.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(task)
    return task

@app.put("/api/tasks/{task_id}/pin", response_model=TaskResponse)
def toggle_pin(task_id: int, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    task.pinned = 0 if task.pinned else 1

    db.commit()
    db.refresh(task)

    return task

@app.put("/api/tasks/{task_id}/complete", response_model=TaskResponse)
def toggle_complete(task_id: int, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    task.completed = 0 if task.completed else 1

    db.commit()
    db.refresh(task)

    return task

@app.delete("/api/tasks/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    db.delete(task)
    db.commit()
    return {"message": "Task deleted successfully"}
