// add fields - the code for it


function EntryFormFields(props){
    return (
        <div className="form-floating">
            <input
                id={props.id}
                type={props.type} 
                className="form-control w-100 mx-0 my-2 rounded m-auto"
                placeholder= {props.label}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                pattern={props.pattern}
                title={props.title}
                required
            />
            <label htmlFor ={props.id}>{props.label}</label>
        </div>
    );
};


export default EntryFormFields;