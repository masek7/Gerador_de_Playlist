function verificar(){
var data= new Date()
var ano= data.getFullYear()
var fano= document.getElementById('txtano')
var res= document.getElementById('segunda')
var ser= document.getElementById('tudo')

if(fano.value.length == 0 || fano.value> ano){
    window.alert('Erro! Digite uma idade válida.')
} else{
    var fsex= document.getElementsByName('radsex')
    var idade= ano- Number(fano.value)
   var genero= ''
   var img= document.createElement('img')
   img.setAttribute('id','foto')


   if(fsex[0].checked){
       genero= 'Homem'
       if (idade >=3 && idade < 12){
           genero='uma Criança'
           window.location="CriancaMasc.html" 
           
           
           
           
           
           //criança
           
       } else if (idade < 29){
           genero='um Jovem'
           //jovem
            window.location="JovemMasc.html"
       } else if (idade < 55) {
           genero='um Adulto'
           window.location="AdultoMasc.html"
           //adulto
           
            
       } else{
           genero='um Senhor'
           //idoso
           window.location="Idoso.html"
       }


   } else if (fsex[1].checked){
       genero= 'Mulher'
       if (idade >=3 && idade < 12){
           window.location="CriancaFem.html"
           genero='uma Criança'
        //criança
    } else if (idade < 29){
        
        window.location="JovemFem.html"
        genero='uma Jovem'
        //jovem
    } else if (idade < 55) {
        window.location="AdultoFem.html"
        //adulta
        genero='uma Adulta'
       

    } else{
       
       window.location="Idosa.html"
        //idosa
        genero='uma Senhora'
    }
   }
   res.style.textAlign='center'
   res.innerHTML= `Detectamos ${genero} com ${idade} anos. <p> Que tal assistir a: </p> `
   ser.style.textAlign='<li></li>, center'
   
   res.appendChild(img)
   
}
 



 }
