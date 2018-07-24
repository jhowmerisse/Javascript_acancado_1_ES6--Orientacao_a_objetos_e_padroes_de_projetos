class Negociacao {

    constructor(data, quantidade, valor) {
        //3 - new Date(data.getTime()) guarda um novo objeto e nao uma referencia
        //impedindo de alterar
        this._data = new Date(data.getTime()),
        this._quantidade = quantidade,
        this._valor = valor
        //2 - impede que altere valores depois de instaciado. n1._data = ... nao funciona 
        //mas não impede de alterar propriedades de um objeto. n1.data.setDate(11) 
        Object.freeze(this);
    }
    //1 - get impede o usuário de alterar o valor com n1.quantidade = 1000
    //mas ainda nao impede que altere por n1._quantidade = 1000
    get volume(){
        return this._quantidade * this._valor;
    }

    get data() {
        // retorna uma copia do objeto, impedindo de alterar propriedades no objeto principal
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}