'use strict'

// show in console 'Number of categories: 3'
const categoriesNumber = (document.querySelectorAll('ul#categories > li.item')).length;
console.log(`Number of categories: ${categoriesNumber}`);
console.log("\n");

// array of h2 - categories names
const categoryName = [...document.querySelectorAll("h2")].map(h2 => h2.textContent);
// count elements in every category
const firstElList = document.querySelectorAll('.item:nth-child(1) > ul > li').length;
const secondElList = document.querySelectorAll('.item:nth-child(2) > ul > li').length;
const thirdElList = document.querySelectorAll('.item:nth-child(3) > ul > li').length;
// 
console.log(`Category: ${categoryName[0]} \nElements: ${firstElList}`);
console.log("\n")
console.log(`Category: ${categoryName[1]} \nElements: ${secondElList}`);
console.log("\n")
console.log(`Category: ${categoryName[2]} \nElements: ${thirdElList}`);


