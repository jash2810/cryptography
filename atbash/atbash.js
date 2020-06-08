const fs = require('fs') 
  
fs.readFile('test.txt', (err, data) => { 
    if (err) throw err; 
  
    var input = data.toString()
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var out = ''
    for (let i = 0; i < input.length; i++) {
        const c = input[i];
        var index = 25 - alpha.indexOf(c)
        
        if (index !== 26) {
            out += alpha[index]
        } 
        else {
            out += c
        }
    }
    
    fs.writeFile('Output.txt', out, (err) => { 
        if (err) throw err; 
    }) 
    
})