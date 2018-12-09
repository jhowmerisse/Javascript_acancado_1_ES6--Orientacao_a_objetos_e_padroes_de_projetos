var stores = ['negociacoes'];
var version = 1;
var dbName = 'banco';

class ConnectionFactory {

    constructor() {

        throw new Error('Não é possível criar instâncias de ConnectionFactory');
    }

    static getConnection() {

        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open(dbName, version)

            openRequest.onupgradeneeded = e => {


            };

            openRequest.onsuccess = e => {

            };

            openRequest.onerror = e => {

            };
        });
    }
}