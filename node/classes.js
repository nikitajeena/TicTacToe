class student {
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    getfirstname = () => this.firstname;
}

class details extends student{
    constructor(firstname, lastname, address, rollno){
        super(firstname, lastname)
        this.address = address
        this.rollno = rollno

    }
}
const studentdetails = new details("nikita", "jeena","jdhds",7);
console.log(studentdetails.getfirstname());