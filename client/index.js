window.onload = () => {
  let input = document.querySelector('#name-input');
  let namesList = document.getElementById('names-list');

  input.addEventListener('input', (event) => {
    console.log(input.value);
    $.get('/getAllNames', (requestedNames) => {

    });
    event.preventDefault();
  });
};