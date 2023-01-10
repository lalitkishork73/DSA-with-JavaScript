const fs = require('fs');

const fss = async () => {
    try {
        await fs.writeFile(__dirname + "/FS Module" + "ji.txt", "this is just begining rest of the part in wait",()=>{});

        
    } catch (err) {
        console.log(err);
    }
}

fss();