console.log("hello");
var smooth = document.querySelector('.to-top');
console.log(smooth);
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 200){
        smooth.classList.add('active')
    }
    else{
        smooth.classList.remove('active')
    }

}, 3000)