const jokeEl=document.getElementById('joke')
const jokebtn=document.getElementById('jokebtn')

generatejoke()

function generatejoke(){
    fetch('https://icanhazdadjoke.com'{
        headers:{
            'Accept':'applcation'
        }
    })
}