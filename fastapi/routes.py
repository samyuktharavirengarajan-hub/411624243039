from fastapi import FastAPI
from fastapi import APIRouter

router = APIRouter()

@router.get("/users")
def get_users():
    return "User Info"

@router.post("/users/post")
def post_users():
    return "Created user"

@router.put("/users/{id}")
def put_users(id):
    return "Updated user " + id

@router.patch("/users/{id}")
def patch_user():
    return "Patched user" + id

@router.delete("/users/{id}")
def delete_user():
    return "Delete user" + id