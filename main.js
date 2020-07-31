if('serviceWorker' in navigator){
window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw_cached_site.js')
    .then(reg=>console.log('service worker registered'))
    .catch(err=>console.log(`service worker: Error:${err}`));
});

}