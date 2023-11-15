let foto1 = document.getElementById('pic1');
let foto2 = document.getElementById('pic2');
let foto3 = document.getElementById('pic3');


let Fotos1 = setTimeout(function(){
    if(scrollY>=200){
        foto1.style.display='flex';
    }
},1200)


let Fotos2 = setTimeout(function(){
    if(scrollY>=200){
        foto2.style.display='flex';
    }
},2200)


let Fotos3 = setTimeout(function(){
    if(scrollY>=200){
        foto3.style.display='flex';
    }
},3000)

if(scrollY>=200){

}
let bigfoto1 = setTimeout(function(){
    foto2.style.display='none';
    foto3.style.display='none';
    foto1.style.animation='none';
    foto1.style.transform='translateX(600px)';
},5800)


let zoom1 = setTimeout(function(){
    foto1.style.height='900px';
},6000)





