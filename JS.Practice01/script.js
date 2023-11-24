alert('Hi! Welcome!')
function load() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('Image')
var data = new Date()
var time = data.getHours() 
msg.innerHTML = 'Now it is <strong>' + time + ' hours</strong>'
if (time >= 0 && time < 12  ) {
    /* msg.innerHTML = '<strong>Good Morning!</strong>' */
    img.src = '_Images/pexels-edward-eyer-2228889.jpg'
    document.body.style.background = '#e2cd9f'
} else if (time >= 12 && time < 18) {
     /* msg.innerHTML = 'Good Afternoon!' */
    img.src = '_Images/pexels-andrea-piacquadio-3778569.jpg'
    document.body.style.background = '#b9846f'
}
else {
    /* msg.innerHTML = 'Good Evening!' */
    img.src = '_Images/pexels-cottonbro-studio-4069291.jpg'
    document.body.style.background = '#515154'

}

}