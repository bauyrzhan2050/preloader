document.addEventListener('DOMContentLoaded', ()=>{
    
})

const preloader=setTimeout(()=>{
    const preloader=document.querySelector('.preloader')
    preloader.style=`
    transition:1.5s;
    opacity:0;
    background-color: rgb(0,0,0,0.3);`
}, 2000)