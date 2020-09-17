function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =document.getElementById ('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert ('Dados Incorretos ! Digite Novamente !')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada : ${idade}`
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'menino.png')
                
            }
            else if (idade <20) {
                //Menino
                img.setAttribute('src', 'jovemh.png')
            }
            else if (idade <60) {
                //Homem
                img.setAttribute('src', 'homem.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'velho.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'menina.png')
            }
            else if (idade <20) {
                //Menino
                img.setAttribute('src', 'jovemm.png')
            }
            else if (idade <60) {
                //Homem
                img.setAttribute('src', 'mulher.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}