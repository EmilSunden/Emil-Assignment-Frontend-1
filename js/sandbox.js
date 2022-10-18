let globalObject;
async function getUsers(url) {
    const response = await fetch(url);
    const users = await response.json();
    globalObject = users
};
getUsers('/user/userdata.json')


const select = document.querySelector('#sorting-option');
const sortButton = document.querySelector('.sort-button');
const clearButton = document.querySelector('.clear-button');
sortButton.addEventListener('click', mySortFunction, false);
clearButton.addEventListener('click', refreshTable, false);
let table = document.querySelector('#table');
let headers = ['firstname', 'lastname', 'group', 'personality', 'discord'];

/*
    First we use a lambda function for the headers. The function takes the headers we created above and tells the computer:
    for each header value I want you to create a th element. We then set the th elements text value to the value of the headers array.
    We then attach the th element to the table head. 

    We then use the same lambda function again. However this time the function tracks the objects in the json.
    In this function we tell the computer to create a t-row for each object in the json.
    We then attach all rows to the table 
    In order to get the right property values, the once of our choosing, we use an anonymous function destructuring the object properties we want.
    The left side is the property, the right side returns right property and value.
    In order to make the anonymous function usable we create a variable user and use the anonymous function to get the value of each property from each (obj)
    in the json.
    We then attach the rowElement to the table.
    We use Object.values to extract the values from user which we assigned the properties on from our anonymous function.
    And we tell the computer: 
    For each value we've asked you to display for us create a data cell and set the textcontent to the values you've extracted for us.
    Next we tell the computer to attach the data cells to each row in the html, which we then want to attach to the table.

 */

function createTable() {
    const headerRowElement = document.createElement('tr');
    headerRowElement.className = "glow"
    headers.forEach((headerValue) => {
        const headerElement = document.createElement('th');
        headerElement.textContent = headerValue;
        headerRowElement.appendChild(headerElement)
    });
    table.appendChild(headerRowElement);
//
    globalObject.forEach((obj) => {
        const rowElement = document.createElement('tr');
        table.appendChild(rowElement);
        let anononymousLambda = ({firstname, lastname, group, personality, discord}) => ({firstname, lastname, group, personality, discord}); // I wanna shoutout Alex for this specific lambda function 👊
        let user = anononymousLambda(obj);

        Object.values(user).forEach((value) => {
            const cellElement =document.createElement('td');
            cellElement.textContent = value;
            rowElement.appendChild(cellElement);
        });
        table.appendChild(rowElement)
    })
}


function mySortFunction(event) {
    let sorting = select.value; // create variable that takes whatever value we select
    switch(sorting) {
      case "firstname": // if the value is firstname, a.k.a if we select firstname. Sort firstname alphabetically in ascending order
        globalObject.sort((a, b) => (a.firstname.toLowerCase() > b.firstname.toLowerCase()) ? 1 : (a.firstname.toLowerCase() < b.firstname.toLowerCase()) ? -1 : 0); // Ternary operators; this is a one liner if else if else statement
          refreshTable();
          createTable(); 
          break;
      case "lastname":
        globalObject.sort((a, b) => (a.lastname.toLowerCase() > b.lastname.toLowerCase()) ? 1 : (a.lastname.toLowerCase() < b.lastname.toLowerCase()) ? -1 : 0);
          refreshTable();
          createTable(); 
          break;
      case "group":
        globalObject.sort((a, b) => a.group - b.group);
          refreshTable();
          createTable(); 
          break;
      case "personality":
        globalObject.sort((a, b) => (a.personality.toLowerCase() > b.personality.toLowerCase()) ? 1 : (a.personality.toLowerCase() < b.personality.toLowerCase()) ? -1 : 0);
          refreshTable();
          createTable(); 
          break;
      case "discord":
        globalObject.sort((a, b) => (a.discord.toLowerCase() > b.discord.toLowerCase()) ? 1 : (a.discord.toLowerCase() < b.discord.toLowerCase()) ? -1 : 0);
          refreshTable();
          createTable(); 
          break;   
  }
    event.preventDefault();  
  };
  
function refreshTable() {
    while (table.firstChild) {
      table.removeChild(table.firstChild)
    } 
  };
  