const fs = require('fs') 
  
fs.readFile('test.txt', (err, data) => { 
    if (err) throw err; 
  
    var input = data.toString()
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var Alpha = alpha.toUpperCase()
    var combo = alpha.concat(Alpha) 
    var alphaC = ''   
    var out = ''
    var key = 13

    for (let i = 0; i < alpha.length; i++) {
        
        if (i+key <= 25) {
            alphaC += alpha[i+key]
        } else {
            alphaC += alpha[i-key]
        }
    }
    var AlphaC = alphaC.toUpperCase()

    for (let i = 0; i < input.length; i++) {
        const c = input[i];
        
        if (combo.indexOf(c) === -1){
            out += c
        }else{
            if (c == c.toUpperCase()) {
                out += AlphaC[Alpha.indexOf(c)]
            }
            if (c == c.toLowerCase()){
                out += alphaC[alpha.indexOf(c)]
            }
        }
    }

    fs.writeFile('Output.txt', out, (err) => { 
        if (err) throw err; 
    }) 
    
})