const { faker } = require('@faker-js/faker');
const fs = require('fs');

let file = fs.createWriteStream('names.txt');

file.on('error', function(err) { 
    console.error(err);
});

for (let i =0;i<1000;i++){
    file.write(faker.name.fullName()+'\n') ;
};

file.end();
console.log('El proceso se ha finalizado satisfactoriamente')