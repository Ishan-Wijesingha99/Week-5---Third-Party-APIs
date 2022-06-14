var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
const itemNameEl = $('input[name="shopping-input"]');
const addItemBtn = document.querySelector('.btn-info');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
const addListItem = function(e) {
    // prevent default behaviour of form submission
    e.preventDefault();

    // capture value of input
    let itemNameText = itemNameEl.val();

    // append a list element based off that input value
    shoppingListEl.append(`<li>${itemNameText}</li>`)

    // clear input value
    itemNameEl.val('');
}

addItemBtn.addEventListener('click', addListItem);



