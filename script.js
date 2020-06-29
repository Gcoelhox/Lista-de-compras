
// function add(){
//     var nome = document.querySelector('input#nome')
//     var cat = String(nome.value)
//     var div = document.createElement('div')
//     var btnp = document.createElement('input')
//     var btnm = document.createElement('input')
//     var content = document.createTextNode(`${cat}`)
//     var divAtual = document.querySelector('div#res')
//     var parent = document.querySelector('div#fundo')
    
//     btnp.setAttribute('id', 'btnj')
//     btnp.setAttribute('type', 'button')
//     btnp.setAttribute('value', '+')
//     btnp.setAttribute('onClick', 'add2()')

//     btnm.setAttribute('id', 'btnj')
//     btnm.setAttribute('type', 'button')
//     btnm.setAttribute('value', '-')
//     btnm.setAttribute('onclick', 'remove2()')

//     div.setAttribute('id',`categorias`)
//     div.setAttribute('class','categorias')
//     div.appendChild(content)
//     div.appendChild(btnp)
//     div.appendChild(btnm)
    
//     parent.insertBefore(div, divAtual)
//     // divAtual.innerHTML = `<div id="categorias">${cat}</div>`
// }

// function remove(){
//     var divAtual = document.querySelector(`div#categorias`)
//     divAtual.parentNode.removeChild(divAtual)
    
// }


    function add(){
   
    var txt = document.createElement('input')
    var div = document.querySelector(`div#res`)
    var num = document.createElement('input')
    var und = document.createElement('input')
       
    num.setAttribute('type','number')  
    num.setAttribute('class',`num`) 
    num.setAttribute('name',`num`) 

    und.setAttribute('type','txt')  
    und.setAttribute('class',`und`) 
    und.setAttribute('name',`und`) 
         
    txt.setAttribute('name', 'item')
    txt.setAttribute('class', 'item')
    txt.setAttribute('type', 'text')
    txt.setAttribute('placeholder', 'Insira os itens')
    
    div.appendChild(txt)
    
    div.appendChild(num)

    div.appendChild(und)
    // parent.insertBefore(div, divAtual)
    // divAtual.innerHTML = `<div id="categorias">${cat}</div>`
   
}

function remove(){
    
    var itens = document.querySelector('input.item')
    var num = document.querySelector('input.num')
    var und = document.querySelector('input.und')
    itens.parentNode.removeChild(itens)
    num.parentNode.removeChild(num)  
    und.parentNode.removeChild(und)  
}

function gerar(){
    var it = new Array();
    var n = new Array();
    var un = new Array();
    var itens = document.getElementsByName("item")
    var num = document.getElementsByName("num")
    var und = document.getElementsByName("und")
    
    for(var i = 0; i<itens.length; i++){
    // var win = window.open('','','width=50, heigth =50')  
    it[i] = [itens[i].value]
    n[i] = [num[i].value]
    un[i] = [und[i].value]
       
    
    }
    var win = window.open('','','heigth=200,width=200')
    win.document.write('<html lang="pt-BR><head>')
    win.document.write('<meta charset="UTF-8">')
    win.document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">')
    win.document.write('<title>Lista de compras</title>')
    win.document.write('<link rel="stylesheet" href="style.css">')
    win.document.write('<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">')
    win.document.write('</head><body>')
   
    win.document.write('<header><p>Lista de compras</p></header>')
    win.document.write('<div id="add1">')
        win.document.write(' <div id="res1" name="nome">')
        // win.document.write('Item........Qtd......Tipo')
            for(var x = 0; x < it.length; x++){
            win.document.write(`${it[x]} -> ${n[x]}${un[x]} &#9634;<br><br>`)
            }
        win.document.write('</div>')
    win.document.write('</div>')
    win.document.write('<div id="gerar">')
    // win.document.write('<input type="button" id="ger1" value="Imprimir" onclick="window.print()">')
    win.document.write('</div>')
    win.document.write('</body></html>')
    // win.print()
    // win.close()
    
    
    

    
}