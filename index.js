document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('start-button');

    var formIds = [
        '1FAIpQLSf3lZQoBjpJaOnzWid7LQ5Ntc98vMFBJNXl5hryiiagpgdoFg',
        '1FAIpQLSeiM1yS-2yS90Enyk7uSsnCTWoThULWu3InAtwgHgeiovBcAA',
        '1FAIpQLSc50Ja6sIGcTQKQBni4CRBYkIMipjzfFkj5sTDiZbl5FX_CbQ',
    ];

    formIds.random = function() {
        return this[Math.floor(Math.random() * this.length)];
    };

    button.onclick = function() {
        console.log(formIds.random());
        button.style.display = 'none';
        var formUrl = 'https://docs.google.com/forms/d/e/' + formIds.random() + '/viewform?embedded=true';
        var referenceNode = document.getElementsByClassName('container')[0];
        var newNode = document.createElement('iframe');
        newNode.src = formUrl;
        newNode.width = '100%';
        newNode.height = '100%';
        newNode.style = 'margin-top: 50px';
        newNode.innerHTML = 'Krauname...';
        referenceNode.appendChild(newNode);
    };
});