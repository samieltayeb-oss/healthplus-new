import os
import re

html_dir = r"C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew"

def inject_picture(filepath, old_path_regex, desk_path, mob_path, alt, fp_desk):
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
        
        if 'object-position' in new_img_tag:
            new_img_tag = re.sub(r'object-position:\s*[^;]+;', f'object-position: {fp_desk};', new_img_tag)
        else:
            if 'style="' in new_img_tag:
                new_img_tag = new_img_tag.replace('style="', f'style="object-position: {fp_desk}; ')
            else:
                new_img_tag = new_img_tag.replace('<img ', f'<img style="object-position: {fp_desk};" ')

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

# Update index.html home-hero
inject_picture(
    os.path.join(html_dir, "index.html"),
    "home-hero\.png",
    "assets/images/clinic-real/desktop/DSC_0852-desk.webp",
    "assets/images/clinic-real/mobile/DSC_0852-mob.webp",
    "Comfortable patient waiting area at HealthPlus clinic",
    "center right"
)

# Update contact.html contact-hero
# Let's use DSC_0848 (Reception) for Contact, since Reception is where you contact them.
inject_picture(
    os.path.join(html_dir, "contact.html"),
    "contact-hero\.png",
    "assets/images/clinic-real/desktop/DSC_0848-desk.webp",
    "assets/images/clinic-real/mobile/DSC_0848-mob.webp",
    "HealthPlus Medical modern reception and check-in desk in Calgary",
    "center"
)

