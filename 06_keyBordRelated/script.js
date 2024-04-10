
const insert = document.getElementById('insert');

 window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
    
     <div> 
     
     <table class = "color">
   <tr>
    <th>key</th>
    <th>key code</th>
    <th>key name</th>
  </tr>
  <tr>
    <td> ${e.key === " "?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

     </div> 
    `
 })