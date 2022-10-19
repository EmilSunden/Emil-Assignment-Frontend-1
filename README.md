# IDE

Download visual studio code.

# Clone repo

Click "Code" button above.
Copy the link.
Open a new terminal in visual studio code and enter:

- git clone (url)

# Download liveserver extension

Download liveserver extension from extension tab.
Right click index.html and click "Open with live server"

# Beginner problem definition

1.Retrieving a list of information fetched from a folder. <br>
2.Sort information in alphabetical order.<br>
3.Display list on the web.

# Medium-rare problem definition

1.Fetch an array of objects from a local folder. <br>
2.Sort the information in alphabetical with a button. <br>
3.Display the array of objects on the web and sort by clicking button.

# Advanced problem definition

1.Fetch a json file which is an array of objects in our local folder. <br>
2.Use the information from the json to display on the web. <br>
3.Display the json objects on the webpage and sort based on attribute by clicking button attached to eventlistener.

# Problem Definition

```
1. The assignment at hand was to display json data on a local webpage (localhost). In order to do just that
we first had to use fetch to obtain our locally placed json files. Fetch is like import but it's main use is externally, it is used for
sending requests to a server which in turn comes with a response.
2. Figuring out HOW to display the json data on the webpage.
3. In my case creating one function which displays the data, and one function that sorts that data alphabetically on each attribute I've chosen to
use.

The problem:
The problem to be solved was to get the user-information we thought potent to create groups of people, in my case based on an attribute.
The next question was: how do I go about solving the task.
I began contemplating over the solution, and I came up with an idea. I wanted to sort people based on a certain attribute, using the sort method.
The data that we've been working with, we got from multiple json files which are located in data/dev/users.
To use the information in the json files we had to use fetch in our script file to retrieve all the data.
```

# First steps

```
Step 1 in working with this project was to think of a way to display these JSON files on a webpage,
so that's where I started. After some thought I decided that a table was the best way
of displaying the data I'm working with.
OBS! All html elements (apart from the table) in this project I've built dynamically using javascript.
```

# Problem solution

```
Let me now walk you through the project in order, from start to finish.
I began by creating three variables, '#table', tableBody and tableHead, (I later came to realize I don't need a tablehead and tablebody).
These are used to attach to the DOM. Continuing I started with the headers.
I wanted to be able to choose what data would be shown on the webpage,
so I started with making an array with the headertext I was going to use and I gave it the name "headers".
The reason I went with making the headers manually will be explained once I explain how it is connected with the values of the body.
I explained earlier that all elements except for the table element has been built dynamically using javascript.
Continuing, I created a function called createTable.
The first thing I did in the function was use a lambda function to get the values from my headers array and display them on the web.
For each header text in headers we create a th element. We then set the th elements text value to the value of those in the headers array.
We then attach th th element to the table head.
The second thing to do was map the users and get the values for the right keys.
Here we used yet another lambda function. What the function does is, it maps the objects in the users array.
In our lambda function we started with creating a variable called rowId for each object in the array and set the value to "row-" + the index the object is at.
We then use an if statement so as to create a row element for each object in the array.
To make it a possibility to attach td and to make it so that we get the value to match the right key we create an id to each row and set it to the rowId we created earlier the row id number is the index of the objects in the array.
We then attach the rowElement to the tableBody element.
Then we create one table data element for each value in the object and for each object.
After this we create a table row element. We attach the rowId object we created earlier
to the row object.
We then attach the cell element to the row, (to clearify, we create one row for each object in the array).
We set the cell textcontent to the value of the object which corresponds to the right key in the headers array.
We then attach the row to the tableBody to display.
```

# Eventlisteners

```
In order for this to do something, ergo to sort by attribute we had to make an eventlistener.
Here we're using select to be able to choose different options. We attach or html to our javascript
by using the id names. The select element id: "sorting-option". The names of the variables are elSorting, sortButton and clearButton.
The eventlisteners are added to the sortButton and clearButton as you can see.
The elSorting is used to be able to get the values from the select options.
We did this by first creating a function called mySort function and we created a variable called sorting and set the value to this to whatever the value of elSorting is we pick.
I've then created a switch statement which checks what value we pick to sort the data on give attributes.
In order for this to work well on the page without creating multiple table everytime you click the sort button.
I created a function to clear or reset the table body.
I'm using this function in my sorting function.
I'm also using my createTable function in the function right after resetTable so it creates table everytime you click sort.
```

# Code use and how you could continue developing

```
-How another developer could continue developing this code.
Create different tables based on what attribute you pick in select. Refactor like crazy.
-Where else you could use this tiny app: .
For school. Sort into groups for group assignments.
Work. When working on projects, assign groups.
Working with statistics, making charts that maps the stock market.
```

# TL;DR

```
TL;DR
Fetch data w/fetch.
Display data using HTML and JS.
Sort data using JS.
```
