//module export using ECMAscript 2015 pattern
export default class Person{
    constructor(name){
        this.name = name
    }

    toString(){
        return `Person: ${this.name}`
    }
}