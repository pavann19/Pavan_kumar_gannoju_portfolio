import os
import re

def replace_colors(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Dictionary of replacements (Dark -> Light)
    replacements = {
        '#0f172a': '#ffffff',
        '#1e293b': '#f8fafc',
        '#334155': '#e2e8f0',
        '#475569': '#cbd5e1',
        '#f8fafc': '#0f172a',
        '#cbd5e1': '#334155',
        '#94a3b8': '#64748b',
        '#60a5fa': '#2563eb',
        '#3b82f6': '#1d4ed8'
    }

    regex = re.compile("(?i)(%s)" % "|".join(map(re.escape, replacements.keys())))
    
    new_content = regex.sub(lambda mo: replacements[mo.group(1).lower()], content)

    # Also, we should remove the 'dark' class from layout.tsx
    if 'layout.tsx' in file_path:
        new_content = new_content.replace('antialiased dark', 'antialiased')
        new_content = new_content.replace("style={{ colorScheme: 'dark' }}", "style={{ colorScheme: 'light' }}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

def walk_directory():
    src_dir = os.path.join(os.getcwd(), 'src')
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
                file_path = os.path.join(root, file)
                replace_colors(file_path)

if __name__ == "__main__":
    walk_directory()
    print("Color replacement complete.")
