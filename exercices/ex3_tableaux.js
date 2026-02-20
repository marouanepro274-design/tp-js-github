

let somme = 0;
let count = 0;
let table = [12, 8, 15, 10, 7];

for( i=0; i<table.length; i++){

somme+= table[i];

}

console.log((somme/table.length))
console.log(Math.max(...table))


for( j=0; j<table.length; j++){

if(table[j] >= 10) {

    count+= 1;

}


}

console.log(count)


