const fs = require('fs') 
  
fs.readFile('test.txt', (err, data) => { 
    if (err) throw err; 
  
    var input = data.toString()   
    var out = ''
    
    fs.readFile('key.txt', (err, data) => {
        if (err) {
            throw err
        }
        var key = parseInt(data)
        
        if (key !== 1) {
            var matrix = new Array(key)
            for (let i = 0; i < key; i++) {
                matrix[i] = new Array(input.length)
            }
            
            var dir = false
            var row = 0, col = 0

            for (let i = 0; i < input.length; i++) {
                const c = input[i];
                
                if (row == 0 || row == key-1) {
                    dir = !dir
                }

                matrix[row][col++] = c

                dir?row++:row--
            }

            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (typeof(matrix[i][j]) != 'undefined') {
                        out += matrix[i][j]
                    }                
                }            
            }
        } else {
            out = input
        }

        fs.writeFile('Output.txt', out, (err) => { 
            if (err) throw err; 
        }) 
    })  
})