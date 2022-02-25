// GLOBAL VARIABLES
var button = document.createElement('button');
var button1 = document.createElement('button1');
var button2 = document.createElement('button2');

function addItem() {
  var ul = document.getElementById('dynamic-list');
  var candidate = document.getElementById('candidate');
  var li = document.createElement('li');
  var calendar = document.getElementById('datepicker');
  li.setAttribute('id', candidate.value);
  li.setAttribute('cal', calendar.value);
  li.appendChild(document.createTextNode(candidate.value + ' '));
  li.appendChild(document.createTextNode(calendar.value));
  button.innerHTML = '<br>';
  button.textContent = 'Travel Information';
  button.classList.add('button', 'btn-dashboard');
  li.appendChild(button);
  ul.appendChild(li);
}

function removeItem() {
  var ul = document.getElementById('dynamic-list');
  var candidate = document.getElementById('candidate');
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}

function addItem1() {
  var ul = document.getElementById('dynamic-list1');
  var candidate = document.getElementById('candidate1');
  var li = document.createElement('li');
  var calendar = document.getElementById('datepicker1');
  li.setAttribute('id', candidate.value);
  li.setAttribute('cal', calendar.value);
  li.appendChild(document.createTextNode(candidate.value + ' '));
  li.appendChild(document.createTextNode(calendar.value));
  button1.innerHTML = '<br>';
  button1.textContent = 'Travel Information';
  button1.classList.add('button', 'btn-dashboard');
  li.appendChild(button1);
  ul.appendChild(li);
}

function removeItem1() {
  var ul = document.getElementById('dynamic-list1');
  var candidate = document.getElementById('candidate1');
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}

function addItem2() {
  var ul = document.getElementById('dynamic-list2');
  var candidate = document.getElementById('candidate2');
  var li = document.createElement('li');
  var calendar = document.getElementById('datepicker2');
  li.setAttribute('id', candidate.value);
  li.setAttribute('cal', calendar.value);
  li.appendChild(document.createTextNode(candidate.value + ' '));
  li.appendChild(document.createTextNode(calendar.value));
  button2.innerHTML = '<br>';
  button2.textContent = 'Travel Information';
  button2.classList.add('button', 'btn-dashboard');
  li.appendChild(button2);
  ul.appendChild(li);
}

function removeItem2() {
  var ul = document.getElementById('dynamic-list2');
  var candidate = document.getElementById('candidate2');
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}

// EVENT LISTENERS
// Event listener for the bucketlist button
button.addEventListener('click', () => {
  document.location.replace('/weather');
});

// Event listener for the visting button
button1.addEventListener('click', () => {
  document.location.replace('/weather');
});

// Event listener for the visited button
button2.addEventListener('click', () => {
  document.location.replace('/weather');
});

