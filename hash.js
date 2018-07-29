const bcrypt = require('bcrypt');

async function run(){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('1234', salt);
    console.log(hashedPassword);
}

run();

