
const Connection = require('./../services/connection'),
data = require('./../sources/datas')['DATAS'];
class Factory { 
	['serviceBuilder'] = () =>{
		const connect = new Connection(data['PK'], data['to_PURCHASE']);//data['PK'] = private key
		return {
			'connections': connect
		};
	};
}
module.exports = Factory;