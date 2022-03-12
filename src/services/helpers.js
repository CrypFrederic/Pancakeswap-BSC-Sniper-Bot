
const inquirer = require('inquirer'),
Factory = require('./../services/Factory'),
data = require('./../sources/datas')['DATAS'],
constants = require('./../sources/constants')['CONSTANTS'],
axios = require('axios'),
chalk = require('chalk');
require('console-stamp')(console, {
	'format': ':date(yyyy/mm/dd HH:MM:ss)'
});
const services = new Factory().serviceBuilder();
let connections = services['connections'],
pancakeRouter = connections['router'],
pancakeFactory = connections['factory'],
web3 = connections['web3'],
contractAddress = connections['contractAddress'];
const showPrompt = async() =>{
	let choose_list = await inquirer.prompt([{
		'type': 'list',
		'name': 'runType',
		'message': 'What do you want to run with this bot?',
		'choices': ['BUY', 'SNIPE LIQUIDITY', 'ULTIMATE BUY', 'SELL', 'SELL AT', 'WATCH REMOVE LIQUIDITY', 'EXIT']
	}]);
	 choose_list['runType'] === 'EXIT' && process.exit(0);
	 return choose_list['runType'];
},
showPromptCa = async() =>{
	let text = await inquirer.prompt([{
		'name': 'contract_address',
		'type': 'input',
		'message': 'Input contract address :'
	}]);
	return text.contract_address;
},
showPromptSellAt = async() =>{
	let _0x3329ae = await inquirer.prompt([{
		'name': 'sell_at',
		'type': 'input',
		'message': 'Input sell at in USD (0.123):'
	}]);
	return 'sell_at';
},
fromExponent = _0x131309 =>{
	return _0x131309['toLocaleString']('fullwide', {
		'useGrouping': false
	}).split('.')[0];
},
getMinutesFromNow = _0x4a6bc2 =>{
	return Date.now() + 0x3e8 * 0x3c * _0x4a6bc2;
},
amountToSell = _0x5f5331 =>{
	return fromExponent(_0x5f5331 * data['amount_of_sell'] / 0x64);
},
rugChecker = async chain =>{;
	let url = 'https://honeypot.api.rugdoc.io/api/honeypotStatus.js?address=' + data['to_PURCHASE'] + '&chain=' + chain,
	_0x1cc526 = await axios.get(url);
	if (_0x1cc526.data.status === 'OK'){
        console['log'](chalk.green('Success passed rug checker'));
        return true;
    }
    if (_0x1cc526.data.status === 'SWAP_FAILED')
        throw new Error('Failed to sell the token. This is very likely a honeypot.');
    if (_0x1cc526.data.status === 'NO_PAIRS')
        throw new Error('Could not find any trading pair for this token on the default router and could thus not test it');
	if (_0x1cc526.data.status === 'HIGH_FEE'){
        console.log(chalk.yellow('please be safe, this token have a high fee ++20%'));
        return true;
    }
},
checkVerified = async() =>{
	let url = data['api_url_network'] + 'api?module=contract&action=getsourcecode&address=' + data['to_PURCHASE'];//https://api.bscscan.com/
	let result = await axios.get(url);
	_0x4ac1f1 = result.data['result'][0]['SourceCode'];
    if(_0x4ac1f1 === ''){
        console.log(chalk.red('The contract is not verified. This is usually a very bad sign'));
        return false;
    }
    else{
        console.log(chalk.green('Token is verified'));
        return true;
    }
},
connectToContract = async() =>{
    if(data['ca'] === 'true'){
        contractAddress = new web3.eth.Contract(constants['CONTRACT_ABI'], data['to_PURCHASE']);
    }
	const _0x32d52f = {
		'decimals': null,
		'symbol': 'TOKEN'
	};
	_0x32d52f['decimals'] = await contractAddress.methods.decimals().call();
	_0x32d52f['symbol'] = await contractAddress.methods.symbol().call();
	return _0x32d52f;
},




