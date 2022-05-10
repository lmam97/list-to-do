import React from "react";
import PropTypes from 'prop-types';

class Tareas extends React.Component {

    render(){
        const { task } = this.props;
        const { done } = task;
        return <div className="flex justify-between mt-2">
                    <div className="flex gap-2">
                        <input type="checkbox"
                        onChange={this.props.checkbo.bind(this, task.id)} className="flex items-center px-2 ml-4 mr-4 mt-5"/>
                        <div
                            className={ `text-xl py-3 block font-medium mb-2 ${ done ? 'text-green-500' : 'text-gray-600' }` }
                        >
                            {task.description}
                            {task.done}
                        </div>
                    </div>
                    <button className="mr-8 text-xl mb-2 bg-transparent text-red-500" onClick={this.props.delete.bind(this, task.id)}>
                        &times;
                    </button>
            </div>
    }
}

Tareas.propTypes = {
    task: PropTypes.object.isRequired
  }
export default Tareas;
