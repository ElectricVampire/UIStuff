function Person(name, food){
    this.name = name;
    this.food = food;
    this.Greet = function(){
        console.log("Hello!!! My Name is "+name+" and I like "+food+".");
    }
    
}

var Ashu = new Person("Ashutosh Pareek","VadaPav");
Ashu.Greet();
