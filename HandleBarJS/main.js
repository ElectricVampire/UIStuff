var dataReq = new XMLHttpRequest();

var btnGetData = document.getElementById("btnGetData");
btnGetData.addEventListener("click",getStreetFoodInfo);

function getStreetFoodInfo(){
    dataReq.open('GET','C:\Users\pareeka2\Desktop\LearnJS\TestJsonData\StreetFood.json');
    dataReq.onload = function(){
        var streetFoodData = JSON.parse(dataReq.responseText);
        CreateHtmlpage(streetFoodData);
    }
}

function CreateHtmlpage(data){
    var rawStreetFoodTemplate = document.getElementById("streetfood-template");
    var compiledStreetFoodTemplate = Handlebars.compile(rawStreetFoodTemplate);
    var streetFoodHtml = compiledTemplate(compiledStreetFoodTemplate);

    var streetfoodPlaceholder = document.getElementById("streetfood-placeholder");
    streetfoodPlaceholder.innerHTML = streetFoodHtml;
}