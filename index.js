// // Accessing Single Elements

// let Newt = document.getElementById('listTitle');
// console.log(Newt);

// let newtItem = document.querySelector('ul li');
// // Give the first element and first child within that element
// console.log(newtItem);

// // Extra code
// //  centers the title
// Newt.style.textAlign = 'center';
// // this changes the color to red
// newtItem.style.color = 'red';

// //  Accessing Multiple Elements

// // For accessing multiple elements we are going to use three methods.
// //  getElementsByClassName,
// //  getElementsByTagName, and
// //  querySelectorAll.

// let grocery = document.getElementsByClassName('groceryItem');
// console.log(grocery);
// // console.log(grocery instanceof Array);  
//         //False.  Nodelist is an object that looks and acts like an array but is an object.
// console.log(grocery[2]);
// console.log(grocery.item(2));

// let liTag = document.getElementsByTagName('li');
// console.log(liTag);
// let selectAll = document.querySelectorAll('ul li');
// console.log(selectAll);

// // DOM Tree and Nodes
// // console.log(document.body.childNodes);
// console.log(document.body.children);

// // Whitespace inside elements is considered as text, and text is considered as nodes. Comments are also considered as nodes.

// // The childNodes property returns a collection of a node's child nodes, as a NodeList object.

// // The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.

// /* List of properties:
// 1. first(Element)Child = used to get the first child element of a node. 
// 2. last(Element)Child = the last child element of a node. 
// 3. parent(Element)Node = access a parent node of an element. 
// 4. next(Element)Sibling = the element next to the element already accessed.
// 5. previous(Element)Sibling gets for us the element previous to the element already accessed.
// */

// let listDiv = document.getElementById('list');
// console.log(listDiv.firstElementChild);

// console.log(listDiv.firstElementChild.nextElementSibling);  //To Do
// console.log(listDiv.firstElementChild.previousElementSibling); //null
// console.log(listDiv.lastElementChild.nextElementSibling); // null
// console.log(listDiv.lastElementChild.previousElementSibling); //groceryDiv
// console.log(listDiv.firstElementChild.parentNode); //list
// console.log(listDiv.lastElementChild.parentNode); // list
// console.log(listDiv.firstChild.lastChild); // null
// console.log(listDiv.firstChild.nextSibling);  // list title
// console.log(listDiv.firstChild.previousSibling);  //null 

//Adding and Removing HTML Content

// I can change the text on my DOM through these methods.
// innerText: specifies the text content of the specified node
// innerHTML: Specifies the HTML content of an element
// Be carefule when using innerHTML to set HTML content, because it removes the HTML content that is inside the element and adds the new one.



document.getElementsByClassName('listItem')[4].innerText = 'Buy a new cauldron';

document.getElementsByClassName('groceryItem')[0].innerHTML = 'Moondew Drops';

//AddEventListener

document.getElementById('clickMe').addEventListener('click', (event) =>{
    console.log(event);
    event.target.style.backgroundColor = "lightBlue";
});

document.getElementById('clickMe').addEventListener('keyup',(event) => {
    console.log(event);
    console.log(event.target.value);
})

//CREATE ELEMENT() and APPEND CHILD()
//createElement(); / appendChild();
let newGrocery = document.createElement('li');

let groceryList = document.getElementById('groceryList');

// left side = parent node    /    right side = child 
groceryList.appendChild(newGrocery);

document.getElementById('groceryList').lastElementChild.innerText = "New Text";

newGrocery.innerText = 'Ginger Root';

let liTag = document.getElementsByTagName('li');
// console.log(liDash)

for(tag of liTag){
    // console.log(tag);
    tag.style.fontFamily = 'cursive';
};

//Let's do that again, but with a different tag.
// I don't currently know that they bottom three items of my list are ingredients that I need to pick up from the store. Let's create an <h3> tag that says 'Grocery List'.

let groceryTitle = document.createElement('h3');

// Even though I have created an element, I didn't specify where I wanted it. We can use the appendChild() method to specify under which parent node we want to add it.
// First I need to grab the element I want to add my <h3>tag to.

let groceryDiv = document.getElementById('groceryDiv');

// Then I can append my newly created <h3>tag to my groceryDiv;
// left side = parent node I want to append to ---- right side = child I want to append

groceryDiv.appendChild(groceryTitle);

// In my browser, it won't look like I have changed anything. Open up the dev/inspect tools and under the ELEMENTS tab, navigate to the groceryDiv. Notice, we now have an empty <h3> tag nested underneath my <ul>.
// Let's add some text content to this.

groceryTitle.innerText = 'Grocery List';

// Great! But it's still underneath my list rather than above it. Let's change that!

groceryDiv.insertBefore(groceryTitle, groceryDiv.childNodes[0]);

// Syntax 
// node.insertBefore(newnode, existingnode)
// newnode: The node object you want to insert (Required)
// existingnode: The child node you want to insert the new node before. If set to null, the insertBefore method will insert the newnode at the end (Required)