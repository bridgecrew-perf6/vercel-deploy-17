// Agrega o elimina un el id de un pókemon a favoritos (en el localStorage)
const toggleFavorite = (pokemonId: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(pokemonId)) {
        favorites = favorites.filter((id) => id !== pokemonId);
    } else {
        favorites.push(pokemonId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isFavorite = (pokemonId: number): boolean => {
    // En caso que la función se ejecuta del lado del servidor.
    if (typeof Window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(pokemonId);
};

const exportedObj = {
    toggleFavorite,
    isFavorite,
};

export default exportedObj;
