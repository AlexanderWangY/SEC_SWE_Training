const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'), data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), "\n\nNice to meet you!");
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}

fileOps()

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw error;
//     console.log(data)
// })

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), "NICE TO MEET YOU", (err) => {
//     if (err) throw error;
//     console.log(`Write Complete!`)

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), "\n\nI replied!", (err) => {
//         if (err) throw error;
//         console.log(`Append Complete!`)

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newreply.txt'), (err) => {
//             if (err) throw error;
//             console.log(`Rename Complete!`)
//         })
//     })

// })

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})