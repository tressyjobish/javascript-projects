const resultEl=document.getElementById('result')
const lenghtEl=document.getElementById('length')
const uppercaseEl=document.getElementById('uppercase')
const lowercaseEl=document.getElementById('lowercase')
const numberEl=document.getElementById('number')
const symbolsEl=document.getElementById('symbols')
const generateEl=document.getElementById('generate')
const clipboardEl=document.getElementById('clipboard')


const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    Number:getRandomNumber,
    Symbol:getRandomSymbol
}

generateEl.addEventListener('click',()=>{
    const length= +lengthEl.value
    const hasLower=lowercaseEl.checked
    const hasUpper=uppercaseEl.checked
    const hasNumber=numbersEl.checked
    const hasSymbol=symbolsEl.checked

    console.log(haslower,hasUpper,hasNumber,hasSymbol)

})


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()* 26)+ 97)
}


function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()* 26)+ 65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()* 10)+ 48)
}
function getRandomSymbol(){
    const symbols='!@#$%^&*(){}[]=<>/,.'
    return Symbol[Math.floor(Math.random()*symbols.length)]
}
