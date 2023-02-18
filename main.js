 function displayData(height,width,area){
  const container =document.getElementById('table-container') ;
  const tr = document.createElement('tr');
  tr.innerHTML= `
  <td>${1}</td>
  <td>${area}</td>
  <td> <button class="btn btn-success w-16">Success</button>
  </td>
  <td><i  class="fa-solid fa-xmark"></i> </td>
  `
 container.appendChild(tr)
 }
//Triangle:

document.getElementById('calculate-one').addEventListener('click',function(){
  const height = document.getElementById('height').value ;
  const width = document.getElementById('width').value ;
  if(height > 0){
    alert('your value is correct number')
   }
   else{
     alert('your number unvalid error')
     return height ;
   }
  const area = 0.5* parseInt(height)*parseInt(width)
  displayData(height,width,area)
})
//Rectangle
document.getElementById('calculate-two').addEventListener('click',function(){
 const rectangleHight = document.getElementById('rectangle-height').value ;
 const rectangleWidth = document.getElementById('rectangle-width').value ;
 if(rectangleHight > 0){
  alert('your value is correct number')
 }
 else{
   alert('your number unvalid error')
   return rectangleHight ;
 }
 const totalArea = parseInt(rectangleHight) * parseInt(rectangleWidth)
 displayData(rectangleHight ,rectangleWidth ,totalArea)
})

//Parallelogram:
function totalMultiplyValue(total ,multiplyName ,number){
  const containerr =document.getElementById('table-container') ;
  const tr = document.createElement('tr');
  tr.innerHTML=`
  <td>${number}</td>
  <td>${multiplyName}</td>
  <td>${total}</td>
  `
 containerr.appendChild(tr)
};
let value=1
let names3 = 'Parallelogram'
const parallelogramHeight =12 ; 
const parallelogramWidth = 10 ;
document.getElementById('btn-three').addEventListener('click',function(){
  const total = parseInt(parallelogramHeight)* parseInt(parallelogramWidth)
  totalMultiplyValue(total,names3,value)
  value +=1
})
//Rhombus :
let valuee=1
let names4 = 'Rhombus'
const heightD1=16 ;
const widthD2= 8 ;
document.getElementById('btn-four').addEventListener('click',function(){
  const totalRhombusValue = 0.5* parseInt(heightD1)*parseInt(widthD2)
  totalMultiplyValue(totalRhombusValue ,names4,valuee)
  valuee +=1
})
//Pentagon:
let value5 = 1;
let names5 = 'Pentagon'
const p = 6 ;
const b= 10 ;
document.getElementById('Pentagon').addEventListener('click',function(){
  const totalPentagon = 0.5* parseInt(p)* parseInt(b)
 totalMultiplyValue(totalPentagon ,names5,value5);
 value +=1 ;
})
//Ellipse:
 let value6 = 1 ;
let names6 = 'Ellipse'
const ellipseA= 10 ;
const ellipseB = 4 ;
document.getElementById('ellipse-last').addEventListener('click' ,function(){
const totalEllipse =3.1416 * parseInt(ellipseA)*parseInt(ellipseB)
totalMultiplyValue(totalEllipse.toFixed(2),names6,value6)
value6 +=1 ;
})
