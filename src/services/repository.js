const data = require('./../sources/datas')['DATAS'];
helpers = require('./../services/helpers.js'),
chalk = require('chalk'),
Factory = require('./../services/Factory');
require('console-stamp')(console, {
	'format': ':date(yyyy/mm/dd HH:MM:ss)'
});

let ModuleService;
const services = new Factory()['serviceBuilder']();
let connections = services['connections'],
web3 = connections['web3'],
web3WSS = connections['web3WSS'],
subscription,
rcCount = 0;
const MethodAddliq = '0xf305d719',
      MethodAddliq2 = '0xe8e33700',
      MethodAddliq3 = '0x267dd102',
      MethodAddliq5 = '0xe8078d94',
      MethodRemoveliq = '0xbaa2abde',
      MethodRemoveliq2 = '0x02751cec',
      MethodRemoveliq3 = '0xaf2979eb',
      MethodRemoveliq5 = '0xded9382a',
      MethodRemoveliq6 = '0x5b0d5984',
      MethodRemoveliq7 = '0x2195995c',
      SnipeID = data['to_PURCHASE'].substr(2, data['to_PURCHASE'].length).toLowerCase(),
      UnicryptID = data['unicrypt_CA'].substr(2, data['unicrypt_CA']['length']).toLowerCase(),
      DxsaleCO = data['dxsale_CO'].substr(2, data['dxsale_CO']['length']).toLowerCase(),

setNetworkPath = async path=>{
    if(path === "pancakeswap")
        ModuleService = require('./../modules/pancakeswap/repository');
    if(path === "spookyswap")
        ModuleService = require('./../modules/spookyswap/repository');
	return ModuleService;
},

getPath = async choose=>{
	let pair,purchase;
	pair = await getPair();
	if(choose === 'buy' ){
        if(pair === data['WBNB']){
            purchase = [data['WBNB'], data['to_PURCHASE']]
        }
        if(pair === data['BUSD']){
            purchase = [data['WBNB'], data['BUSD'], data['to_PURCHASE']]
        }
    }
    if(choose === 'sell' ){
        if(pair === data['WBNB']){
            purchase = [data['WBNB'], data['to_PURCHASE']]
        }
        if(pair === data['BUSD']){
            purchase = [data['WBNB'], data['BUSD'], data['to_PURCHASE']]
        }
    }
	return purchase;
},

