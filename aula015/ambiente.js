var num =[5 ,8 ,4]
num[3] = 6
num[4] = 9

num.push(1)        // Adiciona um elemento no final do VETOR
num.sort()         // Organiza em ordem crescente o VETOR

console.log (num)
console.log (`O vetor tem o ${num.length} elementos`)
console.log (`O primeiro elemento do vetor é ${num[0]}`)

var ele = num.indexOf(524)

if (ele == -1) {
    console.log (`O valor nao existe no VETOR`)
} 
else {
console.log(`O valor selecionado esta na posição ${ele}`)
}

