import os
import re
import glob
import json

# Parse config/images.js to get the mappings
config_path = r"C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew\config\images.js"
with open(config_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Very basic parser for the objects in images.js
mappings = []
# Find blocks between { and }
blocks = re.findall(r'\{([^{}]*id:.*?)\}', js_content, re.DOTALL)
for block in blocks:
    if 'desktopPath' in block:
        # It's an updated one
        old_path = re.search(r'oldPath:\s*["\']([^"\']+)["\']', block)
        desk_path = re.search(r'desktopPath:\s*["\']([^"\']+)["\']', block)
        mob_path = re.search(r'mobilePath:\s*["\']([^"\']+)["\']', block)
        alt = re.search(r'alt:\s*["\']([^"\']+)["\']', block)
        focal_desk = re.search(r'focalPointDesktop:\s*["\']([^"\']+)["\']', block)
        focal_mob = re.search(r'focalPointMobile:\s*["\']([^"\']+)["\']', block)
        
        if old_path and desk_path and mob_path:
            mappings.append({
                'oldPath': old_path.group(1),
                'desktopPath': desk_path.group(1),
                'mobilePath': mob_path.group(1),
                'alt': alt.group(1) if alt else "",
                'focalDesk': focal_desk.group(1) if focal_desk else "center",
                'focalMob': focal_mob.group(1) if focal_mob else "center"
            })

print(f"Found {len(mappings)} updated images in config/images.js")

# Find all HTML files
html_dir = r"C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew"
html_files = glob.glob(os.path.join(html_dir, "**", "*.html"), recursive=True)

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
        
    original_html = html
    
    for m in mappings:
        old = m['oldPath']
        # The HTML might have leading ../ or similar
        # E.g. src="../assets/images/services/pediatric-care.png"
        # We need to find the <img> tag that contains this path
        
        # Regex to find an img tag with src ending in the old path (ignoring ?v=2 etc)
        # Escape old path
        old_escaped = re.escape(old)
        # Sometimes it's oldPath, sometimes it's ../oldPath
        img_pattern = re.compile(r'<img[^>]*src=["\']([^"\']*' + old_escaped + r'(?:\?v=\d+)?)[^>]*>', re.IGNORECASE)
        
        def img_replacer(match):
            full_img_tag = match.group(0)
            src_val = match.group(1)
            
            # Determine relative prefix
            prefix = ""
            if src_val.startswith("../"):
                prefix = "../"
            
            # Extract existing attributes to preserve classes, styles, loading, etc.
            # But we might need to update object-position
            
            new_img_tag = full_img_tag
            # Replace src
            new_img_tag = re.sub(r'src=["\'][^"\']+["\']', f'src="{prefix}{m["desktopPath"]}"', new_img_tag)
            # Replace alt
            new_img_tag = re.sub(r'alt=["\'][^"\']*["\']', f'alt="{m["alt"]}"', new_img_tag)
            
            # Update object-position for desktop in style
            if 'object-position' in new_img_tag:
                new_img_tag = re.sub(r'object-position:\s*[^;]+;', f'object-position: {m["focalDesk"]};', new_img_tag)
            else:
                # Add it to style if style exists, otherwise add style
                if 'style="' in new_img_tag:
                    new_img_tag = new_img_tag.replace('style="', f'style="object-position: {m["focalDesk"]}; ')
                else:
                    new_img_tag = new_img_tag.replace('<img ', f'<img style="object-position: {m["focalDesk"]};" ')

            # Create the picture wrapper
            picture_tag = f"""<picture>
    <source media="(max-width: 768px)" srcset="{prefix}{m["mobilePath"]}">
    {new_img_tag}
</picture>"""
            return picture_tag

        html = img_pattern.sub(img_replacer, html)
        
    if html != original_html:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Updated images in {os.path.relpath(filepath, html_dir)}")

print("Done injecting <picture> tags.")
