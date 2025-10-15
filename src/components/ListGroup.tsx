import { useState } from "react"; 
 //this is necessary for using state in a functional component
 //so that the component can remember things eg which item is selected

type ListGroupProps = {
    items: string[];
    heading?: string;
    onSelectItem: (item: string) => void;  //this will notify the parent component when an item is selected eg
}

function ListGroup() { //this function is the component itself
    

    const items =[  //just a constant array of items to display
    'London', 
    'Doncaster',
    'Sheffield',
    'Liverpool',
    'Newcastle'
    ];

    const [selectedIndex, setSelectedIndex] = useState(-1);
    //selectedIndex is the current selected items positon
    //setSelectedIndex is a function that can be used to change the selectedIndex
    //useState(-1) means the initial value of selectedIndex is -1 , which means nothing is selected currently 

    return (
    <>  
        <h1 className="h4 mb-3">List</h1> 
        <ul className="list-group">

            {items.map((item, index) => //this loops through each item in the items array and creates a list item for it
            (<li 
                key={item}
                className = {"list-group-item" + (index === selectedIndex ? "active" : "")}
                onClick={() => setSelectedIndex(index)}  //when the item is clicked, it sets the selectedIndex to the index of the clicked item
            >
                {item}
            </li>) 
            )}

        </ul>
    </>
    );
}

export default ListGroup;