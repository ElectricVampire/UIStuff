
// var dataReq = new XMLHttpRequest();

// var btnGetData = document.getElementById("btnGetData");

// btnGetData.addEventListener("click", function () {
//     dataReq.open('GET', 'https://electricvampire.github.io/UIStuff/TestJsonData/StreetFood.json');
//     dataReq.onload = function () {
//         var OurData = JSON.parse(dataReq.responseText);
//         CreateHtmlpage(OurData);
//     };
//     dataReq.send();
// });

// function CreateHtmlpage(data){
//     console.log(data);
//     var theTemplateScript = $("#streetfood-template").html();
//     var theTemplate = Handlebars.compile(theTemplateScript);
//     var theCompiledHtml = theTemplate(data);
//     $('#streetfood-placeholder').html(theCompiledHtml);
    
// }
$(function () {
    // Grab the template script
    var theTemplateScript = $("#example-template").html();
  
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
  
    // This is the default context, which is passed to the template
    var context = {
      people: [ 
        { firstName: 'Homer', lastName: 'Simpson' },
        { firstName: 'Peter', lastName: 'Griffin' },
        { firstName: 'Eric', lastName: 'Cartman' },
        { firstName: 'Kenny', lastName: 'McCormick' },    
        { firstName: 'Bart', lastName: 'Simpson' }
      ]
    };
  
    // Pass our data to the template
    var theCompiledHtml = theTemplate(context);
  
    // Add the compiled html to the page
    $(document.body).append(theCompiledHtml);
  });
  