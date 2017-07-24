'use strict';

window.onload = () => {
  let input = document.querySelector('#name-input');
  let namesList = document.getElementById('names-list');

  input.addEventListener('input', (event) => {
    let trimmedInputValue = input.value.trim();

    if (trimmedInputValue.length > 0) {
      $.get(`/getNames?input=${trimmedInputValue}`, (requestedNames) => {
        // console.log(requestedNames);
      });
    }

    event.preventDefault();
  });
};