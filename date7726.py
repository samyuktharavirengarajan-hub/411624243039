lst = [1, 2, 3, "hi", True, 3.14]
lst.append("hello")
lst.pop(3)
print(lst)

d = {1: 'A', 2: 'B', 3: 'C'}
for k,v in d.items():
    print(k,v)

def function1():
    print("This is function 1")
function1()

class first():
    def __init__(self, i):
        self.i = i
first(1)

class Class1():
    def __init__(self, i):
        self.i = i
    def function1(self):
        print(self.i)
    def function2(self, j):
        print(j)
obj = Class1(4)
obj.function1()
obj.function2("Hi")

import json
users = {"Name" : "Bobby", "Age" : 19}
res = json.dumps(users) 
print(res) 

with open("users.json", "r") as file:
    data = json.load(file)
print(data)