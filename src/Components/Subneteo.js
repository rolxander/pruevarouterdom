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
        let CantRedes = document.getElementById('CantRedes').value*1;
        let resultado = document.getElementById("resultado");
        let objetoR = new Redes(oct1,oct2,oct3,oct4,BitsHost,CantRedes);
        
        resultado.innerHTML=`
        <table>
            <tr>
                <th></th>
                <th>Decimal</th>
                <th>Binario</th>
            </tr>
            <tr>
                <td>Red</td>
                <td>${objetoR.Red.ipD[0]}.${objetoR.Red.ipD[1]}.${objetoR.Red.ipD[2]}.${objetoR.Red.ipD[3]}</td>
                <td>${objetoR.Red.ipB[0]}.${objetoR.Red.ipB[1]}.${objetoR.Red.ipB[2]}.${objetoR.Red.ipB[3]}</td>
            </tr>
            <tr>
                <td>Mascara</td>
                <td>${objetoR.Red.mascaraRedD[0]}.${objetoR.Red.mascaraRedD[1]}.${objetoR.Red.mascaraRedD[2]}.${objetoR.Red.mascaraRedD[3]}</td>
                <td>${objetoR.Red.mascaraRedB[0]}.${objetoR.Red.mascaraRedB[1]}.${objetoR.Red.mascaraRedB[2]}.${objetoR.Red.mascaraRedB[3]}</td>
            </tr>
            <tr>
                <th colspan=3>
                    Subneteo
                </th>
            <tr>
                <th></th>
                <th>Decimal</th>
            <th>Binario</th>
            </tr>    
            </tr>

            <tr>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td> Cantidad de SubRedes </td>
                <td>${CantRedes}</td>
            </tr>
            <tr>
                <td>Nueva Mascara</td>
                <td>${objetoR.concatenarArray(objetoR.Red.nuevaMascaraSubRedD)}</td>
                <td>${objetoR.concatenarArray(objetoR.Red.nuevaMascaraSubRedB)}</td>
            </tr>
            <tr>
                <td>Host por SubRed</td>
                <td>${Math.pow(2,(BitsHost+objetoR.Red.NumeroBitsP-2))}</td>
            </tr>

        
        </table>   
        
        `;
     
    }
    render(){

        return(<div>
                    <h2>Subnetear Red: Introduce la direccion ip</h2>
                    <input type ="number" id="oct1" min="0" max="255"/>
                    <input type ="number" id="oct2" min="0" max="255"/>
                    <input type ="number" id="oct3" min="0" max="255"/>
                    <input type ="number" id="oct4" min="0" max="255"/>/
                    <input type ="number" id="BitsHost" min="0" max="32"/>
                    <input type ="number" id="CantRedes" placeholder="Cantidad de subredes"/>
                    <button onClick={this.Subnetear}>Subnetear</button>
                    <div id="resultado"></div>
            </div>);

    }
}
export default Subneteo;