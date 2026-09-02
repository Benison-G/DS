function Developer (name) {
    this.name = name;
}

function Tester (name) {
    this.name = name;
}

function EmployeeFactory () {
    this.create = (name) => {
        switch (name){
            case "developer": return new Developer(name)
            break;
            case "tester": return new Tester(name)
            break;
            default:
                return "Pass a type to create an object" 
        }
    }
}

function sayName() {
    console.log(`I am a ${this.name}`)
}

const employeeFactory = new EmployeeFactory();

const dev = employeeFactory.create("developer");
sayName.call(dev)

console.log("-------------------------")

const tester = employeeFactory.create("tester");
sayName.call(tester)