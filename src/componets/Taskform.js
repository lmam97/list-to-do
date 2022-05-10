import React from "react";

export default class TaskForm extends React.Component {
    state = {
        //asignamos por defecto el valor de los estados en estos:
        description: ""
    }
    onSubmit = e =>{
        e.preventDefault();
        if(this.state.description !== ''){
            // busco la propiedad que se va a encargar de enviar la tarea y dentro de la funsion envio los datos recibidos (enviado sus estados)
        this.props.aggTarea(this.state.description)
        // con preventDefa... evitamos reiniciar la pagina en submit
        this.setState({
           //asignamos por defecto el valor de los estados en estos:
           description: ""})
        }else {
            alert('campo vacio')
        }
    }

    onChange = e =>{
        //obtenemos el elemto atual del evento con TARGET
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //block text-gray-700 text-sm font-bold mb-2
    //shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"


    render(){
        return(
            <div className="flex justify-center">
                <form className="py-3" onSubmit={this.onSubmit}
                >
                    <input className="shadow appearance-none border-gray-400 border rounded focus:outline-none w-3/2 mr-4 py-2 px-3 leading-tight" type="text"
                    placeholder="write a description" name="description"
                    onChange={this.onChange} value={this.state.description}
                    />

                    <input className="bg-green-500 hover:bg-green-700 text-white
                    font-bold py-2 px-4 rounded focus:outline-none
                     focus:shadow-outline" value="Add" type="submit"
                     />
                </form>
            </div>
        )
    }
}
