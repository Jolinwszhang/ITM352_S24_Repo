let attributes = "Jolin;20;20.5;-19.5";
let pieces = attributes.split(';');

for(let part of pieces){
    console.log(`${part} is a ${typeof part}`);
}

// join parts with, 
console.log(pieces.join(','));
