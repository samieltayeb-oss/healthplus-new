import os

html_path = r"C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew\services\sports-medicine.html"
images_js_path = r"C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew\config\images.js"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('DSC_0819_NANO', 'DSC_0834_NANO')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated services\sports-medicine.html")

with open(images_js_path, 'r', encoding='utf-8') as f:
    js = f.read()

js = js.replace('DSC_0819_NANO', 'DSC_0834_NANO')

with open(images_js_path, 'w', encoding='utf-8') as f:
    f.write(js)
print("Updated images.js")
