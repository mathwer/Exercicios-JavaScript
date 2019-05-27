//Uma factory que retorna um valor novo

module.exports = () => {
    return {
        valor: 1,
        inc () {
            this.valor ++ 
        }
        
    }
}