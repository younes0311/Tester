let foto1 = document.getElementById('pic1');
let foto2 = document.getElementById('pic2');
let foto3 = document.getElementById('pic3');
let body=document.getElementById('body');
let f1=document.getElementById('font1');
let f2=document.getElementById('font2');
let f3=document.getElementById('font3');





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
    foto1.style.Animation='none';
    foto1.style.position='absolute';
    foto1.style.transform='translateX(600px)';

},5800)


let zoom1 = setTimeout(function(){
foto1.style.height='1100px';
body.style.backdropFilter='blur(20px)'
},6000)

let font1flex = setTimeout(function(){
f1.style.display='flex';
},6300)

let back1=setTimeout(function(){
    foto1.style.transform='translateX(0px)';
    foto1.style.position='relative';
    foto1.style.height='300px';
    f1.style.display='none';
    body.style.backdropFilter='none';
    foto2.style.display='flex';
    foto3.style.display='flex';
},10000)


let bigfoto2 = setTimeout(function(){
foto2.style.height='900px';
body.style.backdropFilter='blur(20px)';
foto1.style.display='none';
foto3.style.display='none';
},12000)


let back2 = setTimeout(function(){
    foto1.style.display='flex';
    foto3.style.display='flex';
    foto2.style.height='300px';
    body.style.backdropFilter='none';
},14000)


bigfoto3=setTimeout(function(){
    foto3.style.transform='translateX(-600px)';
    foto1.style.display='none';
    foto2.style.display='none';
    body.style.backdropFilter='blur(20px)';
    foto3.style.height='700px';
},16000)


back3= setTimeout(function(){
    foto3.style.transform='translateX(0px)';
    foto1.style.display='flex';
    foto2.style.display='flex';
    body.style.backdropFilter='none';
    foto3.style.height='300px';
},18000)
