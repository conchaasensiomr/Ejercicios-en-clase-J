'use strict';

const contacts = [
  {
    name: 'Concha',
    lastName: 'Asensio',
    phone: '688765890',
  },
  {
    name: 'Andrea',
    lastName: 'Fernández',
    phone: '688765890',
  },
  {
    name: 'Luis',
    lastName: 'Rovirosa',
    phone: '688765890',
  },
];

const contactName1 = contacts[0];
const contactName2 = contacts[1];
const contactName3 = contacts[2];
const user = document.getElementById('user');
let userName = document.getElementById('firstName');
let userLastName = document.getElementById('lastName');
let userPhone = document.getElementById('phone');

function handleChange(event) {
  if (event.currentTarget.value === '1') {
    userName.setAttribute('value', contactName1.name);
    userLastName.setAttribute('value', contactName1.lastName);
    userPhone.setAttribute('value', contactName1.phone);
  } else if (event.currentTarget.value === '2') {
    userName.setAttribute('value', contactName2.name);
    userLastName.setAttribute('value', contactName2.lastName);
    userPhone.setAttribute('value', contactName2.phone);
  } else if (event.currentTarget.value === '3') {
    userName.setAttribute('value', contactName3.name);
    userLastName.setAttribute('value', contactName3.lastName);
    userPhone.setAttribute('value', contactName3.phone);
  }
}

user.addEventListener('change', handleChange);
