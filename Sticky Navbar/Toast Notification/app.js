const button= document.getElementById('button')
const toast=document.getElementById('toasts')

const message=['message one','message two','message three','message four']

button.addEventListener('click',() => createNotification())

function createNotification(){
    const notif=document.createElement('div')
    notif.classList.add('toast')

    notif.innerText=getRandomMessage()

   toasts.appendChild(notif)
   setTimeout(()=>{
       notif.remove()},3000)

   }

    
    function getRandomMessage(){
        return message[Math.floor(Math.random()*message.length)]
    }

    
