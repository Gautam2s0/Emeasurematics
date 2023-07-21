import {Data,ParcelCard,HeaderCard } from "./Components.js"



// 
const DupData=[...Data]


// Getting Html Elements

const header=document.getElementById("header")
const parcel=document.getElementById("parcelContainer")




//appending Data in Dom
// function HeaderCard(data) {
//     // getting header by id
//     let  header=document.getElementById("header")
//     header.innerHTML=null
//     // iterating over data array through forEach
//     data.forEach((el)=>{
//         // creating an paragraph tag
//         let p=document.createElement("p")
//         // setting Attribute  className is headerChild
//         p.setAttribute("class","el.group")
//         // appneding p tag in div
//         header.append(div)
//     })
//     // appneding div in header
    
//   }
  

  // Example data (DupData) to test the ParcelContainer function
//   const DupData = [
//     { id: 1, name: "Parcel 1", sequence: 1, group: "Mumbai" },
//     { id: 2, name: "Parcel 2", sequence: 2, group: "Delhi" },
//     { id: 3, name: "Parcel 3", sequence: 3, group: "Kolkata" },
//   ];
  
  // Call the ParcelContainer function with the example data
//   ParcelCard(DupData);
  HeaderCard(DupData)


console.log(HeaderCard);
// console.log(ParcelContainer());
// console.log(HeaderContainer())