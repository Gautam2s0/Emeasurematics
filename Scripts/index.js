import {Data,ParcelCard,HeaderCard } from "./Components.js"



// 
const DupData=[...Data]
let index=null

// Getting Html Elements

const header=document.getElementById("header")
const parcel=document.getElementById("parcelContainer")
const buttonContainer=document.getElementById("buttonContainer")





  

  
  // Call the ParcelContainer function with the example data
  ParcelCard(DupData.splice(0,9));
  HeaderCard(DupData.splice(0,9))


//  event listener
buttonContainer.addEventListener("click",()=>{
  let name=document.getElementById("parcelName");
  let location=document.getElementById("location");
  let id=DupData.length+1;
  let type=event.target.innerText

  if(type=="Add After"){
    
    alert(event.target.innerText)


  }
  else if(type=="Add Before"){

  }
  else if(type=="Replace"){
    
  }
  else if(type=="Delete"){
    
  }
  else if(type=="Show Final"){
    
  }

 

})


function perfomOparation(arr,obj,index){
  arr.map((el)=>)
} 