
const Factory = require('./../../services/Factory'),
data = require('./../../sources/datas')['DATAS'],
constants = require('./../../sources/constants')['CONSTANTS'],
helpers = require('./../../services/helpers'),
chalk = require('chalk');

require('console-stamp')(console, {
	'format': ':date(yyyy/mm/dd HH:MM:ss)'
});
const services = new Factory()['serviceBuilder']();
let connections = services['connections'],
pancakeRouter = connections['router'],
pancakeFactory = connections['factory'],
account = connections['account'],
web3 = connections['web3'],
contractAddress = connections['contractAddress'];
const maxUint256 = '115792089237316195423570985008687907853269984665640564039457584007913129639935',
sendSignedTransaction = async(_0x2e9e65, _0x186f87) =>{
	await web3.eth.sendSignedTransaction(_0x2e9e65['rawTransaction'])['on']('transactionHash', _0x327032 =>{
		console.log(chalk.yellow('Success send transaction with :')),
		console.log(chalk.yellow(data['url_network'] + 'tx/' + _0x327032)),
		console.log(chalk.yellow('Will confirmed after tx is success'));
	})['on']('receipt', _0x365267 =>{
		console.log(chalk.green(_0x186f87));
		console.log(chalk.cyan.inverse('= = = = = = = = = = = = = DONE = = = = = = = = = = = = ='));
		return  _0x365267;
	})['on']('error', _0x589fe8 =>{
		console.log(chalk.red('Error occurred with reason :' + JSON[_0x1fc9dd(0x191)](_0x589fe8)));
		return false;
	});
	return true;
},
swapExactETHForTokens = async(_0x1d0295, _0x31abc0, _0x44a581) =>{
	let _0x24fac0,
	_0x42e87c,
	_0x44fe87,
	_0x3f87f8,
	_0x1bb1d7;
	return _0x44fe87 = pancakeRouter.methods.swapExactETHForTokens(_0x1d0295.toString(), _0x44a581, data['recipient'], helpers.getMinutesFromNow(5)).encodeABI(),
	_0x24fac0 = web3.utils.toWei(_0x31abc0.toString(), 'ether'),
	_0x3f87f8 = web3.utils.toWei(data['gasPriceBuy'].toString(), 'gwei'),
	_0x42e87c = {
		'from': data['recipient'],
		'to': constants['ROUTER_ADDRESS'],
		'data': _0x44fe87,
		'gas': data['gasLimit'],
		'gasPrice': _0x3f87f8,
		'value': _0x24fac0
	},
	_0x1bb1d7 = await account.signTransaction(_0x42e87c),
	await web3.eth.estimateGas(_0x42e87c),
	console.log(chalk.yellow('=\x20=\x20=\x20=\x20=\x20=\x20=\x20=\x20Start\x20to\x20buy\x20=\x20=\x20=\x20=\x20=\x20=\x20=\x20=')),
	sendSignedTransaction(_0x1bb1d7, _0x3d76f8(0x164));
},
swapExactETHForTokensSpam = async(_0x6efc4d, _0x36c22d, _0x5c86a5) =>{
	const _0x2c1e68 = _0x51cd4d;
	let _0x23210c,
	_0x22a87f,
	_0x2683d5,
	_0x47dc73,
	_0x458cdc;
	_0x2683d5 = pancakeRouter.methods.swapExactETHForTokens(_0x6efc4d['toString'](), _0x5c86a5, data['recipient'], helpers.getMinutesFromNow(5)).encodeABI(),
	_0x23210c = web3['utils'].toWei(_0x36c22d.toString(), 'ether'),
	_0x47dc73 = web3['utils'].toWei(data['gasPriceBuy'].toString(), 'gwei');
	let _0x7fecc1 = parseInt(data['lastNonce']);
	console.log(chalk.yellow('= = = = = = = = Start to buy = = = = = = = ='));
	for (let _0x1e7df0 = 0; _0x1e7df0 < data['spam_buy']; _0x1e7df0++) {
		_0x22a87f = {
			'from': data['recipient'],
			'to': constants['ROUTER_ADDRESS'],
			'data': _0x2683d5,
			'gas': data['gasLimit'],
			'gasPrice': _0x47dc73,
			'value': _0x23210c,
			'nonce': _0x7fecc1 + _0x1e7df0
		}
		_0x458cdc = await account.signTransaction(_0x22a87f);
		await web3.eth['estimateGas'](_0x22a87f);
		web3.eth['sendSignedTransaction'](_0x458cdc['rawTransaction'])['on']('transactionHash', _0xe2885e =>{
			console.log(chalk.green('buy\x20number\x20:\x20' + _0x1e7df0 + '\x20|\x20nonce\x20:\x20' + (_0x7fecc1 + _0x1e7df0) + ' | tx :' + data['url_network'] + '/tx/' + _0xe2885e));
		});
	}
	await helpers.timerWait(1.5);
	console.log(chalk.yellow('=\x20=\x20=\x20=\x20=\x20Transaction\x20Done\x20:\x20Maybe\x20tx\x20hash\x20will\x20show\x20little\x20bit\x20delay\x20=\x20=\x20=\x20=\x20='));
	return true;
},


