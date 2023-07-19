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
// create img element
const image = document.createElement("img");



// add all images
const galImages = images.map((img) => 
`<li><img src="${img.url} alt="${img.alt}"></li>`).join("");
// create li element
const liItem = document.createElement("li");
gallery.append(liItem)
liItem.insertAdjacentHTML("beforeend", galImages);
console.log(galImages)

