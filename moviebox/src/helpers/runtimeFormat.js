export const runtimeFormat = (date) => {
if(date.runtime) {
    return date.runtime + 'm'
} else if(date.episode_run_time.length > 0) {
   return date.episode_run_time[0] + 'm'
} else {
    return ''
}
}