getBalance = async() =>{
	return data['ca'] === 'true' && (contractAddress = new web3.eth.Contract(constants['CONTRACT_ABI'], data['to_PURCHASE'])),
	contractAddress['methods']['balanceOf'](data['recipient'])['call']();
},
getPrice = async _0x4a8c3c =>{
	let _0x30c2d4,
	_0x83db7d,
	_0x18cc46,
	_0x27c816;
	_0x18cc46 = (await connectToContract())['decimals'],
	_0x30c2d4 = fromExponent(_0x4a8c3c * 10 **_0x18cc46);
	_0x83db7d = await pancakeRouter.methods.getAmountsOut(_0x30c2d4, [data['to_PURCHASE'], data['WBNB'], data['BUSD']])['call']();
	_0x27c816 = {
		'busd': (_0x83db7d[2] * 10 **-0x12).toFixed(0x12),
		'bnb': (_0x83db7d[1] * 10 **-0x12).toFixed(0x12)
	};
	return _0x27c816;
},

getPriceAny = async(_0x2893e6, _0x38886c, _0x28e44c) =>{
	let _0xc1c9c4,
	_0x55add0,
	_0x31e763;
	_0xc1c9c4 = fromExponent(_0x2893e6 * 10 **_0x38886c);
	let _0xf22619 = _0x28e44c === data['WBNB'] ? [data['WBNB'], '0x55d398326f99059ff775485246999027b3197955', data['BUSD']] : [_0x28e44c, data['WBNB'], data['BUSD']];
	 _0x55add0 = await pancakeRouter['methods']['getAmountsOut'](_0xc1c9c4, _0xf22619).call();
	_0x31e763 = {
		'busd': (_0x55add0[0x2] * 0xa **-0x12).toFixed(0x12),
		'bnb': (_0x55add0[0x1] * 0xa **-0x12).toFixed(0x12)
	};
	return _0x31e763;
},

price_watch_to_sell = async() =>{
	const _0x189242 = _0x68704b;
	let _0x2c9464,
	_0x18df63,
	_0x8695f5,
	_0x14ae23,
	_0x1dcddc;
	_0x8695f5 = (await connectToContract())['decimals'],
	_0x1dcddc = (await connectToContract())['symbol'],
	_0x2c9464 = await getBalance() * 10 **-_0x8695f5,
	_0x14ae23 = await getPrice(1),
	_0x18df63 = {
		'balanceToken': _0x2c9464,
		'initialBalanceBUSD': (_0x2c9464 * _0x14ae23['busd']).toFixed(0x5) + ' USD',
		'initialTokenPrice': _0x14ae23['busd'] + ' USD',
		'percentage': ((_0x14ae23['busd'] - data['initial_price']) / _0x14ae23['busd'] * 0x64).toFixed(0x2),
		'amount_sell': _0x2c9464 * data['amount_of_sell'] / 0x64
	};
    console.log(chalk.yellow('your balance :' + _0x2c9464 + ' ' + _0x1dcddc + ' => ' + _0x18df63['initialBalanceBUSD'] + ' | TP : ' + data['taking_profit'] + '% | SL :' + data['stop_loss']));
    
    console.log(chalk['yellow']('TP :' + data['taking_profit'] + '% | SL : ' + data['stop_loss'] + '% | amount_sell : ' + _0x18df63['amount_sell'] + ' ' + _0x1dcddc + ' or ' + data['amount_of_sell'] + '%'));
    
    console.log(chalk.yellow('buy_price : ' + data['initial_price'] + ' | current_price : ' + _0x18df63['initialTokenPrice'] + ' | profit :' + _0x18df63['percentage'] + '%'));
    
	console.log(chalk.cyan('= = = = = = = = = = = = = = = = = = = = = = = = = = = = = ='));
	if (parseFloat(_0x18df63['percentage']) >= parseFloat(data['taking_profit'])){
         console.log(chalk['cyan']('Taking profit triggered'));
         return true;
    }
	if (parseFloat(_0x18df63['percentage']) <= parseFloat(data['stop_loss'])){
        console.log(chalk['cyan']('Stop loss triggered'));
        return true;
    }
	return false;
},

