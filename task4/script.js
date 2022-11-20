const link = document.querySelector ('#link');

link.addEventListener ('click', (event) => {
    event.preventDefault ();
    link.textContent = prompt ('Введите текст');
});