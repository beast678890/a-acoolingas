const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const dir = path.join(process.cwd(), 'public', 'team')
const mapping = [
  { src: 'family law member.jfif', dest: 'ceo.webp' },
  { src: 'sandra lucas HR.jfif', dest: 'cfo.webp' }
]

;(async () => {
  for (const item of mapping) {
    const srcPath = path.join(dir, item.src)
    const destPath = path.join(dir, item.dest)
    try {
      if (!fs.existsSync(srcPath)) {
        console.error('missing:', srcPath)
        continue
      }
      await sharp(srcPath).webp({ quality: 80 }).toFile(destPath)
      console.log('converted', item.src, '->', item.dest)
    } catch (err) {
      console.error('error converting', item.src, err)
    }
  }
})()
