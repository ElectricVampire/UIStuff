var listItems = document.getElementById("OurList").getElementsByTagName("li");
var ourHeadLine = document.getElementById("our-headline");
var ourButton = document.getElementById("ourButton");
var ourList = document.getElementById("OurList");
var newItemCounter = 0;

ourList.addEventListener("click", activateItem);

function activateItem(e) {
    if (e.target.nodeName == "LI") {
        ourHeadLine.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }

}

ourButton.addEventListener("click", addNewItem);

function addNewItem() {
    ourList.innerHTML += "<li class=\"list-group-item\">SomethingNew " + ++newItemCounter + "</li>";
}