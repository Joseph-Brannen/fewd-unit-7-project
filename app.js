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

messageUser.addEventListener( 'click', (e) => {
    const sendMessage = document.getElementById('send-message');
    const user = document.querySelector('.messaging input');
    const textarea = document.querySelector('textarea');
    const error = document.getElementById('error');
    const confirm = document.getElementById('confirm');
    user.text = '';
    textarea.text = '';
    if ( sendMessage === e.target && (user.value === '' || textarea.value === '') ) {
        console.log('wrong');
        error.style.display = "block";
        sendMessage.style.display = "none";
        user.style.display = "none";
        textarea.style.display = "none";
    } else if ( sendMessage === e.target && user.value !== '' && textarea.value !== '') {
        console.log('right');
        confirm.style.display = "block";
        sendMessage.style.display = "none";
        user.style.display = "none";
        textarea.style.display = "none";
    }
});






























