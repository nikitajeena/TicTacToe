let student = {
    name: "pankaj",
    lastname: "jeena",
    fullName: function (){
     var nameF =    this.name+ " "+ this.lastname
     return nameF
    }
}


var studentFullName = function(address){
    console.log(this.fullName() +" " +"my name");
    console.log(this.fullName() + address)

}
var getName = studentFullName.bind(student);  // create a new function
getName("delhi");
var yourName = studentFullName.apply(student,["noida"]); // call a function
