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

