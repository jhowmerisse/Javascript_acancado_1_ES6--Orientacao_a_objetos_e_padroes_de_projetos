class NegociacaoController {

  constructor() {
    //bind faz com que a referencia entre querySelector e document nao seja perdida.
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    
    // let data= new Date(this._inputData.value.replace(/-/g, /,/));


    /** uso de funcao anonima e spread operator (...) onde cada elemento se torna um parametro passado*/
    /** split trasnforma string em um array separando por - */
    /**map retorna novo array e executa algo em cada item do array */
    // let data = new Date(...this._inputData.value
    
    //   .split(/-/)
    //   .map(function(item, indice){
    //     return item - indice % 2;
    // }));


    /**arrow function (=>) onde ja é feito o retorno automaticamente sem o return*/
    let data = new Date(
      ...this._inputData.value
        .split('-')
        .map((item, indice) => item - indice % 2)
    );

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );
    console.log(negociacao);


  }
}