swapExactTokensForETHSupportingFeeOnTransferTokens = async(_0x379958, _0x352f2c) =>{
	let _0x491d9c,
	_0x2a0d3c,
	_0x36db5a,
	_0x34d91a,
	_0x382c58,
	_0x36fbca;
	return _0x382c58 = await helpers['getBalance'](),
	_0x36fbca = await helpers.amountToSell(_0x382c58),
	console.log({
		'balance': _0x382c58,
		'amountIn': _0x36fbca
	}),
	_0x2a0d3c = pancakeRouter['methods']['swapExactTokensForETHSupportingFeeOnTransferTokens'](web3.utils.toHex(_0x36fbca), _0x379958, _0x352f2c, data['recipient'], helpers.getMinutesFromNow(5)).encodeABI(),
	_0x36db5a = web3.utils.toWei(data['gasPriceSell'].toString(), 'gwei'),
	_0x491d9c = {
		'from': data['recipient'],
		'to': constants['ROUTER_ADDRESS'],
		'data': _0x2a0d3c,
		'gas': data['gasLimit'],
		'gasPrice': _0x36db5a
	},
	_0x34d91a = await account.signTransaction(_0x491d9c),
	await web3.eth.estimateGas(_0x491d9c),
	console.log(chalk.yellow('= = = = = = = = Start to sell = = = = = = = =')),
	sendSignedTransaction(_0x34d91a, 'Transaction complete! please check your address');
},
getPairAddress = async(_0x490850, _0xa0fb73) =>{
	return pancakeFactory.methods.getPair(_0x490850, _0xa0fb73).call();
},
allowance = async() =>{
	return contractAddress.methods['allowance'](data['recipient'], constants['ROUTER_ADDRESS']).call();
},
approve = async _0x168558 =>{
	let _0x29fb20,
	_0x1e8dd7,
	_0x5099b3;
	_0x29fb20 = await contractAddress.methods['approve'](constants['ROUTER_ADDRESS'], maxUint256).encodeABI();
	_0x1e8dd7 = {
		'from': data['recipient'],
		'to': data['to_PURCHASE'],
		'gas': 0xc350,
		'gasPrice': 0x12a05f200,
		'data': _0x29fb20
	};
	_0x168558 !== null && Object.assign(_0x1e8dd7, {
		'nonce': _0x168558
	});
	_0x5099b3 = await account.signTransaction(_0x1e8dd7);
	console.log(chalk.yellow('= = = = = = = = Start to Approve = = = = = = = ='));
	return sendSignedTransaction(_0x5099b3, 'Success approve token!');
};
module.exports = {
	'getPairAddress': getPairAddress,
	'swapExactETHForTokens': swapExactETHForTokens,
	'swapExactETHForTokensSpam': swapExactETHForTokensSpam,
	'swapExactTokensForETHSupportingFeeOnTransferTokens': swapExactTokensForETHSupportingFeeOnTransferTokens,
	'allowance': allowance,
	'approve': approve
};