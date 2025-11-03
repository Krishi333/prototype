import React, { useState } from "react";
import "./tabs.css";

function TabGroup() {
  const types = ["My Tasks", "My Projects"];
  const [active, setActive] = useState(types[0]);

  // task page container content
  const topicContent = {
    "My Tasks": [
      { name: "Task 1", priority: "High", due: "10-09-2026", project: "Project 4" },
      { name: "Task 2", priority: "Medium", due: "10-09-2026", project: "Project 3" },
      { name: "Task 3", priority: "Low", due: "10-09-2026", project: "Project 2" },
      { name: "Task 4", priority: "High", due: "10-09-2026", project: "Project 1" }
    ],
  };
// project page container content
  const projectContent = {
    "My Projects": [
      { name: "Project 1", priority: "High", due: "10-09-2026" },
      { name: "Project 2", priority: "Medium", due: "10-09-2026" },
      { name: "Project 3", priority: "Medium", due: "10-09-2026" },
      { name: "Project 4", priority: "Low", due: "10-09-2026" }
    ]
  };

  const tabContent = {...topicContent,...projectContent };
  const boxes = tabContent[active];


  // Whole to do list functionality for the whole rest of the code -> 
  const [todoItems, setTodoItems] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("Medium");

  const addTask = () => {
    if (newTaskName.trim() === "") return;
    const newTask = {
      name: newTaskName.trim(),
      priority: newTaskPriority,
      due: "N/A",
      project: ""
    };
    setTodoItems([...todoItems, newTask]);
    setNewTaskName("");
    setNewTaskPriority("Medium");
  };

  const updateTask = (index, value) => {
    const updated = [todoItems];
    updated[index].name = value;
    setTodoItems(updated);
  };

  const updateTaskPriority = (index, value) => {
    const updated = [...todoItems];
    updated[index].priority = value;
    setTodoItems(updated);
  };

  const removeTask = (index) => {
    const updated = todoItems.filter((_, i) => i !== index);
    setTodoItems(updated);
  };

  return (
    <div className="tab-container">
      <div className="tab-header">
        {types.map((type) => (
          <div
            key={type}
            className={`tab ${active === type ? "active" : ""}`}
            onClick={() => setActive(type)}
          >
            {type}
          </div>
        ))}
      </div>


      <div className="tab-content-flex"> {/*this is the container for the boxes for projects and to do lists */}
        <div className="task-boxes">
          <div className="task-grid">
            {boxes.map((box, index) => (
              <div key={index} className="box">
                <p><strong>Name:</strong> {box.name}</p>
                <p><strong>Priority:</strong> {box.priority}</p>
                <p><strong>Due Date:</strong> {box.due}</p>
                {box.project && <p><strong>Project:</strong> {box.project}</p>}
              </div>
            ))}
          </div>
        </div>

        {active === "My Tasks" && ( /* to do list functionality */
          <div className="todo-list">
            <div className="todo-insert">
              <input
                type="text"
                placeholder="Add new task"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
              />
              <select
                value={newTaskPriority}
                onChange={(e) => setNewTaskPriority(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <button onClick={addTask}>Add</button>
            </div>

            <ul>
              {todoItems.map((item, idx) => (
                <li key={idx}>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => updateTask(idx, e.target.value)}/> 


                  <select
                    value={item.priority}
                    onChange={(e) => updateTaskPriority(idx, e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                  <button className="remove-button" onClick={() => removeTask(idx)}>X</button>
                </li>
              ))}
            </ul>

          </div>
        )}

      </div>

    </div>
  );
}

export default TabGroup;
