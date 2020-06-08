from pprint import pprint
from PIL import Image
import glob
import os
import json


BASE_URL = "https://raw.githubusercontent.com/thesittu/Calections/master/Thumbnails/min/"

files = glob.glob("min/*")


output = []

for ff in files:
    img = Image.open(ff)
    width, height = img.size
    data = {
        "src": BASE_URL + os.path.basename(ff),
        "width": width,
        "height": height
    }
    output.append(data)


out = json.dumps(output, indent=4)
with open("output.json", "w") as outfile:
    outfile.write(out)
