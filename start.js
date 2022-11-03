var playbutton = document.getElementById('buttonplay')
insaudio = new Audio('./assets/instructions.mp3')
tokyo =new Audio('./assets/tokyodrift.mp3')

    tokyo.play();



playbutton.onclick = start
function start(){
 var namebox = document.getElementById('yourname').value
if(namebox ==""){
alert("Please Enter Your Name")
}
else{
    location.href = 'game.html'
}
}
var instructions = document.getElementById("instructionmanual")
var button = document.getElementById('buttoninstructions')
button.onclick = displays
function displays(){
    instructions.style.display = 'block'
    insaudio.play()
    tokyo.pause()

}
var names = document.getElementById('boxname')

instructions.onclick = closeins
function closeins(){
    instructions.style.display = 'none'
    tokyo.play()
}

var profile = document.getElementById('myprofile')
profile.onclick = opengithub
function opengithub(){
    location.href=('https://github.com/Ayush-28-08')
}