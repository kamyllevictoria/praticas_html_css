var a = window.document.getElementById('icontinue')
function continuar(){
    a.innerText = "Continue the process"
    a.style.background = '#333'
    a.style.maxWidth =' 70%'
    a.style.margin = '10px'
    a.style.marginTop = '15px'
    a.style.padding = '12px'
    a.style.color = 'white'
    a.style.margin = 'auto'
    a.style.boxSizing = 'border-box'
    a.style.borderRadius = '20px'
    a.style.fontSize = '18px'
    a.style.textAlign = 'center'
    a.style.fontWeight ='bolder'    
}

function sair(){
    a.innerText = "Continue"
    a.style.background = '#737373'
    a.style.maxWidth =' 70%'
    a.style.margin = '10px'
    a.style.marginTop = '12px'
    a.style.padding = '12px'
    a.style.color = 'white'
    a.style.margin = 'auto'
    a.style.boxSizing = 'border-box'
    a.style.borderRadius = '20px'
    a.style.fontSize = '18px'
    a.style.textAlign = 'center'
    a.style.fontWeight ='bolder' 
}


 var botao = document.getElementById ('icontinue')

 function addHover(){
    console.log('Mouse passou sobre o botão.')
    botao.innerText = 'Continue the process'
    botao.style.background= '#333'
    botao.style.maxWidth = '320px'
    botao.style.marginLeft = '40px'
    botao.style.marginRight = '40px'
 }

 function removeHover(){
    console.log('Mouse saiu do botão.')
    botao.innerText = 'Continue'
    botao.style.background = '#737373'
    botao.style.maxWidth = '320px'
    botao.style.marginLeft = '40px'
    botao.style.marginRight = '40px'

 }
 //botao.addEventListener('mouseover', addHover)
 botao.addEventListener('mouseenter', addHover)
 botao.addEventListener('mouseout', removeHover)

