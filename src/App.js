import React from 'react';
import './App.css';
import task from './sample/task.json';

//componentes

import Tasks from './componets/tasks';
import TaskForm from './componets/Taskform';

class App extends React.Component{

  state = {
    tareas: task,
    taskId: task.length,
    showForm: false
  }

  toggleForm  = () => {
      this.setState({
      ...(this.state),
      showForm: !this.state.showForm
    })
  }

  addTask = (d) =>{
    const newTask ={
      description: d,
      id: this.state.taskId
    }
    this.setState({
      tareas: [...this.state.tareas, newTask],
      taskId: this.state.taskId + 1

    })

  }
  deleTask= (id) =>{
    const dl = this.state.tareas.filter(task => task.id !== id);
    this.setState({tareas: dl})

  }

  checkDon= (id) => {
    const check = this.state.tareas.map(task =>{
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tareas: check})
  }

  render(){
    return (
      <div>
        <div className="flex justify-center items-center mt-10">
          <div className="shadow-2xl relative font-bold shadow-outline w-2/5 border-gray-500 bg-white rounded-xl">
             <div className="py-4 border-b">
               <span
                className="font-semibold text-2xl px-4 py-2 divide-y divide-light-gray-400 text-gray-600"
              >HomeWork</span>
             </div>
            <Tasks
              propiedad={this.state.tareas}
              delete={this.deleTask}
              checkbo={this.checkDon}
            />

            <div
              className="flex justify-center text-center py-2"
              /*style={{
                bottom: '-35px'
              }}*/
            >
              <button
                className="font-medium text-md uppercase bg-yellow-200 text-gray w-20  h-14 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
                onClick={this.toggleForm}
              >{this.state.showForm ? 'hidden' : 'show'}
              </button>
            </div>
              {this.state.showForm ? ( <TaskForm aggTarea={this.addTask}/>) : null }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
