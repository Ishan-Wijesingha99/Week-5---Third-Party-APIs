var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}



// THIS CODE IS IMCOMPLETE, IF WE HAVE MULTIPLE LIST ITEMS, WHEN WE PRESS THE DELETE BUTTON FOR ONE OF THEM, ALL THE LIST ITEMS ARE DELETED
// WE NEED TO ACTUALLY NUMBER EACH LIST ITEM TO DELETE ONE BY ONE

// function for deleting the list item
const deleteListItem = function(e) {
  if(e.target === $(".delete-item-btn")[0]) {
    $(".delete-item-btn").parent('li').remove();
  }
}




shoppingListEl.on('click', deleteListItem)



shoppingFormEl.on('submit', handleFormSubmit);
