export const mediaType = (type) => {
    if(type === 'movie') {
     return type[0].toUpperCase() + type.slice(1)
    } else if (type === 'tv') {
        return type.toUpperCase() + ' ' + 'Show'
    }

}