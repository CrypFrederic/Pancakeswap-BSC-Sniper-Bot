
const Web3 = require('web3'),
data = require('./../sources/datas')['DATAS'],
constants = require('./../sources/constants')['CONSTANTS'];
class Connection {
	constructor(privatekey, to_PURCHASE) {
		this.PK = privatekey,
		this.web3 = new Web3(data['WSS_NODE']), 
		this.web3WSS = new Web3(new Web3.providers.WebsocketProvider(data['WSS_NODE'], constants['wsOption'])),
		this.account = this.web3.eth.accounts.privateKeyToAccount(this.PK),  //
		this.contractAddress= new this.web3.eth.Contract(constants['CONTRACT_ABI'], to_PURCHASE),
		this.router = new this.web3.eth.Contract(JSON.parse(constants['ROUTER_ABI']), constants['ROUTER_ADDRESS']),
		this.factory = new this.web3.eth.Contract(JSON.parse(constants['FACTORY_ABI']), constants['FACTORY_ADDRESS']);
	}
}
module.exports = Connection;