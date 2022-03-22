
const Factory = require('./../../services/Factory'),
data = require('./../../sources/datas').DATAS,
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
sendSignedTransaction = async(_0x48cfd8, _0x2fd859) =>{
	 await web3.eth.sendSignedTransaction(_0x48cfd8['rawTransaction']).on('transactionHash', _0x1049cf =>{
		console.log(chalk.yellow('Success send transaction with : ')),
		console.log(chalk.yellow(data['url_network'] + 'tx/' + _0x1049cf)),
		console.log(chalk.yellow('Will confirmed after tx is success'));
	}).on('receipt', _0xc8a20b =>{
		console.log(chalk.green(_0x2fd859));
		console.log(chalk.cyan.inverse('= = = = = = = = = = = = = DONE = = = = = = = = = = = = ='));
		return _0xc8a20b;
	}).on('error', err =>{
		console.log(chalk.red('Error occurred with reason : ' + JSON.stringify(err)));
		return  false;
	});
	return true;
},

swapExactETHForTokens = async(_0x3804bf, _0x1325b9, _0x368155) =>{
	let _0x9b36b4,
	_0x192b43,
	_0x110fa1,
	_0x11ed36,
	_0xd491d7;
	_0x110fa1 = pancakeRouter.methods.swapExactETHForTokens(_0x3804bf.toString(), _0x368155, data['recipient'], helpers.getMinutesFromNow(5)).encodeABI();
	_0x9b36b4 = web3.utils.toWei(_0x1325b9.toString(), 'ether');
	_0x11ed36 = web3.utils.toWei(data['gasPriceBuy'].toString(), 'gwei');
	_0x192b43 = {
		'from': data['recipient'],
		'to': constants['ROUTER_ADDRESS'],
		'data': _0x110fa1,
		'gas': data['gasLimit'],
		'gasPrice': _0x11ed36,
		'value': _0x9b36b4
	};
	await web3.eth.estimateGas(_0x192b43);
	_0xd491d7 = await account.signTransaction(_0x192b43);
	console.log(chalk.yellow('= = = = = = = = Start to buy = = = = = = = ='));
	return sendSignedTransaction(_0xd491d7, 'Transaction complete! kindly check your token balance');
},

swapExactETHForTokensSpam = async(_0x39a8f6, _0x340c47, _0x189626) =>{
	let _0x5aa255,
	_0x1a0252,
	_0x4512c9,
	_0x49a481,
	_0x53d050;
	_0x4512c9 = pancakeRouter.methods.swapExactETHForTokens(_0x39a8f6.toString(), _0x189626, data['recipient'], helpers['getMinutesFromNow'](5)).encodeABI(),
	_0x5aa255 = web3.utils.toWei(_0x340c47.toString(), 'ether'),
	_0x49a481 = web3.utils.toWei(data['gasPriceBuy'].toString(), 'gwei');
	let _0x1851e8 = parseInt(data['lastNonce']);
	console.log(chalk.yellow('= = = = = = = = Start to buy = = = = = = = ='));
	for (let _0xee7bdc = 0x0; _0xee7bdc < data['spam_buy']; _0xee7bdc++) {
		_0x1a0252 = {
			'from': data['recipient'],
			'to': constants['ROUTER_ADDRESS'],
			'data': _0x4512c9,
			'gas': data['gasLimit'],
			'gasPrice': _0x49a481,
			'value': _0x5aa255,
			'nonce': _0x1851e8 + _0xee7bdc
		},
		_0x53d050 = await account.signTransaction(_0x1a0252),
		await web3.eth.estimateGas(_0x1a0252),
		web3.eth.sendSignedTransaction(_0x53d050['rawTransaction']).on('transactionHash', _0x1f5582 =>{
			console.log(chalk.green('buy number :' + _0xee7bdc + ' | nonce : ' + (_0x1851e8 + _0xee7bdc) + ' | tx :' + data['url_network'] + '/tx/' + _0x1f5582));
		});
	}
	await helpers.timerWait(1.5);
	console.log(chalk.yellow('= = = = = Transaction Done : Maybe tx hash will show little bit delay = = = = ='));
	return true;
},
swapExactTokensForETHSupportingFeeOnTransferTokens = async(_0x3dacbb, _0x473ec7) =>{

	let _0x3ee0e4,
	_0x49378c,
	_0x13b3f1,
	_0x4b4406,
	_0xb4004d,
	_0xb32d7e;
	_0xb4004d = await helpers.getBalance();
	_0xb32d7e = await helpers.amountToSell(_0xb4004d);
	_0x49378c = pancakeRouter.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(web3.utils.toHex(_0xb32d7e), _0x3dacbb, _0x473ec7, data['recipient'], helpers.getMinutesFromNow(5)).encodeABI(),
	_0x13b3f1 = web3.utils.toWei(data['gasPriceSell'].toString(), 'gwei'),
	_0x3ee0e4 = {
		'from': data['recipient'],
		'to': constants['ROUTER_ADDRESS'],
		'data': _0x49378c,
		'gas': data['gasLimit'],
		'gasPrice': _0x13b3f1
	};
	_0x4b4406 = await account.signTransaction(_0x3ee0e4);
	await web3.eth.estimateGas(_0x3ee0e4);
	console.log(chalk.yellow('= = = = = = = = Start to sell = = = = = = = ='));
	return sendSignedTransaction(_0x4b4406, 'Transaction complete! please check your address');
},
getPairAddress = async(_0x5890ee, _0x20afe9) =>{
	return pancakeFactory.methods.getPair(_0x5890ee, _0x20afe9).call();
},
allowance = async() =>{
	return contractAddress.methods.allowance(data['recipient'], constants['ROUTER_ADDRESS']).call();
},
approve = async _0x359456 =>{
	let _0x30ed8a,
	_0x863388;
	_0x30ed8a = await contractAddress.methods.approve(constants['ROUTER_ADDRESS'], maxUint256).encodeABI();
	_0x11e861 = {
		'from': data['recipient'],
		'to': data['to_PURCHASE'],
		'gas': 0xc350,
		'gasPrice': 0x12a05f200,
		'data': _0x30ed8a
	};
	_0x359456 !== null && Object.assign(_0x11e861, {
		'nonce': _0x359456
	});
	_0x863388 = await account.signTransaction(_0x11e861);
	console['log'](chalk.yellow('= = = = = = = = Start to Approve = = = = = = = ='));
	return sendSignedTransaction(_0x863388, 'Success approve token!');
};

module.exports = {
	'getPairAddress': getPairAddress,
	'swapExactETHForTokens': swapExactETHForTokens,
	'swapExactETHForTokensSpam': swapExactETHForTokensSpam,
	'swapExactTokensForETHSupportingFeeOnTransferTokens': swapExactTokensForETHSupportingFeeOnTransferTokens,
	'allowance': allowance,
	'approve': approve
};