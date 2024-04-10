
// generate a random color 
const randomColor = function() {
const hex = "123456789ABCDEF" ;
let color = "#" ;

for(let i =0 ; i< 6 ;i++)
{
    color += hex[Math.floor(Math.floor(Math.random()*16))];
}
return color;
}

let invl ;

document.querySelector('#start').addEventListener('click' , function(){
   
    if(!invl)  // agr null h to 
   invl =  setInterval( changBg , 1000 );

   function changBg(){document.querySelector('body').style.backgroundColor = randomColor();}
})


document.querySelector('#stop').addEventListener('click' , function(){
    clearInterval(invl);
    invl = null;
})
