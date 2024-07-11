// Write your solution in this file!

const employee={
    name:'Sam',
    streetAddress:'11 Broadway',
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee={...employee};
    newEmployee[key]=value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key]=value;
        return employee
} destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'sam');
 function deleteFromEmployeeByKey(employee, key){
        const {name, ...newEmployee}= employee;
        return newEmployee;
 }
 function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
 }