document.addEventListener('DOMContentLoaded', function() {
    userDate();
});

document.addEventListener('mouseup', function() {
    clickSound();
});

function clickSound() {
    const audio = new Audio('assets/audio/click.mp3');
    audio.play();
}

function userDate() {
    setInterval(() => {
        var now = new Date();
        var time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        var date = now.toLocaleDateString([], { month: '2-digit', day: '2-digit', year: 'numeric' });
        document.querySelector('.time').textContent = time; 
        document.querySelector('.date').textContent = date;
    }, 1000);
}
