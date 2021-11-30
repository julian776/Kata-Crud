import React, { useContext, useState, useRef} from 'react'
import List from './List'
import Store from './Store'
const HOST_API = "http://localhost:8080/api";

function GroupField() {
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store)
    const item = todo.item
    const [state, setState] = useState(item);

    const {dispatch2, state:{groups}} = useContext(Store)
    const currentGroupList = groups.list
    
    const onAdd = (event) => {
        event.preventDefault();
    
        const request = {
          name: state.name,
          id: null,
          completed: false
        };
    
    
        fetch(HOST_API + "/todo", {
          method: "POST",
          body: JSON.stringify(request),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then((todo) => {
            dispatch({ type: "add-item", item: todo });
            setState({ name: "" });
            formRef.current.reset();
          });
      }
    
    return(
        currentGroupList.map((group)=>{ return (
        <div>
        <fieldset className="border">
            <legend>
                {group}
                <form ref={formRef}>
                <input type="text" 
                    name="name"
                    defaultValue={item.name} 
                    placeholder="Ingrese una tarea"
                    onChange={(event) => {
                        setState({ ...state, name: event.target.value })
                    }} />
                <button onClick={onAdd}>Add</button>
                </form>
            </legend>
            <List />
        </fieldset>
        </div>
    )})
    )
}

export default GroupField
