//Import Paquetes
import React ,{Component} from 'react';
import Redes from './public/js/Redes';

//Componente
class Subneteo extends Component{
    Subnetear(){   
        let oct1 = document.getElementById('oct1').value*1;
        let oct2 = document.getElementById('oct2').value*1;
        let oct3 = document.getElementById('oct3').value*1;
        let oct4 = document.getElementById('oct4').value*1;
        let BitsHost = document.getElementById('BitsHost').value*1;
        let resultado = document.getElementById("resultado");
        let objetoR = new Redes(oct1,oct2,oct3,oct4,BitsHost);
     
    }
    render(){

        return(<div>
                    <h2>Subnetear Red: Introduce la direccion ip</h2>
                    <input type ="number" id="oct1" min="0" max="255"/>
                    <input type ="number" id="oct2" min="0" max="255"/>
                    <input type ="number" id="oct3" min="0" max="255"/>
                    <input type ="number" id="oct4" min="0" max="255"/>/
                    <input type ="number" id="BitsHost" min="0" max="32"/>
                    <button onClick={this.Subnetear}>Subnetear</button>
                    <div id="resultado"></div>
            </div>);

    }
}
export default Subneteo;