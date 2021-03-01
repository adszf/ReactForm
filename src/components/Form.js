import React, { useState } from "react";


function Form(props) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        if (name === null || name === '') {
           e.preventDefault();
            alert('null')
            return  undefined
        }          
        e.preventDefault();
        props.addTask(name);
        //console.log(props.addTask)
        setName("");  
    }

    function handleChange(e) {
        console.log(e.target.value);
        setName(e.target.value);
        console.log("Typing!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
        </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}

            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
      </button>
        </form>
    );
}

export default Form;