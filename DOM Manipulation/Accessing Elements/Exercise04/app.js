// Select all elements with the attribute "data-toggle" and log their values to the console.

const elements = document.querySelectorAll("[data-toggle]");
elements.forEach(function (element) {
  console.log(element.getAttribute("data-toggle"));
});
