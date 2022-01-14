const fs = require("fs");

function cat(){
    process.stdin.on('data', (data) =>{
        const cmd = data.toString().trim();
        const keysArr = cmd.split(' ');
        if(keysArr[0]==='cat'){
            fs.readFile(keysArr[1], (err, data) => {
                if(err){
                    throw err;
                }else{
                    process.stdout.write(data);
                    process.stdout.write('\npromt >');
                }
            })


        }

    });
}

module.exports = cat;