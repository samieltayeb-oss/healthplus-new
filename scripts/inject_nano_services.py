import os
import re

html_dir = r"C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew"

def inject_picture(filepath, old_path_regex, desk_path, mob_path, alt):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    img_pattern = re.compile(r'<img[^>]*src=["\']([^"\']*' + old_path_regex + r'(?:\?v=\d+)?)[^>]*>', re.IGNORECASE)
    
    def img_replacer(match):
        full_img_tag = match.group(0)
        src_val = match.group(1)
        
        prefix = ""
        if src_val.startswith("../"):
            prefix = "../"
        
        new_img_tag = full_img_tag
        new_img_tag = re.sub(r'src=["\'][^"\']+["\']', f'src="{prefix}{desk_path}"', new_img_tag)
        new_img_tag = re.sub(r'alt=["\'][^"\']*["\']', f'alt="{alt}"', new_img_tag)
        
        picture_tag = f"""<picture>
    <source media="(max-width: 768px)" srcset="{prefix}{mob_path}">
    {new_img_tag}
</picture>"""
        return picture_tag

    new_html = img_pattern.sub(img_replacer, html)
    if new_html != html:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_html)
        print(f"Updated {filepath}")

mappings = [
    ("services/mental-health.html", "mental-health\.png", "assets/images/clinic-nano/desktop/DSC_0810_NANO_desk.webp", "assets/images/clinic-nano/mobile/DSC_0810_NANO_mob.webp", "Calm and private mental health consultation room"),
    ("services/concussion-care.html", "concussion-care\.png", "assets/images/clinic-nano/desktop/DSC_0846_NANO_desk.webp", "assets/images/clinic-nano/mobile/DSC_0846_NANO_mob.webp", "Clinician performing non-invasive concussion assessment"),
    ("services/virtual-care.html", "virtual-care\.png", "assets/images/clinic-nano/desktop/DSC_0826_NANO_desk.webp", "assets/images/clinic-nano/mobile/DSC_0826_NANO_mob.webp", "Physician participating in telehealth virtual care"),
    ("services/sports-medicine.html", "sports-medicine\.png", "assets/images/clinic-nano/desktop/DSC_0819_NANO_desk.webp", "assets/images/clinic-nano/mobile/DSC_0819_NANO_mob.webp", "Active adult consulting with sports medicine clinician"),
    ("services/mva-care.html", "mva-care\.png", "assets/images/clinic-nano/desktop/DSC_0830_NANO_desk.webp", "assets/images/clinic-nano/mobile/DSC_0830_NANO_mob.webp", "Adult patient discussing recovery in MVA care suite"),
    ("services/obstetrics-gynecology.html", "obstetrics-gynecology\.png", "assets/images/clinic-nano/desktop/DSC_0828_NANO_desk.webp", "assets/images/clinic-nano/mobile/DSC_0828_NANO_mob.webp", "Physician reviewing chart with patient")
]

for f_path, old_re, desk, mob, alt in mappings:
    inject_picture(os.path.join(html_dir, f_path), old_re, desk, mob, alt)

