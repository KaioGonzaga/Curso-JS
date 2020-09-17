var vet =[4, 6, 8, 2, 3, 1, 9]

console.log (`O VETOR É ${vet}`)

/*
for (con = 0; con <vet.length; con++) {
    console.log (`A posição ${con} do vetor é ${vet[con]}`)
}

*/

for (var con in vet) {
    console.log (`O elemento ${con} tem o valor ${vet[con]}`)
}


