let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]); // here the length of items = 6
});

// Add event listener to each slide item for zoom functionality
let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', function() {
        // Toggle zoomed class on the clicked item
        item.classList.toggle('zoomed');
    });
});