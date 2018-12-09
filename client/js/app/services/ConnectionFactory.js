//Module Pattern
//função autoinvocada
var ConnectionFactory = (function () {

    const stores = ['negociacoes'];
    const version = 1;
    const dbName = 'banco';
    
    var connection = null;

    var close = null;
    
    //exporta a classe através do módulo e mantém a variáveis protegidas
    return class ConnectionFactory {
    
        constructor() {
    
            throw new Error('Não é possível criar instâncias de ConnectionFactory');
        }
    
        static getConnection() {
    
            return new Promise((resolve, reject) => {
    
                let openRequest = window.indexedDB.open(dbName, version)
    
                openRequest.onupgradeneeded = e => {
    
                    ConnectionFactory._createStores(e.target.result);
                };
                
                openRequest.onsuccess = e => {
                    
                    //Monkey Patch -- modifica a api a força
                    //ignora o código anterior e executa o código criado
                    if(!connection){
                        connection = e.target.result;
                        close = connection.close.bind(connection);
                        connection.close = function() {
                            throw new Error('Você não pode fechar diretamente a conexão');
                        };
                    }
    
                    resolve(e.target.result);
                };
                
                openRequest.onerror = e => {
                    
                    console.log(e.target.error);
    
                    reject(e.target.error.name);
                };
            });
        }
        
        static _createStores(connection) {
            
            stores.forEach(store => {
    
                if (connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);
    
                connection.createObjectStore(store, { autoIncrement: true});
            });
        }

        static closeConnection() {

            if(connection) {
                close();
                connection = null;
            }
        }
    }
})();