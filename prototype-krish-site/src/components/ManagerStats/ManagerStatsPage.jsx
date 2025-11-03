import "./ManagerStatsPageStyle.css"
import BarChart from "./Bar";
import PieChart from "./Pie";

function ManagerStatsPage(){

    const ongoingTaskData = {
        labels: ['Rachel Green', 'Phoebe Buffay', 'Ross Geller', 'Chandler Bing', 'Monica Geller', 'Joey Tribbiani'],
        datasets: [{
            label: '# of Ongoing Tasks',
            data: [16,5,8,5,8,3],
            backgroundColor:   ["rgba(174, 198, 207, 0.6)",
                                "rgba(255, 209, 220, 0.6)",
                                "rgba(255, 179, 71, 0.6)",
                                "rgba(119, 221, 119, 0.6)",
                                "rgba(203, 170, 203, 0.6)",
                                "rgba(253, 253, 150, 0.6)"
                                ]
        }]

    }

    const ongoingTaskOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: ""
                }
            },
            y: {
            beginAtZero: true,
            title: {
                display: true,
                text: "Number of Tasks Assigned"
            }
            }
        }
    }

    const tagDistributionData = {
        labels: ['TAG X', 'TAG Y', 'TAG Z', 'TAG A', 'TAG B', 'TAG C'],
        datasets: [{
            label: '# of Ongoing Tasks',
            data: [25,5,2,7,19,5],
            backgroundColor:   ["rgba(174, 198, 207, 0.6)",
                                "rgba(255, 209, 220, 0.6)",
                                "rgba(255, 179, 71, 0.6)",
                                "rgba(119, 221, 119, 0.6)",
                                "rgba(203, 170, 203, 0.6)",
                                "rgba(253, 253, 150, 0.6)"
                                ]
        }]

    }

    const tagDistributionOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "tags"
                }
            },
            y: {
            beginAtZero: true,
            title: {
                display: true,
                text: "Number of Tasks with Tag"
            }
            }
        }
    }

    const taskStatus = {
        labels: ['Completed', 'Ongoing', 'Overdue'],
        datasets: [{
            label: '# of Tasks',
            data: [76, 45, 12],
            backgroundColor:   ["rgba(255, 179, 71, 0.6)",
                                "rgba(119, 221, 119, 0.6)",
                                "rgba(253, 253, 150, 0.6)"
                                ],
            borderWidth: 1
        }]
    }

    return (
        <>
            <div className="titleContainer box welcomeBanner">

                <h1 className="title">Team Statistics</h1>
                <div className="sort-container selector">
                    <select className="sort-select" id="teamSelect">
                        <option value="teamA">Team A</option>
                        <option value="teamB">Team B</option>
                    </select>
                </div>
            </div>

            <div className="taskNumberOverview">  
                <div className="conatinerHorizontal">
                    <div className="taskNumberOverall miniCard">
                        <h2 id="taskNumberOverall">133</h2>
                        <span> 
                            {/* <i className="fa-solid fa-clipboard-list"></i>  */}
                            {/* <FontAwesomeIcon icon="fa-solid fa-clipboard-list" /> */}
                            Overall Tasks
                        </span>
                    </div>
                    <div className="taskNumberCompleted miniCard">
                        <h2 id="taskNumberCompleted">76</h2>
                        <span>
                            {/* <FontAwesomeIcon icon="fa-solid fa-square-check" /> */}
                            Completed Tasks
                        </span>
                    </div>
                </div>
                <div className="conatinerHorizontal">
                    <div className="taskNumberOngoing miniCard">
                        <h2 id="taskNumberOngoing">45</h2>
                        <span>
                            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-right" /> */}
                            Ongoing Tasks
                        </span>
                    </div>
                    <div className="taskNumberOverdue miniCard">
                        <h2 id="taskNumberOverdue">12</h2>
                        <span>
                        {/* <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /> */}
                        Overdue Tasks
                        </span>
                    </div>
                </div>
            </div>

            <div className="conatinerHorizontal halfContainer">
                <div className="box" >
                    <div style={{width:"90%"}}>
                        <div className="titleContainer">
                            <h4 className="title">Task Distribution</h4>
                            <div className="sort-container">
                                <select className="sort-select" id="filterTask">
                                    <option value="taskNumber">No. of Tasks</option>
                                    <option value="taskTime">Time of Tasks</option>
                                </select>
                            </div>
                        </div>
                        {/* <div style={{backgroundColor:"black"}}>
                            
                        </div> */}
                        <div style={{width:"90%",height:"250px"}}>
                            <BarChart data={ongoingTaskData} options={ongoingTaskOptions}/>
                        </div>
                    </div>  
                </div>
                <div className=" box" style={{display:"flex", flexDirection:"row", width:"100%"}}>
                    <div style={{width:"95%"}}>
                        <div className="tableConatiner table-responsive">
                            <table className="table table-hover table-sm caption-top" id="ongoingTaskTable">
                                {/* <caption>Task Distribution</caption> */}
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th>Employee</th>
                                        <th>Ongoing</th>
                                        <th>Task ID</th>
                                        <th>Tags</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Rachel Green</td>
                                        <td>16</td>
                                        <td>xxx</td>
                                        <td>tag1, tag2, tag3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Phoebe Buffay</td>
                                        <td>5</td>
                                        <td>xxx</td>
                                        <td>tag4, tag5, tag6</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Ross Geller</td>
                                        <td>8</td>
                                        <td>xxx</td>
                                        <td>tag7, tag8, tag9</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Chandler Bing</td>
                                        <td>5</td>
                                        <td>xxx</td>
                                        <td>tag1, tag2, tag3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Monica Geller</td>
                                        <td>8</td>
                                        <td>xxx</td>
                                        <td>tag4, tag5, tag6</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Joey Tribbiani</td>
                                        <td>3</td>
                                        <td>xxx</td>
                                        <td>tag7, tag8, tag9</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="conatinerHorizontal" style={{gap:"10px"}}>
                <div className="box" style={{height:"90px"}}>
                    <div>
                        Most Ongoing
                        <h5 id="MostOverdueEmployee">ID: 1 </h5>
                        <h5 id="MostOngoingEmployee">Rachel Green</h5>
                    </div>
                </div>
                <div className="box" style={{height:"90px"}}>
                    <div>
                        Most Completed
                        <h5 id="MostOverdueEmployee">ID: 5</h5>
                        <h5 id="MostCompletedEmployee">Monica Geller</h5>
                    </div>
                </div>
                <div className="box" style={{height:"90px"}}>
                    <div>
                        Most Overdue
                        <h5 id="MostOverdueEmployee">ID: 6</h5>
                        <h5 id="MostOverdueEmployee">Joey Tribi</h5>
                    </div>
                </div>
            </div>

            <div className="conatinerHorizontal halfContainer">
                <div className="conatinerHorizontal halfContainer" >
                    <div className="conatinerVertical third">
                        <div className="box" style={{height:"90px"}}>
                            <div>
                                <h2>TAG 1</h2>
                                Average Tag
                            </div>
                        </div>
                        <div className="box" style={{height:"90px"}}>
                            <div>
                                <h2>TAG 2</h2>
                                Hardest Tag
                            </div>
                        </div>
                        <div className="box" style={{height:"90px"}}>
                            <div>
                                <h2>TAG 3</h2>
                                Easiest Tag
                            </div>
                        </div>
                    </div>
                    
                    <div className="box twoThird" style={{height:"350px"}}>
                        <div>
                            <div className="titleContainer">
                                <h4 className="title">Task Status</h4>
                                <div className="sort-container">
                                    <select className="sort-select" id="filterEmployee">
                                        <option value="All">All</option>
                                        <option value="Employee1">1</option>
                                        <option value="Employee2">2</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <PieChart options={{}} data={taskStatus}/>
                                {/* <canvas id="taskStatusPieChart" style={{width:"auto", height: "150px"}}></canvas> */}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="conatinerHorizontal">
                    <div className="box" style={{height:"350px"}}>
                        <div style={{display:"flex", flexDirection:"column", justifyContent: "space-evenly", width:"100%"}}>
                            <h4 className="title">Overdue Task Details </h4>
                            <div className="table-responsive">
                                {/* <h4 className="title">Overdue Task Details </h4> */}
                                <table className="table table-hover table-sm caption-top" id="overDueTaskTable">
                                    {/* <caption>Overdue Task Details</caption> */}
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Employee</th>
                                            <th scope="col">Overdue</th>
                                            <th scope="col">Task ID</th>
                                            <th scope="col">Tags</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Rachel Green</td>
                                            <td>3</td>
                                            <td>1, 2, 3</td>
                                            <td>tag1, tag2, tag3</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Phoebe Buffay</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>tag1</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Ross Geller</td>
                                            <td>2</td>
                                            <td>5, 6</td>
                                            <td>tag1, tag2</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Monica Geller</td>
                                            <td>1</td>
                                            <td>7</td>
                                            <td>tag1</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Joey Tribbiani</td>
                                            <td>5</td>
                                            <td>8, 9, 10, 11, 12</td>
                                            <td>tag1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>Most Common Tag: tag1</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="conatinerHorizontal halfContainer">
                <div className="employeeTaskDistribution box" >
                            <div style={{width:"90%",height:"250px"}}>
                                <BarChart data={tagDistributionData} options={tagDistributionOptions}/>
                            </div>
                    
                </div>
                <div className="ongoingTaskOverview box" >
                    <div style={{width:"95%"}}>
                        {/* <h4 className="title">Task Distribution</h4> */}
                            <div className="tableConatiner table-responsive">
                                <table className="table table-hover table-sm caption-top" id="overallEmployeeTable">
                                    {/* <caption>Overall Employee Task Data</caption> */}
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Employee</th>
                                            <th scope="col">Ongoing</th>
                                            <th scope="col">Completed</th>
                                            <th scope="col">Overdue</th>
                                            <th scope="col">Task ID</th>
                                            <th scope="col">Tags</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Rachel Green</td>
                                            <td>16</td>
                                            <td>6</td>
                                            <td>3</td>
                                            <td>xxx</td>
                                            <td>tag1, tag2, tag3</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Phoebe Buffay</td>
                                            <td>5</td>
                                            <td>14</td>
                                            <td>1</td>
                                            <td>xxx</td>
                                            <td>tag1</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Ross Geller</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>2</td>
                                            <td>xxx</td>
                                            <td>tag1, tag2</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Chandler Bing</td>
                                            <td>5</td>
                                            <td>16</td>
                                            <td>0</td>
                                            <td>xxx</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Monica Geller</td>
                                            <td>8</td>
                                            <td>20</td>
                                            <td>1</td>
                                            <td>xxx</td>
                                            <td>tag1</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Joey Tribbiani</td>
                                            <td>3</td>
                                            <td>11</td>
                                            <td>5</td>
                                            <td>xxx</td>
                                            <td>tag1</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManagerStatsPage;