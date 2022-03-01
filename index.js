document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('start-button');

    const formIds = [
        '1FAIpQLSfXizJS6cuRQuQvOGFi_wmEMpNyYn4ytTa2UWjT9N2S4pUwQw', //3
        '1FAIpQLSf2fJI9n8ovRhFBsIH3trgf1Q-mZLcmtHW2uneY94dTl64s7A', //2
        '1FAIpQLSf3lZQoBjpJaOnzWid7LQ5Ntc98vMFBJNXl5hryiiagpgdoFg', //1
    ];

    let randomIndex = Math.floor(Math.random() * formIds.length);

    let introPanel = document.getElementById('intro-panel');

    let timer1 = document.getElementById('timer-1');
    let infoPanel1 = document.getElementById('info-panel-1');

    let timer2 = document.getElementById('timer-2');
    let infoPanel2 = document.getElementById('info-panel-2');

    let timerInterval;
    let timer = randomIndex == 1 ? timer2 : timer1;
    let infoPanel = randomIndex == 1 ? infoPanel2 : infoPanel1;

    if (randomIndex == 1) {
        infoPanel2.style.display = 'flex';
    } else {
        infoPanel1.style.display = 'flex';
    }

    button.onclick = function() {
        infoPanel.style.display = 'none';
        introPanel.style.display = 'none';
        button.style.display = 'none';
        let formUrl = 'https://docs.google.com/forms/d/e/' + formIds[randomIndex] + '/viewform?embedded=true';
        let referenceNode = document.getElementsByClassName('container')[0];
        let newNode = document.createElement('iframe');
        newNode.src = formUrl;
        newNode.width = '100%';
        newNode.height = '100%';
        newNode.innerHTML = 'Krauname...';
        referenceNode.appendChild(newNode);
        timer.style.display = 'flex';
        startTimer();

        myVar = setTimeout(function() {
            document.location.href = 'pabaiga.html';
        }, 420000);
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