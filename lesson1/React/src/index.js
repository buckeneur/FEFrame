import React from 'react';
import ReactDOM from 'react-dom';



const table = React.createElement('table', null,[
    React.createElement('tr', null,
    React.createElement('th', null,[
        "First Name","Last Name"])),
    React.createElement('tr', null,
    React.createElement('td', null,[
        "Janet", "James"])),
    React.createElement('tr', null,
    React.createElement('td', null,[
        "John ", "Jameson"])),
]);


ReactDOM.render(table,document.getElementById('root'));


// ****Convert the following code to use the ES2015 features that were discussed: arrow functions, let/const, and interpolation

const hasUsernameAndPassword = user => {
    return user.name.length > 0 && user.password.length > 0;
}

// function filterInvalidUsers(users) {
//     let validUsers = [];

//     for (let user of users) {
//         if (hasUsernameAndPassword(user)) {
//             validUsers.push(user);
//         }
//     }

//     return validUsers;
// }

let validUsers = users.filter(hasUsernameAndPassword(user)); 

const userToFormattedString = user => {
    return `name: ${user.name}\nrole: ${user.role}`;
}

let users = [
    {
        name: 'Kirk Douglass',
        password: 'iamspartacus',
        role: 'revolutionary'
    },
    {
        name: 'Charlie Chaplain',
        password: '',
        role: 'tramp'
    },
    {
        name: 'Harrison Ford',
        password: 'AnythingButSnakes',
        role: 'archaeologist'
    }
];

const validUsers = filterInvalidUsers(users);

for (let validUser of validUsers) {
    console.log(userToFormattedString(validUser));
}

// **** Convert the above following code to use the ES2015 features that were discussed: arrow functions, let/const, and interpolation

// ****** Convert the following code to use the ES2015 features that were discussed: arrow functions, let/const, interpolation, and the class keyword

// Players really dislike true randomness, so it is generally modeled with a
// 'grab bag' approach. In this style every value within a range is generated
// and inserted into a collection and then randomized. When a new value is
// requested it is taken off the array. Typically every value is inserted 2-3
// times to allow for seemingly 'random' runs of the same number.

// The DieBag constructor function creates a grab bag of 3x values for a die with
// a number of faces specified in the constructor

function DieBag(numberOfFaces) {
    this.values = [];

    for (var iterationCount = 0; iterationCount < 3; iterationCount++) {
        for (var faceCount = 0; faceCount < numberOfFaces; faceCount++) {
            this.values.push(faceCount + 1);
        }
    }
}

DieBag.prototype.drawValue = function() {
    return this.values.shift();
};

DieBag.prototype.shuffle = function() {
    for (var i = 0; i < this.values.length; i++) {
        var temp = this.values[i];
        var swapIndex = Math.floor(Math.random() * this.values.length);
        this.values[i] = this.values[swapIndex];
        this.values[swapIndex]= temp;
    }
};

DieBag.prototype.itemsRemaining = function() {
    return this.values.length;
}

var bag = new DieBag(10);
bag.shuffle();

while (bag.itemsRemaining()) {
    console.log(bag.drawValue());
}

// ******* Convert the above code to use the ES2015 features that were discussed: arrow functions, let/const, interpolation, and the class keyword