import employee from "./employee.json" with { type: "json" };
console.log(employee);
const parserdEmployee = JSON.parse(employee);
console.log(parserdEmployee);
