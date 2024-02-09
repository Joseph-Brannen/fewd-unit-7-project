const alert = document.getElementById('alert');

alert.addEventListener( 'click', (e) => {
    const buttonAlert = document.querySelector('#alert button');
    const paragraphAlert = document.querySelector('#alert p');
    const notification = document.querySelector('#notification');
    if (buttonAlert === e.target || paragraphAlert === e.target) {
        alert.remove();
        notification.style.opacity = '0';
    }
});



const messageUser = document.querySelector('.message-user');
const sendMessage = document.getElementById('send-message');
const user = document.querySelector('.messaging input');
const textarea = document.querySelector('textarea');
const error = document.getElementById('error');
const errorParagraph = document.getElementById('error-paragraph');
const confirm = document.getElementById('confirm');

error.style.display = "none";
confirm.style.display = "none";

messageUser.addEventListener( 'click', (e) => {
    user.text = '';
    textarea.text = '';
    if ( sendMessage === e.target && user.value !== '' && textarea.value !== '') {
        console.log('right');
        confirm.style.display = "grid";
        sendMessage.style.display = "none";
        user.style.display = "none";
        textarea.style.display = "none";
        user.text = '';
        textarea.text = '';
        user.value = '';
        textarea.value = '';
    } else if ( sendMessage === e.target && textarea.value !== '' && user.value === '' ) {
        error.style.display = "grid";
        errorParagraph.innerHTML = "<b>Error:</b> User Field Empty";
        sendMessage.style.display = "none";
        user.style.display = "none";
        textarea.style.display = "none";
    } else if ( sendMessage === e.target && user.value !== '' && textarea.value === '' ) {
        error.style.display = "grid";
        errorParagraph.innerHTML = "<b>Error:</b> Message Field Empty";
        sendMessage.style.display = "none";
        user.style.display = "none";
        textarea.style.display = "none"; 
    } else if ( sendMessage === e.target && (user.value === '' || textarea.value === '') ) {
        console.log('wrong');
        error.style.display = "grid";
        errorParagraph.innerHTML = "<b>Error:</b> Empty Fields";
        sendMessage.style.display = "none";
        user.style.display = "none";
        textarea.style.display = "none";
    }
});

error.addEventListener( 'click', (e) => {
    const errorBtn = document.getElementById('error-btn');
    if ( errorBtn === e.target ) {
        error.style.display = "none";
        sendMessage.style.display = "initial";
        user.style.display = "initial";
        textarea.style.display = "initial";
    }
});

confirm.addEventListener( 'click', (e) => {
    const confirmBtn = document.getElementById('confirm-btn');
    if ( confirmBtn === e.target ) {
        confirm.style.display = "none";
        sendMessage.style.display = "initial";
        user.style.display = "initial";
        textarea.style.display = "initial";
    }
});




























