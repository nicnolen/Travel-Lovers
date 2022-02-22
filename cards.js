function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}

function addItem1(){
    var ul = document.getElementById("dynamic-list1");
    var candidate = document.getElementById("candidate1");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem1(){
    var ul = document.getElementById("dynamic-list1");
    var candidate = document.getElementById("candidate1");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}

function addItem2(){
    var ul = document.getElementById("dynamic-list2");
    var candidate = document.getElementById("candidate2");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem2(){
    var ul = document.getElementById("dynamic-list2");
    var candidate = document.getElementById("candidate2");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}

