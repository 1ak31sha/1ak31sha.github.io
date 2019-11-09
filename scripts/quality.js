const exec = require('child_process').execSync
let imgs = exec('find ../source/images -size +2M').toString()
 // console.log(imgs)
// magick -quality 20 halwa2.jpg halwa2.jpg

console.log(imgs = imgs.split('\n'))
console.log(typeof(imgs))
  imgs.map( (item) =>{
  console.log(item)
  exec(`magick -quality 20 ${item} ${item}`)
  })

