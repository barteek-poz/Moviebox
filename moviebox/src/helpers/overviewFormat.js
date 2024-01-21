export const overviewFormat = (overview) => {
    if(overview.length <= 200) {
        return overview
    } else {
        return overview.slice(0,200)+'...'
    }
};
