window.onload = () => {
    const button = document.createElement('button');
    button.id = 'darkModeButton'
    button.innerHTML = '<img src="youtubeDark.png" width="20">';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'darkSetting'
    document.querySelector("#end").prepend(button, input);
    button.addEventListener('click', () => enableDarkMode());


}

function enableDarkMode() {
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = 'black';
}