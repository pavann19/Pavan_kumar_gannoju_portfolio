const fs = require('fs');
const path = require('path');

const replacements = {
  'text-[#3b82f6]': 'text-[#60a5fa]',
  'text-[#3B82F6]': 'text-[#60a5fa]'
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
      const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      content = content.replace(regex, value);
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
