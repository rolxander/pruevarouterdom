    class Redes
    {
        

        convertirBinario(n)
        {
        let x = '';
            if(1<n)
            {
                for(;1<n;)
                {
                x+=n%2;
                n=this.dividirBinario(n);   
                }
            }
            if(n==1)
            {
                x+='1';
            }
            if(n==0)
            {
                x+='0';
            }
            let d = 8 - x.length;
            for(d;d>0;d--)
            {
                x+='0';
            }

            x=this.invertir(x);
        return x;
        }
        dividirBinario(n)
        {
            return n%2==0 ? n/2 : (n/2)-0.5; 
        }

        invertir(cadena) {
            let x = cadena.length;
            let cadenaInvertida = "";
        
            while (x>=0) {
            cadenaInvertida = cadenaInvertida + cadena.charAt(x);
            x--;
            }
            return cadenaInvertida
        }
        identificarMascara(m){ // tranformar mascara a binario
            var mascaraBinaria="";
            var contador=0;
            for(var i = 0;i<35;i++){
                if(i == 17 || i == 8 || i==26)
                {
                    mascaraBinaria+='.'
                    contador++;    
                }else if(i<m+contador)
                {
                    mascaraBinaria+='1';
                }else{
                    mascaraBinaria+='0';
                }
                
            }
            //console.log(mascaraBinaria);
            //console.log(mascaraBinaria.length);
            return mascaraBinaria;  
        }
        calcularPrestamoBits(n) // calcular cuantos bits necesita
        {   
            for(var i = 0;;i++ )
            {
                if(Math.pow(2,i)>=n)
                {
                    break;
                }
            }
            return i;
        }
        
        calcularNuevaMascara(a,p) //calcular nueva masca mandar el host anterior y el nuevo
        {
            
            return this.identificarMascara(a+p);
        }
        convertirDecimal(c) // convercion de binario a decimal
        {
            var decimal = 0;
            for(var i=0 ;i<c.length;i++)
            {
                decimal+=(c.charAt(i)*1)*Math.pow(2,(c.length-1)-i);
            }
            return decimal;
        }

        convertirMascaraDecimal(c)// convertir direcion binaria a decimal
        {
            var a = new Array();
            var octeto = '';
            for(var i = 0; i<=c.length;i++)
            {   if(c.charAt(i)!='.' && i!=c.length){
                octeto += c.charAt(i);
                }else
                {
                    a.push((this.convertirDecimal(octeto)*1));
                    octeto='';
                }
            }
            //console.log(a);
            return a;
        }

        calcularSaltoRed(a,n)
        {
            var mascaraA = this.convertirMascaraDecimal(a);
            var mascaraN = this.convertirMascaraDecimal(n);
            if(mascaraN[0]-mascaraA[0]!=0){
                console.log("estoy en 0");var salto = 256-mascaraN[0] ; var nocteto=0;}
            else if(mascaraN[1]-mascaraA[1]!=0){
                console.log("estoy en 1");
                var salto = 256-mascaraN[1]; var nocteto=1;}
            else if(mascaraN[2]-mascaraA[2]!=0){
                console.log("estoy en 2");
                var salto = 256-mascaraN[2];var nocteto=2;}
            else if(mascaraN[3]-mascaraA[3]!=0){
                console.log("estoy en 3");
                var salto = 256-mascaraN[3];var nocteto=3;}
                var datos = new Array(salto,nocteto);            
            return datos;
        }

        calcularRed(ip,mask)
        {
            var  red='';
            for(var i = 0; i<ip.length;i++)
            {
                if(ip.charAt(i)==1 && mask.charAt(i)==1)
                {
                    red+='1';
                }else if(ip.charAt(i)=='.')
                {
                    red+='.';
                }
                else
                {
                    red+='0';
                }
            }
            return red;
            
        }


    }
 


    
     var a = new Redes();
export default Redes;