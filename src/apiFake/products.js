export const fakeJSON = shuffle([
    {src: 'images/bags (1).webp', name: 'bag1', quantity: 0, price: 225, category: 'bags'},
    {src: 'images/bags (2).webp', name: 'bag2', quantity: 2, price: 120, category: 'bags'},
    {src: 'images/bags (3).webp', name: 'bag3', quantity: 0, price: 180, category: 'bags'},
    {src: 'images/bags (4).webp', name: 'bag4', quantity: 3, price: 115, category: 'bags'},
    {src: 'images/bags (5).webp', name: 'bag5', quantity: 0, price: 170, category: 'bags'},
    {src: 'images/bags (6).webp', name: 'bag6', quantity: 5, price: 240, category: 'bags'},
    {src: 'images/bags (7).webp', name: 'bag7', quantity: 7, price: 140, category: 'bags'},

    {src: 'images/dress (3).webp', name: 'dress3', quantity: 0, price: 190, category: 'dress'},
    {src: 'images/dress (4).webp', name: 'dress4', quantity: 0, price: 245, category: 'dress'},

    {src: 'images/shoe (1).webp', name: 'shoe1', quantity: 7, price: 240, category: 'shoe'},
    {src: 'images/shoe (2).webp', name: 'shoe2', quantity: 4, price: 330, category: 'shoe'},
    {src: 'images/shoe (3).webp', name: 'shoe3', quantity: 5, price: 270, category: 'shoe'},
    {src: 'images/shoe (4).webp', name: 'shoe4', quantity: 0, price: 185, category: 'shoe'},
    {src: 'images/shoe (5).webp', name: 'shoe5', quantity: 1, price: 245, category: 'shoe'},
    {src: 'images/shoe (6).webp', name: 'shoe6', quantity: 0, price: 215, category: 'shoe'},
    {src: 'images/shoe (7).webp', name: 'shoe7', quantity: 3, price: 255, category: 'shoe'},

    {src: 'images/sweater (2).webp', name: 'sweater2', quantity: 1, price: 110, category: 'sweater'},
    {src: 'images/sweater (3).webp', name: 'sweater3', quantity: 3, price: 95, category: 'sweater'},
    {src: 'images/sweater (4).webp', name: 'sweater4', quantity: 0, price: 120, category: 'sweater'},

    {src: 'images/trousers (3).webp', name: 'trousers3', quantity: 0, price: 150, category: 'trousers'},
    {src: 'images/trousers (4).webp', name: 'trousers4', quantity: 3, price: 145, category: 'trousers'},
    {src: 'images/trousers (5).webp', name: 'trousers5', quantity: 2, price: 170, category: 'trousers'},
    {src: 'images/trousers (6).webp', name: 'trousers6', quantity: 6, price: 95, category: 'trousers'},
    {src: 'images/trousers (7).webp', name: 'trousers7', quantity: 2, price: 115, category: 'trousers'},
])


// shuffle array

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

