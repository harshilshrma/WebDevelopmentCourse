let DATA = "secret";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Name: ", DATA);
    }

}

class Admin extends User {
    constructor(name, email) {
        super(name, email);

    }

    editData() {
        DATA = "NEW VALUE";
    }
}

let student1 = new User("harshil", "abc@email.com");
let student2 = new User("fgbc", "abc@dsfv.com");

let admin1 = new Admin("admin, ejbe@kfnasdk.com")
