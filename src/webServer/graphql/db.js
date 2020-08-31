const { DataStore} = require ('notarealdb');

const store = new DataStore('../../database');

module.exports = {

	words :store.collection('words'),
	lists :store.collection('lists')
};