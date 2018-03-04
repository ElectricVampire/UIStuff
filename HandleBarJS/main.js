
var dataReq = new XMLHttpRequest();

var btnGetData = document.getElementById("btnGetData");

btnGetData.addEventListener("click", function () {
    dataReq.open('GET', 'https://electricvampire.github.io/UIStuff/TestJsonData/StreetFood.json');
    dataReq.onload = function () {
        var OurData = JSON.parse(dataReq.responseText);
        CreateHtmlpage(OurData);
    };
    dataReq.send();
});

function CreateHtmlpage(data){
    console.log(data);
    var theTemplateScript = $("#streetfood-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var theCompiledHtml = theTemplate(data);
    $('#streetfood-placeholder').html(theCompiledHtml);
    
}
