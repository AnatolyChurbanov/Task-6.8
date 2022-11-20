const consolelog = document.querySelector ('#consoleLog');
consolelog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')   
});

const alertExample = document.querySelector ('#alert');
alertExample.addEventListener('click', () => {
    alert('Сообщает пользователю о какой-либо важной информации')
});

const promptExample = document.querySelector ('#prompt');
promptExample.addEventListener('click', () => {
    prompt('Позволяет пользователю ввести данные')
});