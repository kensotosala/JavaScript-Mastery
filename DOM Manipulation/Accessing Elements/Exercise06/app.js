// Access and log the text content of all <h2> elements that are inside a <div> with the class "section".

// Get all the <h2> elements inside the <div> with class "section"
const sectionDiv = document.querySelector("div.section");
const h2Elements = Array.from(sectionDiv.querySelectorAll("h2"));

// Log the text content of each <h2> element
h2Elements.forEach((h2Element) => {
  const h2Text = h2Element.textContent;
  console.log(h2Text);
});
