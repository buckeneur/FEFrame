import React from 'react';
import ReactDOM from 'react-dom';

// Lesson examples below

const items = [
    {
      id: 1,
      name: "Monday special",
      imageSource: "tacos.png",
      price: 10.35
    },
    {
      id: 2,
      name: "Tuesday special",
      imageSource: "burrito.png",
      price: 8.17
    }
  ];
  
  // This is not a component, it's a regular function that takes a JavaScript object and returns JSX
  const showItem = item =>
    (
      <div key={item.id}>
        <img src={item.imageSource} />
        <span>{item.name}: {item.price}</span>
      </div>
    );  
  
  const itemsAsJSX = items.map(showItem);
  
//   ReactDOM.render(<div>{itemsAsJSX}</div>, document.getElementById("root"));  

// Hands-On Project 1
// Hands-On Project 1

const Tips = listItems => 
(
    <div key={listItem.id} >    
        <h1>Tips for breaking down a new concept</h1>
        <div>
            {listItem}
        </div>
    </div>
);


const listItems = [
    {id: 1,
    cphead: "Many concepts can't be tackled all at once",
    cp1: "Work with the parts you can understand",
    cp2: "Take breaks to stay fresh"
    },
    {id: 2,
    cphead: "Develop a plan to learn the parts you don't know",
    cp1: "Start with the parts that you know",
    cp2: "Build new concepts on top"},
];



const listItem = listItems.map(listItems => (
    <ul key={listItems.id}><li>{listItems.cphead}</li><ul>
    <li>{listItems.cp1}</li>
    <li>{listItems.cp2}</li></ul></ul>));

//ReactDOM.render(Tips(listItems),document.getElementById('root'));  //Remove comments from this line to render Hands-on Project 1



const libraries = [
    {
        title: 'React',
        description: 'A JavaScript library for building user interfaces'
    },
    {
        title: 'Redux',
        description: 'A predictable state container for JavaScript apps'
    },
    {
        title: 'Reselect',
        description: 'A simple selector library for Redux'
    }
];

function makeDescriptions() {
    const library = libraries.map(libraries => (
        <p>${libraries.title}: ${libraries.description}</p>
    ) )
};

const output = makeDescriptions(libraries);
  
  ReactDOM.render(output, document.getElementById('root'));



{/* 
<div>
    <h1>Tips for breaking down a new concept</h1>
    <div>
        <ul>
            <li>Many concepts can't be tackled all at once</li>
            <ul>
                <li>Work with the parts you can understand</li>
                <li>Take breaks to stay fresh</li>
            </ul>
            <li>Develop a plan to learn the parts you don't know</li>
            <ul>
                <li>Start with the parts that you know</li>
                <li>Build new concepts on top</li>
            </ul>
        </ul>
    </div>
</div> 
*/}


