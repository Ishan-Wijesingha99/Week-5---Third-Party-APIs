
$('#top').children().css('color', 'yellow'); // you can access all the children, as well as all the children of the children using this
console.log($('#top').children());


$('#top').children().eq(0).addClass('boxy'); // you can get the first child of a parent element using .eq(0) , it's zero based. In this case we are adding a class to that specific child


$('#top').children().eq(4).append($('<li>Classmates</li>')); // in this case we're appending a li element to a specific child


$('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem'); // here we can actually CHAIN things together, first we add a class then we add a CSS style
