
const heading = document.querySelector(".stats div");
console.log(heading);
const value = document.querySelector(".area-display");
console.log(value);
const button = document.querySelector("button");
console.log(button);

const areas = document.querySelectorAll(".area-display .value");

for (let i = 0; i < areas.length; i++) {
  const element = areas[i];
  console.log(element);
}
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content +'<a href="#">...</a>';
    }
  
    desc.innerHTML = content;
  
  }
  const ratings = document.querySelectorAll(".rating-display .value");
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }
  const parks = document.querySelectorAll(".park-display");
  const numberParks = parks.length;
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit`;
  .header-statement {
    color: #ffffff;
    font-size: 1.2rem;
  }
  newElement.classList.add("header-statement");
  const header = document.querySelector("header");
header.appendChild(newElement);