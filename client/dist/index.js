'use strict';

window.onload = () => {
  let input = document.querySelector('#name-input');
  let namesList = document.getElementById('names-list');
  let submit = document.querySelector('#name-submit');

  input.addEventListener('input', (event) => {
    let trimmedInputValue = input.value.trim();

    if (trimmedInputValue === '') namesList.innerHTML = '';

    if (trimmedInputValue.length > 0) {
      $.get(`/getNames?input=${trimmedInputValue}`, (requestedNames) => {
        namesList.innerHTML = '';

        requestedNames.forEach((name) => {
          let listItem = document.createElement('li');
         
          listItem.innerHTML = name;
          namesList.appendChild(listItem);
        });
      });
    }
  });

  submit.addEventListener('submit', (event) => {
    
    event.preventDefault();
  });
};