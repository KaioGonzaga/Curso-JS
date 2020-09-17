var idade = 15
console.log (`Sua idade é ${idade} portanto`)
if (idade < 16) {
    console.log('Não vota')
}
    else if (idade >= 16 && idade < 18 || idade > 65) //Poderia tirar idade >= 16 && pois infla codigo
     {
        console.log ('Voto Opicional')
    }
        else   {
        console.log ('Vota')
    }
