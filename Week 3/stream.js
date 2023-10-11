const fs = require('fs')

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Created')
    })
} else {
    console.log("Directory already exists!")
}

if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Removed')
    })
} else {
    console.log("Directory doesnt exists!")
}
// const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8' })

// const ws = fs.createWriteStream('./files/lorem.txt')

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

// rs.pipe(ws)