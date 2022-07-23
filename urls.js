const fs = require('fs');
const readline = require('readline');
const axios = require('axios');

const argv = process.argv;

function readFile(path) {
    try {
        contents = fs.readFileSync(path, 'utf-8');
        const lines = contents.split('\n')
        return lines
    } catch(err) {
        console.log(`Could not read file - ${path}`)
        console.error(err);
        process.exit(1);
    }
}

async function processLine(line) {
    try{
        const site = new URL(line);
        console.log(`Downloading ${line}`)
        let resp = await axios.get(line);
        let html = resp.data;
        fs.writeFileSync(`./${site.hostname}.txt`, html)
        console.log(`Wrote to ${site.hostname}`)

        // , function(err) {
        //     if (err) {
        //         console.log(`Could not write file - ${site.hostname}`)
        //         console.error(err);
        //     } else {
        //     }
        // })
    } catch(err) {
        console.log(`Could not download ${line}`)
    }

}

for (let i=2; i<argv.length; i++) {
    debugger
    let lines = readFile(argv[i]);
    for (let line of lines) {
        processLine(line);
    };
}