'use strict';

window.onload = () => {
  let input = document.querySelector('#name-input');
  let namesList = document.getElementById('names-list');

  input.addEventListener('input', (event) => {
    // console.log(input.value);

    if (input.value.length > 0) {
      $.get(`/getNames?input=${input.value}`, (requestedNames) => {
        console.log(requestedNames);
      });
    }

    event.preventDefault();
  });
};