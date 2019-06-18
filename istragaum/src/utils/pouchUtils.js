import PouchDB from 'pouchdb';
import PouchdbFind from 'pouchdb-find';

PouchDB.plugin(PouchdbFind);
const db = new PouchDB('favoritas');
db.createIndex({
    index: {
        fields: ['url']
    }
});

export default db;