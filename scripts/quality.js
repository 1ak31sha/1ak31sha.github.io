const exec = require('child_process').execSync
const imgs = exec('find . -size +2M').toString()
console.log(imgs)
