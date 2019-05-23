//IIFE = Immediately Invoked Function Expression
//Não toca o escopo global, funciona como o awake ou start  do unity, se eu entendi direito
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()