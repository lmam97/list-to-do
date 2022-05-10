import React from 'react';
import Tareas from './task';


class Tasks extends React.Component {
    render(){
      return <div> 
                {this.props.propiedad.map(cadTask=> <Tareas 
                task={cadTask}
                delete={this.props.delete}
                checkbo={this.props.checkbo}
                key={cadTask.id}/>)}
             </div>
    }
}

export default Tasks;
 