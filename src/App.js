import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            newToDo:"",  //Kepp track of our new to-do value 
            toDos: [] // Keep track all the to do
        }

    }

    addToDo(event){
        event.preventDefault();
        console.log("Test Add to Do!")

    }
    render()
    {
        return(
         <>
            <h1>React To-Do App</h1>
            <form onSubmit={this.addToDo}>
                <lable htmlFor="newToDo">
                    Enter a new "To-Do:"
                    <input type="text" name="newToDo" id="newToDo" required/>
                </lable>
                <input type = "submit" value="Add New To-Do"/>
            </form>
        </>
        );
    }
}
export default App;