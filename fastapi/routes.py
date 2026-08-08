# 27-7-26
from fastapi import FastAPI
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Users

router = APIRouter()

@router.get("/users")
def get_users(db : Session = Depends(get_db)):
    users = db.query(Users).all()
    return users

@router.post("/users/post")
def post_users(id : int, name : str, db : Session = Depends(get_db)):
    user = Users(id=id, name=name)
    db.add(user)
    db.commit()
    return "Created user"

@router.put("/users/{id}")
def put_users(id : int, name : str, db : Session = Depends(get_db)):
    user = db.query(Users).filter(Users.id == id).first()
    if not user:
        return "User not found"
    user.name = name
    db.commit()
    return "Updated user " + str(id)

@router.patch("/users/{id}")
def patch_user(id : int, name : str, db : Session = Depends(get_db)):
    user = db.query(Users).filter(Users.id == id).first()
    user.name = name
    db.commit()
    return "Patched user " + str(id)

@router.delete("/users/delete/{id}")
def delete_user(id : int, db : Session = Depends(get_db)):
    user = db.query(Users).filter(Users.id == id).first()
    if not user:
        return "User not found"
    db.delete(user)
    db.commit()
    return "Deleted user " + str(id)


# from fastapi import FastAPI
# from fastapi import APIRouter

# router = APIRouter()

# @router.get("/users")
# def get_users():
#     return "User Info"

# @router.post("/users/post")
# def post_users():
#     return "Created user"

# @router.put("/users/{id}")
# def put_users(id):
#     return "Updated user " + id

# @router.patch("/users/{id}")
# def patch_user():
#     return "Patched user" + id

# @router.delete("/users/{id}")
# def delete_user():
#     return "Delete user" + id