"use strict";
/*
  Algorithms
  - select item then toggle class active on click to icon-plus
*/
const items = document.querySelectorAll(".item");
items.forEach((ele) => {
    ele.addEventListener("click", () => {
        ele.classList.toggle("active");
    });
});
