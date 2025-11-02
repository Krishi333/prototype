import "./ManagerStatsPageStyle.css"

function ManagerStatsPage(){
    return (
        <>
            <div className="sort-container selector">
                <select className="sort-select" id="teamSelect">
                    <option value="teamA">Team A</option>
                    <option value="teamB">Team B</option>
                </select>
            </div>

            <div className="taskNumberOverview">  
                <div className="conatinerHorizontal">
                    <div className="taskNumberOverall miniCard">
                        <h2 id="taskNumberOverall">133</h2>
                        <span> 
                            <i className="fa-solid fa-clipboard-list"></i> 
                            Overall Tasks
                        </span>
                    </div>
                    <div className="taskNumberCompleted miniCard">
                        <h2 id="taskNumberCompleted">76</h2>
                        <span>
                            <i className="fa-solid fa-square-check"></i>
                            Completed Tasks
                        </span>
                    </div>
                </div>
                <div className="conatinerHorizontal">
                    <div className="taskNumberOngoing miniCard">
                        <h2 id="taskNumberOngoing">45</h2>
                        <span>
                            <i className="fa-solid fa-rotate-right"></i>
                            Ongoing Tasks
                        </span>
                    </div>
                    <div className="taskNumberOverdue miniCard">
                        <h2 id="taskNumberOverdue">12</h2>
                        <span>
                        <i className="fa-solid fa-circle-exclamation"></i>
                        Overdue Tasks
                        </span>
                    </div>
                </div>
            </div>

            <div className="conatinerHorizontal halfContainer">
                <div className="employeeTaskDistribution box" >
                    <div className="selector">
                        <h3 className="title">Task Distribution</h3>
                        <div className="sort-container ">
                            <select className="sort-select" id="filterTask">
                                <option value="taskNumber">No. of Tasks</option>
                                <option value="taskTime">Time of Tasks</option>
                            </select>
                        </div>
                        <div>
                            <canvas id="taskDistributionNumber" style={{width:"auto", height:"200px"}}></canvas>
                        </div>
                    </div>
                </div>
                <div className="overdueTaskOverview box" >
                    <div>
                        <h4 className="title">Task Distribution</h4>
                        <div className="tableConatiner">
                            <table id="ongoingTaskTable" style={{height:"auto", width:"400px"}}>
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>Ongoing</th>
                                        <th>Task ID</th>
                                        <th>Tags</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Rachel Green</td>
                                        <td>16</td>
                                        <td>xxx</td>
                                        <td>tag1, tag2, tag3</td>
                                    </tr>
                                    <tr>
                                        <td>Phoebe Buffay</td>
                                        <td>5</td>
                                        <td>xxx</td>
                                        <td>tag4, tag5, tag6</td>
                                    </tr>
                                    <tr>
                                        <td>Ross Geller</td>
                                        <td>8</td>
                                        <td>xxx</td>
                                        <td>tag7, tag8, tag9</td>
                                    </tr>
                                    <tr>
                                        <td>Chandler Bing</td>
                                        <td>5</td>
                                        <td>xxx</td>
                                        <td>tag1, tag2, tag3</td>
                                    </tr>
                                    <tr>
                                        <td>Monica Geller</td>
                                        <td>8</td>
                                        <td>xxx</td>
                                        <td>tag4, tag5, tag6</td>
                                    </tr>
                                    <tr>
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
                        <h4 id="MostOverdueEmployee">ID: 1 </h4>
                        <h4 id="MostOngoingEmployee">Rachel Green</h4>
                    </div>
                </div>
                <div className="box" style={{height:"90px"}}>
                    <div>
                        Most Completed
                        <h4 id="MostOverdueEmployee">ID: 5</h4>
                        <h4 id="MostCompletedEmployee">Monica Geller</h4>
                    </div>
                </div>
                <div className="box" style={{height:"90px"}}>
                    <div>
                        Most Overdue
                        <h4 id="MostOverdueEmployee">ID: 6</h4>
                        <h4 id="MostOverdueEmployee">Joey Tribi</h4>
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
                            <h4 className="title">Task Status</h4>
                            <div>
                                <div className="selector">
                                    <div className="sort-container">
                                        <select className="sort-select" id="filterEmployee">
                                            <option value="All">All</option>
                                            <option value="Employee1">1</option>
                                            <option value="Employee2">2</option>
                                        </select>
                                    </div>
                                </div>
                                <canvas id="taskStatusPieChart" style={{width:"auto", height: "150px"}}></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="conatinerHorizontal">
                    <div className="box" style={{height:"350px"}}>
                        <div>
                            <h4 className="title">Overdue Task Details </h4>
                            <table id="overDueTaskTable">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>Overdue</th>
                                        <th>Task ID</th>
                                        <th>Tags</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Rachel Green</td>
                                        <td>3</td>
                                        <td>1, 2, 3</td>
                                        <td>tag1, tag2, tag3</td>
                                    </tr>
                                    <tr>
                                        <td>Phoebe Buffay</td>
                                        <td>1</td>
                                        <td>4</td>
                                        <td>tag1</td>
                                    </tr>
                                    <tr>
                                        <td>Ross Geller</td>
                                        <td>2</td>
                                        <td>5, 6</td>
                                        <td>tag1, tag2</td>
                                    </tr>
                                    <tr>
                                        <td>Monica Geller</td>
                                        <td>1</td>
                                        <td>7</td>
                                        <td>tag1</td>
                                    </tr>
                                    <tr>
                                        <td>Joey Tribbiani</td>
                                        <td>5</td>
                                        <td>8, 9, 10, 11, 12</td>
                                        <td>tag1</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Most Common Tag: tag1</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="conatinerHorizontal halfContainer">
                    <div className="box" style={{height:"250px"}}>
                        <div>
                            <h4>Overall Data</h4>
                            <div className="tableConatiner">
                                <table id="overallEmployeeTable" style={{height:"200px", width:"800px"}}></table>
                            </div>
                        </div>
                    </div>
                <div className="conatinerVertical twenty" style={{marginBottom:"0px"}}>
                    <div className="box" style={{height:"100px"}}>
                        <div>
                            Highest Priority Task  
                            <h3>Task 3</h3>
                        </div>
                    </div>
                    <div className="box" style={{height:"100px"}}>
                        <div>
                            Lowest Priority Task
                            <h3>Task 5</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManagerStatsPage;