const fs = require('fs');
const path = require('path');

const replacements = {
  'bg-white/5': 'bg-[#1e293b]',
  'border-white/10': 'border-[#334155]',
  'text-[#F9FAFB]': 'text-[#f8fafc]',
  'text-[#9CA3AF]': 'text-[#cbd5e1]',
  'text-[#06B6D4]': 'text-[#3b82f6]',
  'text-[#8B5CF6]': 'text-[#3b82f6]',
  'text-gradient': 'text-[#cbd5e1]',
  'glass-panel': 'tech-card'
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    for (const [key, value] of Object.entries(replacements)) {
      // Create a global regex for each key, escaping brackets if needed
      const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      content = content.replace(regex, value);
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
