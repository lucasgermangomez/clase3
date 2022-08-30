const dividir = (a, b) => {
    
    if(a==0 || b==0){
        console.log("No se puede dividir un numero por cero")
    } else {
        const resultado = a/b;
        return resultado;
    }
};

module.exports = dividir;
