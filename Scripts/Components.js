
const Data = [

    {

        id: 10,

        name: "PARCEL1",

        sequence: 1,

        group: "Mumbai"

    },

    {

        id: 11,

        name: "PARCEL2",

        sequence: 2,

        group: "Mumbai"

    },

    {

        id: 13,

        name: "PARCEL3",

        sequence: 3,

        group: "Mumbai"

    },

    {

        id: 19,

        name: "PARCEL4",

        sequence: 4,

        group: "Delhi"

    },

    {

        id: 18,

        name: "PARCEL5",

        sequence: 5,

        group: "Delhi"

    },

    {

        id: 21,

        name: "PARCEL6",

        sequence: 6,

        group: "Kolkata"

    },

    {

        id: 12,

        name: "PARCEL7",

        sequence: 7,

        group: "Kolkata"

    },

    {

        id: 22,

        name: "PARCEL8",

        sequence: 8,

        group: "Kolkata"

    },

    {

        id: 23,

        name: "PARCEL9",

        sequence: 9,

        group: "Kolkata"

    },

    {

        id: 24,

        name: "PARCEL10",

        sequence: 10,

        group: "Mumbai"

    },

    {

        id: 25,

        name: "PARCEL11",

        sequence: 11,

        group: "Mumbai"

    },

    {

        id: 31,

        name: "PARCEL12",

        sequence: 12,

        group: "Mumbai"

    },

    {

        id: 34,

        name: "PARCEL13",

        sequence: 13,

        group: "Mumbai"

    },

    {

        id: 35,

        name: "PARCEL14",

        sequence: 14,

        group: "Delhi"

    },

    {

        id: 41,

        name: "PARCEL15",

        sequence: 15,

        group: "Delhi"

    },

    {

        id: 42,

        name: "PARCEL16",

        sequence: 16,

        group: "Delhi"

    },

    {

        id: 43,

        name: "PARCEL17",

        sequence: 17,

        group: "Delhi"

    },

    {

        id: 44,

        name: "PARCEL18",

        sequence: 18,

        group: "Kolkata"

    },

    {

        id: 53,

        name: "PARCEL19",

        sequence: 19,

        group: "Kolkata"

    },

    {

        id: 57,

        name: "PARCEL20",

        sequence: 20,

        group: "Kolkata"

    }

];

// ************************************************************************
//  functions 

function ParcelCard(data) {
    // getting parcel container by id
    let parcelContainer = document.getElementById("parcelContainer");
    // clearing the previous content of parcel container
    parcelContainer.innerHTML = '';
  
    // iterating over data array through forEach
    data.forEach((el) => {
      // creating elements
      let div = document.createElement("div");
      let name = document.createElement("p");
      let sequence = document.createElement("p");
  
      // setting Attribute className
      div.setAttribute("class","parceldiv")
      name.setAttribute("class", "child1");
      sequence.setAttribute("class", el.group);
      div.classList.add("parceldiv");
  
      // setting content for the elements
      name.textContent = el.name;
      sequence.textContent = el.sequence;
  
      // appending p tags to the div
      div.append(name, sequence);
  
      // appending div to the parcel container
      parcelContainer.append(div);
    });
  }
  

  function HeaderCard(data) {
    // Getting header by id
    let header = document.getElementById("header");
  
    // Clearing the previous content of the header
    header.innerHTML = '';
  
    // Iterating over data array through forEach
    data.forEach((el) => {
      // Creating a paragraph tag for each data element
      let p = document.createElement("p");
  
      // Setting Attribute className using the 'group' property of the data element
      p.setAttribute("class", el.group);
    //   p.innerText=el.name
     
      p.classList.add("headerp");
      // Appending the paragraph tag to the header
      header.append(p);
    });
   
  }
  

//   export
export { ParcelCard, HeaderCard,Data };
