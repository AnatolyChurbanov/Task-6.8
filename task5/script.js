let text = document.querySelector('#text');
text.addEventListener('keyup', function(e) {
    let duplicate = document.querySelector('#duplicateField')
    duplicate.textContent = e.target.value
});
document.querySelector('button').addEventListener('click', (event) => {
    console.log(text.value);
    event.preventDefault();
    document.querySelector('input').value = '';
    document.querySelector('#duplicateField').innerHTML = '';
});

