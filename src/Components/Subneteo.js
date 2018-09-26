//Import Paquetes
import React ,{Component} from 'react';

//Componente
class Subneto extends Component{
    tranformar(){
        let oct1 = document.getElementById('oct1').value;
        let resultado = document.getElementById("resultado");
        resultado.innerHTML =oct1;
        

    }
    render(){

        return(<div>
                    <h2>Subneto : Introduce la direccion ip</h2>
                    <input type ="number" id="oct1"/>
                    <input type ="number" id="oct2"/>
                    <input type ="number" id="oct3"/>
                    <input type ="number" id="oct4"/>
                    <button onClick={this.tranformar}>Subetear</button>
                    <div id="resultado"></div>
            </div>);

    }
}
export default Subneto;