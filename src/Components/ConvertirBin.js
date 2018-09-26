//Import Paquetes
import React ,{Component} from 'react';
import Redes from './public/js/Redes';

//Componente
class ConvertirBin extends Component{
    tranformar(){   
        let oct1 = document.getElementById('oct1').value;
        let oct2 = document.getElementById('oct2').value;
        let oct3 = document.getElementById('oct3').value;
        let oct4 = document.getElementById('oct4').value;
        let resultado = document.getElementById("resultado");
        let objetoR = new Redes();
         oct1 = objetoR.convertirBinario(oct1);
         oct2 = objetoR.convertirBinario(oct2);
         oct3 = objetoR.convertirBinario(oct3);
         oct4 = objetoR.convertirBinario(oct4);
        let respuesta = `${oct1}.${oct2}.${oct3}.${oct4}`;
        resultado.innerHTML =respuesta;
    }
    render(){

        return(<div>
                    <h2>Convertir a Binario: Introduce la direccion ip</h2>
                    <input type ="number" id="oct1"/>
                    <input type ="number" id="oct2"/>
                    <input type ="number" id="oct3"/>
                    <input type ="number" id="oct4"/>
                    <button onClick={this.tranformar}>Convertir</button>
                    <div id="resultado"></div>
            </div>);

    }
}
export default ConvertirBin;