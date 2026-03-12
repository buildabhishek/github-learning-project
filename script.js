const quotes = [
    'Believe in yourself',
    'Small steps lead to big success',
    'Consistency beats motivation',
    'Dream big, start small',
];

function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);

    document.getElementById('quote').innerText = quotes[random];
}
