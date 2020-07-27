import React from 'react';
import {v4 as uuidv4} from 'uuid';
import ToDo from './ToDo';

class App extends React.Component{
    constructor(props){
        super(props);
        //"this" in this context is used for instance of a class
        this.state = {
            newToDo:"",  //Kepp track of our new to-do value 
            toDos: [] // Keep track all the to do
        }

    }

    addToDo=(event)=>{
        event.preventDefault();
        //console.log("Test Add to Do!")
        const newTask = {
            uniqueId: uuidv4(),
            value:this.state.newToDo
        };
        console.log(newTask);
        //create a clone of our toDos array, so we can make changes before updating state
        const currentToDoList = [...this.state.toDos];
        currentToDoList.push(newTask);

        this.setState({
            toDos:currentToDoList, //update todos list
            newToDo: ""//clear the new "to-do" view
        })

    }
    updateItem(key, value){
        //We never reassign the contents pf this.State.
        //this.state is only used fo reading values 
        this.setState({[key]:value});
    }
    render()
    {
        return(
         <>
            <h1>React To-Do App</h1>
            <form onSubmit={this.addToDo}>
                <lable htmlFor="newToDo">
                    Enter a new "To-Do":
                    <input type="text" 
                           name="newToDo"
                           id="newToDo" 
                           required 
                           value= {this.state.newToDo}
                           //"this" in this context means the element the event is triggered on
                           onChange={event => this.updateItem('newToDo', event.target.value)}/> 
                </lable>
                <input type = "submit" 
                        value="Add New To-Do"/>
            </form>
            <h1>Current To-Dos</h1>
            <ul>
                {this.state.toDos.map(toDo =>(//We can use .map() to loop through our array contents. Great for outputting something like those toDos
                <ToDo key = {toDo.uniqueId} task = {toDo.value}/>))}
                
            </ul>
        </>
        );
    }
}
export default App;