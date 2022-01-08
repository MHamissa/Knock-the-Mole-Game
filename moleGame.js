var mole=document.querySelectorAll('.mole');
var btn=document.getElementById('btn');
var s=0;

btn.addEventListener('click',function(){
    setInterval(function(){
      
     var m=Math.floor(Math.random()*6);
     mole[m].style.visibility="visible";   
mole[m].style.transform="translateY(-10px)";
setTimeout(function(){ mole[m].style.visibility="hidden";   
mole[m].style.transform="translateY(10px)";},1000);
    mole[m].onclick=function(evt){
    
    
  if (evt.target.style.visibility==="visible"){
     console.log('hi there');
     s++;
     document.getElementById('score').innerHTML=`score : ${s}`;
  }
};
    },3000);

    
}
);

