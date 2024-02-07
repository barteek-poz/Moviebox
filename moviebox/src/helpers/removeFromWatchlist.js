export const removeFromWatchlist = (titleId) => {
    fetch(`http://localhost:3000/titles/${titleId}`, {method:'DELETE'})

}