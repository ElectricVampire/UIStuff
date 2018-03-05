var OurReq = new XMLHttpRequest();
var btnGetData = document.getElementById("btnGetData");
var divFoodInfo = document.getElementById("food-info");

// Event handler will get executed on button Press
btnGetData.addEventListener("click", function () {

    // Reads the data from Json
    OurReq.open('GET', 'https://electricvampire.github.io/UIStuff/TestJsonData/StreetFood.json');
    OurReq.onload = function () {
        var OurData = JSON.parse(OurReq.responseText);

        // Create dynamic html
        renderHtmlPage(OurData);
    };
    OurReq.send();
});
function renderHtmlPage(data) {
    data.streetfoods.forEach(element => {

        // Create <p> for "each" name in json file after which resultant html will look like below
        // <div id="food-info">
        //    <p>vadapav</p>
        //    <p>samosa</p>
        //    ...
        // </div>       
        divFoodInfo.insertAdjacentHTML('beforeend', "<p>" + element.name + "</p>");
    });
}