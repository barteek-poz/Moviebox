export const overviewFormat = (overview) => {
    if(overview && overview.length <= 200) {
        return overview
    } else if(overview){
        return overview.slice(0,200)+'...'
    }
};
