
                            class Redes
                            {   
                                
                                constructor(oct1,oct2,oct3,oct4,BitsHost,Nsubredes)
                                {
                                    
                                    
                                    this.Red =
                                    {
                                        ipD: [oct1,oct2,oct3,oct4],
                                        ipB: [this.convertirBinario(oct1),this.convertirBinario(oct2),this.convertirBinario(oct3),this.convertirBinario(oct4),],
                                        mascaraRedD: this.convertirMascaraDecimal(this.identificarMascara(BitsHost)),
                                        mascaraRedB :0,
                                        redPD:0,
                                        redPB:0,
                                        numerodeSubRedes:Nsubredes,
                                        NumeroBitsP:0,
                                        nuevaMascaraSubRedB:0,
                                        nuevaMascaraSubRedD:0,
                                        cantidadHostSubRed :0,
                                        salto:0,
                                        subRedesD:[],
                                        ipSubRed : []
                                

                                    }
                                    //console.log(Nsubredes);
                                this.prestamosBits(Nsubredes);
                                this.Red.nuevaMascaraSubRedD = this.convertirMascaraDecimal(this.identificarMascara(BitsHost+this.Red.NumeroBitsP));
                                    this.Red.mascaraRedB = this.transformarArrayBin(this.Red.mascaraRedD);
                                    this.Red.nuevaMascaraSubRedB = this.transformarArrayBin(this.Red.nuevaMascaraSubRedD);
                                    this.Red.redPD=this.convertirMascaraDecimal(this.calcularRed(`${this.Red.ipB[0]}.${this.Red.ipB[1]}.${this.Red.ipB[2]}.${this.Red.ipB[3]}`,`${this.Red.mascaraRedB[0]}.${this.Red.mascaraRedB[1]}.${this.Red.mascaraRedB[2]}.${this.Red.mascaraRedB[3]}`));
                                    this.Red.redPB=this.transformarArrayBin(this.Red.redPD);
                                    this.Red.salto = this.calcularSaltoRed(this.identificarMascara(BitsHost),this.identificarMascara(BitsHost+this.Red.NumeroBitsP));
                                    this.Red.subRedesD = this.crearSubRedes(this.Red.redPD,this.Red.salto,Nsubredes);
                                   //this.construyendoIpSubRed(this.Red.redPD,this.Red.subRedesD);
                                }

                                concatenarArray(n)
                                {
                                    var concat = '';
                                    for(let a in n)
                                    {
                                        if(n!=3){concat+= `${n[a]}.`;}
                                        else{concat+= `${n[a]}`;}
                                    }
                                    
                                    return concat;
                                }
                                transformarArrayBin(n)
                                {
                                    var Binarios = new Array();
                                    for (var elemento in n)
                                    {
                                    Binarios.push(this.convertirBinario(n[elemento]));
                                    
                                    }
                                    return Binarios;
                                }
                                

                                

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
                                prestamosBits(n){
                                    var i = 0;
                                    while( n>Math.pow(2,i))
                                    {
                                    i++;
                                    }
                                    this.Red.NumeroBitsP = i;
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
                                        var salto = 256-mascaraN[0] ; var nocteto=0;}
                                    else if(mascaraN[1]-mascaraA[1]!=0){
                                        
                                        var salto = 256-mascaraN[1]; var nocteto=1;}
                                    else if(mascaraN[2]-mascaraA[2]!=0){
                                        
                                        var salto = 256-mascaraN[2];var nocteto=2;}
                                    else if(mascaraN[3]-mascaraA[3]!=0){
                                        
                                        var salto = 256-mascaraN[3];var nocteto=3;}
                                        var datos = {salto :salto, nocteto:nocteto}          
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
                                crearSubRedes(red,salto,nredes)
                                {
                                    var  subRedes = new Array();
                                    var i = 0;
                                    while(i<nredes)
                                    {
                                        subRedes.push(red[salto.nocteto]+i*salto.salto);
                                        i++;
                                    }
                                    return {numOcteto:subRedes,posicion:salto.nocteto};
                                }
                                // construyendoIpSubRed(red,subRedesD)
                                // {
                                //         var RedesConstruidas = [];
                                        
                                //         subRedesD.numOcteto.array.forEach(element => {
                                //             let subRed = red;
                                //             subRed = subRed[subRedesD.posicion] = element;
                                //             RedesConstruidas.push(subRed);
                                //         }); 
                                //         console.log(RedesConstruidas);
                                // }

                            

                            }
                        


                            
                            var a = new Redes(125,0,0,0,8,60);
                            var b = new Redes(192,168,1,0,24,4);
                            console.log(a.Red);
                            console.log(b.Red);
                            
                        export default Redes;