var puzzle1 = [
  "https://test-ygr.netlify.app/",
  "https://test-cy.netlify.app/",
];

var myFrame = document.getElementsByClassName("frame1")[0];

function getRandomUrl(myFrame) {
  var index = Math.floor(Math.random() * puzzle1.length);
  var url = puzzle1[index];
  myFrame.src = url;
}

function codeAddress() {
  getRandomUrl(myFrame);
}

codeAddress();

console.log(myFrame.src);