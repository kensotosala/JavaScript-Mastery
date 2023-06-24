// Get all the paragraph elements on the page
const paragraphs = document.getElementsByTagName("p");

// Loop through each paragraph and change its background color
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "yellow";
}