sendApprove = async address=>{
	let get_allowance;
	get_allowance = await ModuleService.allowance();
    if(get_allowance > 0x3b9ac9ff){
        console.log('Already approved');
    }
    else{
        await ModuleService.approve(address);
    }
    return true;
},
getPair = ()=>{
	if (data['pair']) {
		if (data['pair'].toUpperCase() !== 'BUSD' && data['pair'].toUpperCase() !== 'BNB'){
            console.log(chalk['red']('Error : unexpected pair parameter, option : bnb or busd'));
            return false;
        }
		if (data['pair'].toUpperCase() === 'BUSD') return data['BUSD'];
		if (data['pair'].toUpperCase() === 'BNB') return data['WBNB'];
    }
    else{
        return data['WBNB'];
    }
},
WATCH_SELL = async(_0x670d4d = false)=>{
	if (_0x670d4d !== true) {
		const _0x23ce83 = async()=>{
			let STATE = await helpers.price_watch_to_sell();
			console.log(chalk.green('SELL STATE :' + STATE));
			if (STATE === true) return true;
			else await helpers.timerWait(0.65),
			await _0x23ce83();
		};
        if(data['sell_watcher'] === true){
            data['initial_price'] = (await helpers.getPrice(1))['busd'];
            return  _0x23ce83();
         }
        else{
            return true;
        }
	} else return true;
},
SELL_AT = async(_0x1ea5ab = false)=>{
	let info,
	decimals,
	symbol,
	balanceToken,
	Price,
	sell_price;
	decimals = (await helpers.connectToContract())['decimals'];
	symbol = (await helpers.connectToContract())['symbol'];
	balanceToken = await helpers.getBalance() * 10 ** -decimals;
	Price = await helpers.getPrice(1);
	sell_price = data['sell_at'];
	info = {
		'balanceToken': balanceToken,
		'initialBalanceBUSD': (balanceToken * Price['busd'])['toFixed'](5) + 'USD',
		'initialTokenPrice': (Price['busd'] * 1)['toFixed'](5) + ' USD',
		'amount_sell': balanceToken * data['amount_of_sell'] / 0x64
	}
	console.log(chalk.yellow('your balance : ' + balanceToken['toFixed'](4) + ' ' + symbol + '=>' + info['initialBalanceBUSD'] + '|'));
	console.log(chalk.yellow('TP : ' + sell_price + ' USD | CURRENT PRICE : ' + info['initialTokenPrice'] + ' |'));
	console.log(' ');
    if(parseFloat(Price['busd']) >= parseFloat(sell_price)){
        console.log(chalk.green('HIT TARGET PRICE'));
        if(_0x1ea5ab === true){
            data['skip_on_sell'] = true;
            return  SELL(false, true, true);
         }
         else{
            return true;
         }
     }
     else{
        return (await helpers.timerWait(0.5), SELL_AT());
     }
},
BUY = async(_0x41c331, _0x4ee11e)=>{
    if(_0x41c331 === true)
        await subscription.unsubscribe();
	let path;
	await setNetworkPath(data['module']),
	path = await getPath('buy');
	try{
		if(data['rug_checker'] === true){
            if(rcCount === 0){
              rcCount++;
              console.log('Running rug checker....');
              await helpers.checkVerified(); // https://api.bscscan.com/
              await helpers.rugChecker(data['network']);//https://honeypot.api.rugdoc.io
            }
        }
		if (data['check_tax'] === true && data['pair'] === 'BNB') {
			let tax = await helpers.checkTax();
			console.log(chalk.yellow('sell tax =' + tax['sell'] + '% | buy tax =' + tax['buy'] + '%'));
            if(parseInt(data['max_tax_buy']) <= tax['buy'] || parseInt(data['max_tax_sell']) <= tax['sell']) 
                throw new Error('Tax too high from you settings!');
		}
        if(data['spam_buy'].toString() === 'null' || data['spam_buy'].toString() === '0'){
            await ModuleService.swapExactETHForTokens('0', data['AMOUNT_OF_BUY'], path);
            await sendApprove(Number(data['lastNonce']) + 1);
        }
        else{
            await ModuleService.swapExactETHForTokensSpam('0', data['AMOUNT_OF_BUY'], path);
            await sendApprove(Number(data['lastNonce']) + Number(data['spam_buy']));
        }
		data['sell'] === true && await SELL(false, false, false);
		return true;
	}catch(err) {
		if (_0x4ee11e === true){
            console.log(chalk.red(err));
            return false;
        }
		return console.log(chalk['red'](err)),
		setTimeout(() =>process.exit(0), 0x9c4);
	}
},

SELL = async(_0x31123d, _0x5de4c6, _0x2a3b9c = false)=>{
	let _0x423895 = data['skip_on_sell'];
    if(_0x31123d === true)
        await subscription.unsubscribe();
	let _0x3bbb8e;
	await setNetworkPath(data['module']),
	_0x3bbb8e = await getPath('sell');
	if(data['sell_watcher'] === true){
        if(_0x423895 === false){
            _0x423895 = true;
            await WATCH_SELL(_0x2a3b9c);
        }
    }
	if(data['time_to_sell'] !== false){
        if(_0x423895 === false){
            console.log(chalk.cyan('Wait ' + data['time_to_sell'] + ' second to sell'));
            _0x423895 = true;
            await helpers['timerWait'](data['time_to_sell']);
        }
    }
	if(data['sell_at'] !== false){
        if(_0x423895 === false){
            console.log(chalk.cyan('Will sell when price > ' + data['sell_at']));
            _0x423895 = true;
            await SELL_AT();
        }
    }
	try {
        if (_0x5de4c6 === true) 
            await sendApprove(null);
		if (data['check_tax'] === true) {
			let _0x4dea50 = await helpers.checkTax();
			console['log'](chalk.yellow('sell tax =' + _0x4dea50['sell'] + '% | buy tax =' + _0x4dea50['buy'] + '%'));
            if (parseInt(data['max_tax_buy']) <= _0x4dea50['buy'] || parseInt(data['max_tax_sell']) <= _0x4dea50['sell'])
                throw new Error('Tax too high from you settings!');
		}
		await ModuleService.swapExactTokensForETHSupportingFeeOnTransferTokens('0', _0x3bbb8e);
		return true;
	} catch(_0x28449c) {
		return console.log(chalk.red(_0x28449c)),
		setTimeout(()=>process['exit'](0), 0x9c4);
	}
},

