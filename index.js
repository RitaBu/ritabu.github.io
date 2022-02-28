document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('start-button');

    const formIds = [
        '1FAIpQLSf3lZQoBjpJaOnzWid7LQ5Ntc98vMFBJNXl5hryiiagpgdoFg',
        '1FAIpQLSf2fJI9n8ovRhFBsIH3trgf1Q-mZLcmtHW2uneY94dTl64s7A',
        '1FAIpQLSfXizJS6cuRQuQvOGFi_wmEMpNyYn4ytTa2UWjT9N2S4pUwQw',
    ];

    let randomIndex = Math.floor(Math.random() * formIds.length);

    const timer = document.getElementById('timer');
    const infoPanel = document.getElementById('info-panel');
    let timerInterval;

    if (randomIndex > 0) {
        infoPanel.style.display = 'block';
    }

    button.onclick = function() {
        infoPanel.style.display = 'none';
        button.style.display = 'none';
        let formUrl = 'https://docs.google.com/forms/d/e/' + formIds[randomIndex] + '/viewform?embedded=true';
        let referenceNode = document.getElementsByClassName('container')[0];
        let newNode = document.createElement('iframe');
        newNode.src = formUrl;
        newNode.width = '100%';
        newNode.height = '100%';
        newNode.innerHTML = 'Krauname...';
        referenceNode.appendChild(newNode);

        if (randomIndex > 0) {
            timer.style.display = 'block';
            startTimer();

            myVar = setTimeout(function() {
                document.location.href = 'pabaiga.html';
            }, 120000);
        }
    };

    startTimer = () => {
        clearInterval(timerInterval);
        let second = 0,
            minute = 0,
            hour = 0;

        timerInterval = setInterval(function() {
            timer.classList.toggle('odd');
            timer.innerHTML =
                (hour ? hour + ':' : '') +
                (minute < 10 ? '0' + minute : minute) +
                ':' +
                (second < 10 ? '0' + second : second);
            second++;
            if (second == 60) {
                minute++;
                second = 0;
            }
            if (minute == 60) {
                hour++;
                minute = 0;
            }
        }, 1000);
    };
});