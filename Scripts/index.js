import {Data,ParcelCard,HeaderCard } from "./Components.js"



// 
const DupData=[...Data]

// console.log("Index",index)

// Getting Html Elements

const header=document.getElementById("header")
const parcel=document.getElementById("parcelContainer")
const buttonContainer=document.getElementById("buttonContainer")


  // Call the ParcelContainer function with the example data
  ParcelCard(DupData.splice(0,9));
  HeaderCard(DupData.splice(0,9))


//  event listener
buttonContainer.addEventListener("click",()=>{
  let index=document.getElementById("parcelToShow").value;
  let name=document.getElementById("parcelName");
  let location=document.getElementById("location");
  let parceldiv=document.getElementsByClassName("parceldiv");
  let id=DupData.length+1;
  let type=event.target.innerText;

  let obj={
    id: Data[Data.length-1].id+1,
    name:name.value,
    sequence:1,
    group: location.value

  }
  // name.addEventListener("input",()=>{
  //   obj[name]=event.target.value
  // })
  // location.addEventListener("input",()=>{
  //   obj[group]=event.target.value
  // })

  if(index && name&&location){
    // let output=Oparation(Data,DupData,+index,obj,type)
    ParcelCard(output);
    // console.log(output)
    // console.log(obj);
    // console.log(index)
    

  }
  console.log("yyy",index)

  
  // ParcelCard(output.splice(0,9));
  

})


let originalArr=[...Data]
function Oparation(originalArr=[],arr,data,index,place){
  let p;
for(let i=0;i<arr.length;i++){
  let el=arr[i]
  if(el.sequence==index){
    if(place=="Add After"){
      console.log("after")
      data.sequence=index+1
    }
    else if(place=="Add Before"){
      console.log("before")
      if(index==1){
        index
      }
      else{
        index--
      }
      data.sequence=index+1
    }
    else if(place=="Replace"){
      console.log("rep")
      data.sequence=index
      arr.splice(index-1,1,data)
      return arr

    }
    else if(place=="Delete"){
      console.log("del")
      arr.splice(index-1,1)
       arr.map((el,i)=>{
        if(i>=index-1){
          return el.sequence=el.sequence-1
        
        }
      })
      return arr

    }
    else if(place=="Refresh"){
      console.log("ref")
      return originalArr
    }
    else if(place=="Show Final"){
      console.log("final")
      return arr
    }
    
    
    console.log(i,arr)
  }
}

return arr
}
// Oparation(originalArr,DupData,{name:"gautam",sequence:2},2,"Add After")
// console.log("r",r)