SNIPE_LIQUIDITY = async()=>{
	console.log(chalk.yellow('= = = = =  Check liquidity add in :' + data['to_PURCHASE'] + '  = = = = =')),
	subscription = web3WSS.eth.subscribe('pendingTransactions', (_0x4e568b, _0x20ab53)=>{})['on']('data', async _0x13d944=>{
		await web3.eth.getTransaction(_0x13d944).then(async _0xd97778=>{
            if (
                _0xd97778 != null
                && _0xd97778['input'].includes(MethodAddliq) 
                && _0xd97778['input'].includes(SnipeID) || _0xd97778 != null
                && _0xd97778['input'].includes(MethodAddliq2)
                && _0xd97778['input'].includes(SnipeID) || _0xd97778 != null
                && _0xd97778['input'].includes(MethodAddliq3)
                && _0xd97778['from'].toLowerCase().includes(DxsaleCO) || _0xd97778 != null
                && _0xd97778['input'].includes(MethodAddliq5)
                && _0xd97778['to'].toLowerCase().includes(UnicryptID)
            )
            console.log(' hash :' + _0xd97778['hash'] + ' | \x0a value : ' + web3.utils['fromWei'](_0xd97778['value'], 'ether') + 'BNB | \x0a nonce :' + _0xd97778['nonce'] + ' | \x0a gasPrice : ' + _0xd97778['gasPrice'] + ' | \x0a ');
			console.log(chalk.yellow('Using ' + data['gasPriceBuy'] + ' GWEI to buy'));
			return PAUSE_TRADE(true);
		});
	})['on']('error', _0x408f5a =>{
		console['log'](chalk['red'](_0x408f5a));
	});
},

SNIPE_REMOVE_LIQUIDITY = async()=>{
	console.log(chalk.yellow('= = = = =  Check liquidity remove in :' + data['to_PURCHASE'] + '  = = = = = ')),
	subscription = web3WSS.eth.subscribe('pendingTransactions', () =>{})['on']('data', async _0x8d374c=>{
		await web3.eth.getTransaction(_0x8d374c).then(_0x3cb497 =>{
		    if (
                _0x3cb497 != null
                && _0x3cb497['input'].includes(MethodRemoveliq)
                && _0x3cb497['input'].includes(SnipeID) || _0x3cb497 != null
                && _0x3cb497['input'].includes(MethodRemoveliq2)
                && _0x3cb497['input'].includes(SnipeID) || _0x3cb497 != null
                && _0x3cb497['input'].includes(MethodRemoveliq3)
                && _0x3cb497['input']['includes'](SnipeID) || _0x3cb497 != null
                && _0x3cb497['input']['includes'](MethodRemoveliq5)
                && _0x3cb497['input']['includes'](SnipeID) || _0x3cb497 != null
                && _0x3cb497['input'].includes(MethodRemoveliq6)
                && _0x3cb497['input'].includes(SnipeID) || _0x3cb497 != null
                && _0x3cb497['input'].includes(MethodRemoveliq7)
                && _0x3cb497['input']['includes'](SnipeID)
            ) 
            console['log'](' hash :' + _0x3cb497['hash'] + ' |\x20 value :' + web3.utils.fromWei(_0x3cb497['value'], 'ether') + ' BNB | \x0a nonce : ' + _0x3cb497['nonce'] + ' |\x20 gasPrice :' + _0x3cb497['gasPrice'] + '|\x20 ');
			data['gasPriceSell'] = web3.utils.fromWei((_0x3cb497['gasPrice'] * 0x1 + 0x12a05f200).toString(), 'gwei');
			console.log(chalk.yellow('Using' + data['gasPriceSell'] + ' GWEI to sell'));
			return SELL(true);
		});
	})['on']('error', err =>{
		console.log(chalk.red(err));
	});
},
PAUSE_TRADE = async(_0x99d5ba = false) =>{
	console.log(chalk.yellow('= = = = = = = = Checking until trade is open = = = = = = = ='));
	let _0x48045a = await BUY(_0x99d5ba, true);
	if(_0x48045a === false){
        setTimeout(() =>{
		return PAUSE_TRADE();
        }, 0x1f4);
    }
};
module['exports'] = {
	'BUY': BUY,
	'SNIPE_LIQUIDITY': SNIPE_LIQUIDITY,
	'PAUSE_TRADE': PAUSE_TRADE,
	'SELL': SELL,
	'SNIPE_REMOVE_LIQUIDITY': SNIPE_REMOVE_LIQUIDITY,
	'SELL_AT': SELL_AT
};