let teamATaskNumberStatusData = [
    {Employee: "Rachel Green", OngoingNumber: 16, OngoingTime: 8, Completed: 6, Overdue: 3},
    {Employee: "Phoebe Buffay", OngoingNumber: 5, OngoingTime: 6, Completed: 14, Overdue: 1},
    {Employee: "Ross Geller", OngoingNumber: 8, OngoingTime: 8, Completed: 9, Overdue: 2},
    {Employee: "Chandler Bing", OngoingNumber: 5, OngoingTime: 8, Completed: 16, Overdue: 0},
    {Employee: "Monica Geller", OngoingNumber: 8, OngoingTime: 9, Completed: 20, Overdue: 1},
    {Employee: "Joey Tribbiani", OngoingNumber: 3, OngoingTime: 3, Completed: 11, Overdue: 5}
];

let teamSelectedData = teamATaskNumberStatusData;

function getTotalFieldValue(field){
    let total = 0;
    for (let i = 0; i < teamSelectedData.length; i++){
        total += teamSelectedData[i][field];
    }
    return total;
};

function getMaxEmployeeField(field){
    let max = 0;
    let employee = "";
    for (let i = 0; i < teamSelectedData.length; i++){
        if (teamSelectedData[i][field] >= max){
            max = teamSelectedData[i][field];
            employee = teamSelectedData[i].Employee;
        }
    }
    return employee;
};


// console.log(getTotalFieldValue("OngoingNumber"));

document.getElementById("MostOngoingEmployee").innerHTML = getMaxEmployeeField("OngoingNumber");
document.getElementById("MostCompletedEmployee").innerHTML = getMaxEmployeeField("Completed");
document.getElementById("MostOverdueEmployee").innerHTML = getMaxEmployeeField("Overdue")

document.getElementById("taskNumberOverall").innerHTML = getTotalFieldValue("Completed") + getTotalFieldValue("OngoingNumber") + getTotalFieldValue("Overdue");
document.getElementById("taskNumberCompleted").innerHTML = getTotalFieldValue("Completed");
document.getElementById("taskNumberOngoing").innerHTML = getTotalFieldValue("OngoingNumber");
document.getElementById("taskNumberOverdue").innerHTML = getTotalFieldValue("Overdue");

function dataFormat(field){
    const dataFormatted = teamSelectedData.map(employee => [employee[field]]);
    return dataFormatted;
};

let overallEmployee = [
    {Employee: "Rachel Green", Ongoing: 16, Completed: 6, Overdue: 3, TaskID: "1, 2, 3", Tags:"tag1, tag2, tag3"},
    {Employee: "Phoebe Buffay", Ongoing: 5, Completed: 14, Overdue: 1, TaskID: "4", Tags:"tag1"},
    {Employee: "Ross Geller", Ongoing: 8, Completed: 9, Overdue: 2, TaskID: "5, 6", Tags:"tag1, tag2"},
    {Employee: "Chandler Bing", Ongoing: 5, Completed: 16, Overdue: 0, TaskID: "", Tags:""},
    {Employee: "Monica Geller", Ongoing: 8, Completed: 20, Overdue: 1, TaskID: "7", Tags:"tag1"},
    {Employee: "Joey Tribbiani", Ongoing: 3, Completed: 11, Overdue: 5, TaskID: "8, 9, 10, 11, 12", Tags:"tag1"}
];

let ongoingTask = [
    {Employee: "Rachel Green", Ongoing: 16, TaskId: "xxx", Tags: "tag1, tag2, tag3"},
    {Employee: "Phoebe Buffay", Ongoing: 5, TaskId: "xxx", Tags: "tag4, tag5, tag6"},
    {Employee: "Ross Geller", Ongoing: 8, TaskId: "xxx", Tags: "tag7, tag8, tag9"},
    {Employee: "Chandler Bing", Ongoing: 5, TaskId: "xxx", Tags: "tag1, tag2, tag3"},
    {Employee: "Monica Geller", Ongoing: 8, TaskId: "xxx", Tags: "tag4, tag5, tag6"},
    {Employee: "Joey Tribbiani", Ongoing: 3, TaskId: "xxx", Tags: "tag7, tag8, tag9"}
];


let overdueTask = [
    {Employee: "Rachel Green", Overdue: 3, TaskID: "1, 2, 3", Tags:"tag1, tag2, tag3"},
    {Employee: "Phoebe Buffay", Overdue: 1, TaskID: "4", Tags:"tag1"},
    {Employee: "Ross Geller", Overdue: 2, TaskID: "5, 6", Tags:"tag1, tag2"},
    {Employee: "Monica Geller", Overdue: 1, TaskID: "7", Tags:"tag1"},
    {Employee: "Joey Tribbiani", Overdue: 5, TaskID: "8, 9, 10, 11, 12", Tags:"tag1"}
];


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let ongoingTaskTable = document.getElementById("ongoingTaskTable");
let ongoingTaskData = Object.keys(ongoingTask[0]);
generateTableHead(ongoingTaskTable, ongoingTaskData);
generateTable(ongoingTaskTable, ongoingTask);

let overdueTaskTable = document.getElementById("overDueTaskTable");
let overdueTaskData = Object.keys(overdueTask[0]);
generateTableHead(overdueTaskTable, overdueTaskData);
generateTable(overdueTaskTable, overdueTask);

let overallEmployeeTable = document.getElementById("overallEmployeeTable");
let overallEmployeeData = Object.keys(overallEmployee[0]);
generateTableHead(overallEmployeeTable, overallEmployeeData);
generateTable(overallEmployeeTable, overallEmployee);



new Chart( document.getElementById('taskStatusPieChart'), {
    type: 'pie',
    data: {
        labels: ['Completed', 'Ongoing', 'Overdue'],
        datasets: [{
            label: '# of Tasks',
            data: [76, 45, 12],
            borderWidth: 1
        }]
    }
 });


let taskDistributionNumberData = dataFormat("OngoingNumber");
console.log(taskDistributionNumberData)
new Chart(document.getElementById('taskDistributionNumber'), {
    type: 'bar',
    data: {
        labels: dataFormat("Employee"), //['Rachel Green', 'Phoebe Buffay', 'Ross Geller', 'Chandler Bing', 'Monica Geller', 'Joey Tribbiani'],
        datasets: [{
            label: '# of Ongoing Tasks',
            data: dataFormat("OngoingNumber"),
            // borderWidth: 1
      }]
    },
    options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});
