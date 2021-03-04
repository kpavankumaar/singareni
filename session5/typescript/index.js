"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Student = void 0;
console.log("check");
var name1 = "ravi";
name1 = "srk";
var num = 10;
num = 20;
var obj = {
    name: "ravi"
};
obj.name = "srk";
// obj = {}
var obj1 = obj;
obj1 = {
    name: "rajesh"
};
// arrow function 
var calc = function (a) { return a * a; };
var names;
names = ["krishna", "radha"];
var movies;
function add(num1, num2) {
    return num1 * num2;
}
var sum = add;
sum(10, 20);
var obj2 = {
    name: "ravi",
    age: 20
};
obj2.eduction = "";
var obj3 = {
    name: "srk"
};
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        return _super.call(this, name) || this;
    }
    Employee.prototype.info = function () {
        this.name;
        this.age;
        this.gender;
    };
    return Employee;
}(Person));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(Employee));
exports.Student = Student;
var obj4 = new Person("krishna");
console.log(obj4.name);
var obj5 = new Employee("balaram");
