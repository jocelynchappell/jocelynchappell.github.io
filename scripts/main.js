let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/cross004.png') {
    myImage.setAttribute('src', 'images/cross005.jpg');
  } else {
    myImage.setAttribute('src','images/cross004.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Jesus loves you, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let myName = localStorage.getItem('name');
  myHeading.innerHTML = 'Jesus loves you, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}
