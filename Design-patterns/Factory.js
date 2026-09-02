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

const employeeFactory = new EmployeeFactory();
const dev = employeeFactory.create("developer");
console.log(dev.name)
console.log("----------")

const tester = employeeFactory.create("tester");
console.log(tester.name);