from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base 

DATABASE_URL = "mysql+pymysql://root:Sam1234@localhost:3306/Fullstack"
engine = create_engine(DATABASE_URL) # used to from connection
SessionLocal = sessionmaker(bind = engine) # is used to create a temp session to communicate with db 
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        