'use strict';

function get100Numbers(num) {
  let numbers = [];

  for (let i = 0; i < num; i++) {
    numbers.push(i + 1);
    console.log(get100Numbers(100));
  }

  return numbers;
}