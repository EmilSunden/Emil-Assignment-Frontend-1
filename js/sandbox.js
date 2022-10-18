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


function createTable() {
    const headerRowElement = document.createElement('tr');
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
        let anononymousLambda = ({firstname, lastname, group, personality, discord}) => ({firstname, lastname, group, personality, discord});
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
    let sorting = select.value; 
    switch(sorting) {
      case "firstname":
        globalObject.sort((a, b) => (a.firstname.toUpperCase() > b.firstname.toUpperCase()) ? 1 : (a.firstname.toUpperCase() < b.firstname.toUpperCase()) ? -1 : 0); // Ternary operators; this is a one liner if else if else statement
          refreshTable();
          createTable(); 
          break;
      case "lastname":
        globalObject.sort((a, b) => (a.lastname.toUpperCase() > b.lastname.toUpperCase()) ? 1 : (a.lastname.toUpperCase() < b.lastname.toUpperCase()) ? -1 : 0);
          refreshTable();
          createTable(); 
          break;
      case "group":
        globalObject.sort((a, b) => a.group - b.group);
          refreshTable();
          createTable(); 
          break;
      case "personality":
        globalObject.sort((a, b) => (a.personality > b.personality) ? 1 : (a.personality < b.personality) ? -1 : 0);
          refreshTable();
          createTable(); 
          break;
      case "discord":
        globalObject.sort((a, b) => (a.discord > b.discord) ? 1 : (a.discord < b.discord) ? -1 : 0);
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
  
  




















