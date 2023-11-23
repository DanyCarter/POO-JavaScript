// Las dos opciones son validas y hacen los mismo

function Animal (nombre, edad){
    let nuevoAnimal = Object.create(ConstructorAnimal)
    nuevoAnimal.nombre = nombre
    nuevoAnimal.edad = edad 
    return nuevoAnimal
}

let ConstructorAnimal = {
    canta: function(){
        return '${this.nombre} puede cantar'
    },
    baila: function(){
        return '${this.nombre} puede bailar'
    }
}

function Gato(nombre, edad, colorBigotes){
    let nuevoGato = Animal(nombre, edad)
    Object.setPrototypeOf(nuevoGato, ConstructorGato)
    nuevoGato.colorBigotes = colorBigotes
    return nuevoGato
}

let ConstructorGato = {
    bigotes(){
        return `Tengo bigotes color ${this.colorBigotes}`
    }
}

class Animal{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    comer(){
        return "Que hambre tengo"
    }
}
