export const overviewFormat = (overview) => {
    if(overview.length <= 130) {
        return overview
    } else {
        return overview.slice(0,130)+'...'
    }
};
