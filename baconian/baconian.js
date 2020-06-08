const fs = require('fs') 
const key = require('./key')  

fs.readFile('test.txt', (err, data) => { 
    if (err) throw err; 
  
    var input = data.toString()   
    var out = ''
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var Alpha = alpha.toUpperCase()
    var combo = alpha.concat(Alpha) 
    
    for (let i = 0; i < input.length; i++) {
        const c = input[i];
        if (combo.indexOf(c) !== -1) {
            if (c == c.toUpperCase()) {
                out += key[c.toLowerCase()].toUpperCase()
            } else if (c == c.toLowerCase()) {
                out += key[c]
            }
        } else {
            out += c
        }
    }

    fs.writeFile('Output.txt', out, (err) => { 
        if (err) throw err; 
    })   
})