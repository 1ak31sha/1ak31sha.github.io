// reduce quality on images over 2 MB to 20% to save space
const exec = require('child_process').execSync
let imgs = exec(`find ../source/images -size +2M -name '*.jpg'`).toString()
imgs = imgs.split('\n')
imgs.pop()
imgs.map(item => {
  // brew install magick
  exec(`magick -quality 20 ${item} ${item}`)
  console.log(item)
})

console.log(`${imgs.length} images converted`)
