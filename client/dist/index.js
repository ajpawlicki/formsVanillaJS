'use strict';

window.onload = () => {
  let input = document.querySelector('#name-input');
  let namesList = document.getElementById('names-list');
  let submit = document.querySelector('#name-submit');
  let form = document.querySelector('form');
  let trimmedInputValue;
  
  input.setAttribute('autocomplete', 'off');
  
  const addToList = (arr, list) => {
    arr.forEach((name) => {
      let listItem = document.createElement('li');
         
      listItem.innerHTML = name;
      list.appendChild(listItem);
    });
  };
  
  input.addEventListener('input', (event) => {
    trimmedInputValue = input.value.trim();

    if (trimmedInputValue === '') namesList.innerHTML = '';

    if (trimmedInputValue.length > 0) {
      $.get(`/getNames?input=${trimmedInputValue}`, (requestedNames) => {
        namesList.innerHTML = '';

        addToList(requestedNames, namesList);
      });
    }
    
    event.preventDefault();
  });

  form.addEventListener('submit', (event) => {
    trimmedInputValue = input.value.trim();
    namesList.innerHTML = '';
    input.value = ''

    if (trimmedInputValue.length > 0) {
      $.post('/addName', {'submittedName': trimmedInputValue}, (data, success) => {
        let names = JSON.parse(data);

        addToList(names, namesList);
      });
    }

    event.preventDefault();
  });
};