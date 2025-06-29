function scrollMovies(direction) {
    const movieContainer = document.querySelector('.movies');
    const scrollAmount = 300; // Change this value to adjust scroll speed

    if (direction === 'left') {
        movieContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        movieContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
