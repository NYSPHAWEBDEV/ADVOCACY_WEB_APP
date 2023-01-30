import json
import os 

print(os.listdir())
r = open("restest.json","r")
RES = json.load(r)
print(RES["id"])