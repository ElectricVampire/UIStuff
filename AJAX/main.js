var OurReq = new XMLHttpRequest();

var btnGetData = document.getElementById("btnGetData");
var divAnimalInfo = document.getElementById("animal-info");

btnGetData.addEventListener("click", function () {
    OurReq.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    OurReq.onload = function () {
        var OurData = JSON.parse(OurReq.responseText);
        renderHtmlPage(OurData);
    };
    OurReq.send();
});

function renderHtmlPage(data) {

    data.forEach(element => {
        divAnimalInfo.insertAdjacentHTML('beforeend', "<p>" + element.name + "</p>");
    });

}