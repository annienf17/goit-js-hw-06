const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// find gallery ul
const gallery = document.querySelector(".gallery");
// create li element
const liItem = document.createElement("li");
gallery.append(liItem);
// create img element
const image = document.createElement("img");
// add src attribute
image.setAttribute("src", "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260")
// add alt attribute
image.setAttribute("alt", "White and Black Long Fur Cat");
// dodaj <li><img></li> do ul.gallery
liItem.appendChild(image);


// add all images
const galImages = images.map((img) => 
`<li>${img}</li>`).join("");
liItem.insertAdjacentHTML("beforeend", galImages);
console.log(galImages)



// for(let i = 0; i < images.length; i++) {
//   let newImg = document.createElement("img");
//   newImg.setAttribute("alt", images[i].alt);
//   newImg.src = images[i].url;

//   let liItem = document.createElement("li")
//   liItem.appendChild(newImg)

//   document.getElementsByClassName('.gallery').appendChild(liItem)
//   console.log(liItem)
// }