checkTax = async _0x15a640 =>{
	let _0xce7bc1 = web3.eth.abi.encodeParameter('address', data['to_PURCHASE']),
	_0x2e6361 = '0xd66383cb',
	_0x5d1f9a = _0x2e6361 + _0xce7bc1.substring(2);
	const _0x3985e8 = {
		'buy': -1,
		'sell': -1
	};
	await web3.eth.call({
		'to': '0x2bf75fd2fab5fc635a4c6073864c708dfc8396fc',
		'from': '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
		'value': web3.utils.toWei('0.0001', 'ether'),
		'gas': 0x2aea540,
		'data': _0x5d1f9a
	}).then(_0x33fefb =>{
		let _0x23fd34 = web3.eth.abi.decodeParameters(['uint256',  'uint256',  'uint256',  'uint256',  'uint256',  'uint256'], _0x33fefb),
		_0x2332ab = web3.utils.toBN(_0x23fd34[0]),
		_0x190954 = web3.utils.toBN(_0x23fd34[1]),
		_0x5a5dd2 = web3.utils.toBN(_0x23fd34[2]),
		_0xbffa06 = web3.utils.toBN(_0x23fd34[3]);
		_0x3985e8['buy'] = Math.round((_0x2332ab - _0x190954) / _0x2332ab * 0x64 * 0xa) / 0xa,
		_0x3985e8['sell'] = Math.round((_0x5a5dd2 - _0xbffa06) / _0x5a5dd2 * 0x64 * 0xa) / 0xa;
	})['catch'](err =>{
		throw new Error(err);
	});
	return _0x3985e8;
},

timerWait = _0x4aecc5 =>{
	return new Promise(_0x558894 =>setTimeout(_0x558894, _0x4aecc5 * 0x3e8));
},

checkPair = async() =>{
	let _0x27f7ec,
	_0x514454,
	_0xe18233 = [];
	_0x27f7ec = constants['PAIR'];
	for (let _0x71966b of _0x27f7ec) {
		let _0x3e2202 = await pancakeFactory.methods.getPair(_0x71966b['address'], data['to_PURCHASE']).call();
		_0x514454 = await new web3.eth.Contract(constants['CONTRACT_ABI'], _0x71966b['address']);
		let _0x28dc47 = await _0x514454.methods.balanceOf(_0x3e2202).call(),
		_0x15f242 = (_0x28dc47 * 10 **-0x12).toFixed(0x4),
		_0x4d8cf7 = ((await getPriceAny(0x1, _0x71966b['decimal'], _0x71966b['address']))['busd'] * _0x15f242).toFixed(0x4);
		_0xe18233.push({
			'pair': '' + _0x71966b['name'],
			'balance': _0x15f242,
			'address': '' + _0x71966b['address'],
			'balance_USD': _0x4d8cf7
		}),
		console.log(chalk.cyan('pair :' + _0x71966b['name'] + ' | balance :' + _0x15f242 + ' ' + _0x71966b['name'] + ' ( ' + _0x4d8cf7 + ' USD )'));
	}
	let _0xf650b5 = _0xe18233.reduce(function(_0x2b7ff7, _0x163389) {
        if(_0x163389['balance_USD'] > _0x2b7ff7['balance_USD'])
                return _0x163389;
        else
                return  _0x2b7ff7;
	});
	console.log(chalk.cyan('Choose pair with highest balance : pair' + _0xf650b5['pair'] + ' | balance : ' + _0xf650b5['balance'] + ' ' + _0xf650b5['pair']));
	return  _0xf650b5;
};

module.exports = {
	'showPrompt': showPrompt,
	'showPromptCa': showPromptCa,
	'getMinutesFromNow': getMinutesFromNow,
	'amountToSell': amountToSell,
	'rugChecker': rugChecker,
	'checkVerified': checkVerified,
	'getPrice': getPrice,
	'connectToContract': connectToContract,
	'getBalance': getBalance,
	'price_watch_to_sell': price_watch_to_sell,
	'checkTax': checkTax,
	'timerWait': timerWait,
	'checkPair': checkPair,
	'showPromptSellAt': showPromptSellAt
};