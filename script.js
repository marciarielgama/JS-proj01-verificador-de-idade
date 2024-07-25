function verificar() {
    var data = new Date() // inserir a data atual
    var ano = data.getFullYear() // inserir o ano atual com 4 dígitos
    var fano = document.getElementById('txtano') // paga o ID no do Input no Html.
    var res = document.getElementById('res')
    // Também pode ser com query selector -> var res = document.queryselector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('ERRO! Verifique os dados e tente novamente')
       } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Criou a variável para exibir a foto.
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade > 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'foto-menino.png')
            } else if (idade > 12 && idade < 65) {
                //jovem
                img.setAttribute('src', 'foto-homem.png')
            } else if (idade >= 65){
                 //adulto
                img.setAttribute('src', 'foto-homem-idoso.png')
            }
        
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade > 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'foto-menina.png')
            } else if (idade > 12 && idade < 65) {
                //jovem
                img.setAttribute('src', 'foto-mulher.png')
            } else {
                 //adulto
                img.setAttribute('src', 'foto-mulher-idosa.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Adiciona o elemento Img criado na variável.
    }

}

  

    




