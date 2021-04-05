let fruits = ['A Banana!', 'A Strawberry!', 'A Grape!', 'A Kiwi!', 'A Pear!', 'A Pickle!', 'A Coconut!', 'A Grapefruit!', 'A Watermelon!', 'An Apricot!'];

document.getElementById('press').addEventListener('click', function() {
    fruits = fruits.sort(() => Math.random() - 0.5);
    document.getElementById('answer').innerHTML = fruits[0];
})