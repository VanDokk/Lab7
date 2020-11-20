document.querySelectorAll(['[data-js]']).forEach(function (element) {
    element.addEventListener('click', function () {
        document.getElementById('mw').classList.toggle('show');
    });
});
