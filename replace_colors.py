import os

def replace_colors(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define color mappings (Dark -> Light)
    # Backgrounds
    content = content.replace('#0f172a', '#ffffff')
    content = content.replace('#1e293b', '#f8fafc')
    
    # Borders
    content = content.replace('#334155', '#e2e8f0')
    content = content.replace('#475569', '#cbd5e1')
    
    # Text
    content = content.replace('#f8fafc', '#0f172a')
    content = content.replace('#cbd5e1', '#334155')
    content = content.replace('#94a3b8', '#64748b')
    
    # Accents
    content = content.replace('#60a5fa', '#2563eb')
    content = content.replace('#3b82f6', '#1d4ed8')
    content = content.replace('#0a66c2', '#0a66c2') # Keep LinkedIn blue unchanged, but it's safe

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

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
