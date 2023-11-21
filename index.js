function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator to keep the original employee intact
    const updatedEmployee = {...employee};
    // Update the value for the given key in the new object
    updatedEmployee[key] = value;
    // Return the updated employee
    return updatedEmployee
}
const employee = {
    name: "James Mcdevitt",
    age: 29,
    position: "Sales Manager"
};
updateEmployeeWithKeyAndValue(employee, 'salary' ,50000);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the value for the given key in the employee object
    employee[key] = value;
    // Return the updated employee
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    // Create a clone of the employee object using the spread operator
    const employeeClone = { ...employee };
    // Delete the specified key from the clone
    delete employeeClone[key];
    // Return the updated employee clone
    return employeeClone;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key and its value from the employee object
    delete employee[key];
    // Return the updated employee object
    return employee;
  }
  
