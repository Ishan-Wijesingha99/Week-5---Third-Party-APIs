// Assemble: Create/select DOM elements
var rootEl = $('#root');

// selecting all the box elements using jQuery
const allBoxes = rootEl.children('ul').children();
console.log(allBoxes);



// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
allBoxes.css('background-color', 'white');



// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
allBoxes[6].textContent = 'O';


