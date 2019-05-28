//npm i node-schedule
//Temporizador para as mais variadas tarefas
const schedule = require ('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * 2', function (){ // segundos, minutos, hora, dia do mês, mês, dia da semana(1 = segunda). * = qualquer tempo específico
    // o /5 quer dizer que será executado a cada 5 segundos. Se fosse só 5, seria executado no segundo 5
    //Se especificar a hora, só ocorrerá naquela hora, nem antes e nem depois

    console.log('Executando tarefa 1!', new Date().getSeconds(), 'segundos se passaram')

})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000) //tempo em que vai cancelar a tarefa 1, no caso, 20 segundos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]  //Vai executar de segunda a sexta
regra.hour = 16 //Só vai executar entre 16:00 até 16:59
regra.second = 30   //Só vai executar quando o segundo for 30 do minuto correspondente

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())    //Quando passar por 30 segundos de um minuto qualquer, respeitando as regras setadas, ele vai aplicar o console.log
})

