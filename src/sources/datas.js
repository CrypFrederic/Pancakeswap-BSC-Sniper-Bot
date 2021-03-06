const args = require('yargs')['argv'],
dotenv = require('dotenv'),
arguments = {
	'to_purchase': '0x' + args['ca'],
	'amount': args['amount'],
	'spam': args['spam'],
	'network': args['network'],
	'pair': args['pair'],
	'dxSaleOwner': '0x' + args['dxo'],
	'uniCA': '0x' + args['uca'],
	'tts': args['tts'],
	'sell': args['sell'],
	'rug_checker': args['rc'],
	'sell_watcher': args['sw'],
	'stop_loss': args['sl'],
	'taking_profit': args['tp'],
	'max_tax_buy': args['mtb'],
	'max_tax_sell': args['mts'],
	'check_tax': args['ct'],
	'spam_buy': args['sb'],
	'sell_at': args['sa'],
	'ca': args['contract']
}; 

!arguments['network'] ? dotenv.config({
	'path': './.env.bsc'
}):dotenv.config({
	'path': './.env.' + arguments['network']
});
const DATAS = {
	'WBNB': process.env['BNB_CONTRACT'],
	'BUSD': process.env['BUSD_CONTRACT'],
	'to_PURCHASE': !args['ca'] ? process.env['TO_PURCHASE'] : arguments['to_purchase'],
	'recipient': process.env['YOUR_ADDRESS'],
	'AMOUNT_OF_BUY': !arguments['amount'] ? process.env['AMOUNT_OF_BUY'] : arguments['amount'],
	'gasPriceBuy': process.env['GWEI_BUY'],
	'gasPriceSell': process['env']['GWEI_SELL'],
	'gasLimit': process.env['GAS_LIMIT'],
	'amount_of_sell': parseInt(process.env['AMOUNT_OF_SELL']),
	'lastNonce': 0,
	'SPAM_BUY': !arguments['spam'] ? process.env['SPAM_BUY'] : arguments['spam'],
	'dxsale_CO': !args['dxo'] ? process.env['DXSALE_COWNER'] : arguments['dxSaleOwner'],
	'unicrypt_CA': !args['uca'] ? process.env['UNICRYPT_CA'] : arguments['uniCA'],
	'network': process.env['NETWORK'],
	'WSS_NODE': process.env['WSS_NODE'],
	'PK': process.env['YOUR_MNEMONIC'],
	'module': process.env['MODULE'],
	'url_network': process.env['NETWORK_RPC'],
	'api_url_network': process.env['NETWORK_RPC_API'],
	'api_key': process['env']['API_KEY'],
	'pair': arguments['pair'] ? arguments['pair'] : 'BNB',
	'time_to_sell': !args['tts'] ? process.env['TIME_TO_SELL'] : arguments['tts'],
	'sell': !args['sell'] ? process['env']['AUTO_SELL'] : arguments['sell'],
	'rug_checker': !args['rc'] ? process.env['RUG_CHECKER'] : arguments['rug_checker'],
	'taking_profit': !args['tp'] ? process.env['TAKING_PROFIT'] : arguments['taking_profit'],
	'stop_loss': !args['sl'] ? process.env['STOP_LOSS'] * -0x1: arguments['stop_loss'] * -0x1,
	'sell_watcher': !args['sw'] ? process.env['SELL_WATCHER'] : arguments['sell_watcher'],
	'initial_price': null,
	'max_tax_buy': !args['mtb'] ? process.env['MAX_TAX_BUY'] : arguments['max_tax_buy'],
	'max_tax_sell': !args['mts'] ? process.env['MAX_TAX_SELL'] : arguments['max_tax_sell'],
	'check_tax': !args['ct'] ? process.env['CHECK_TAX'] : arguments['check_tax'],
	'spam_buy': !args['sb'] ? process['env']['SPAM_BUY'] : arguments['spam_buy'],
	'ca': !args['contract'] ? false : arguments['ca'],
	'sell_at': !args['sa'] ? process.env['SELL_AT'] : arguments['sell_at'],
	'done_sell': ![],
	'skip_on_sell': ![]
};
console.log({
	'your address': DATAS['recipient'],
	'purchase': DATAS['to_PURCHASE'],
	'amount buy': DATAS['AMOUNT_OF_BUY'],
	'gwei buy': DATAS['gasPriceBuy'],
	'gwei sell': DATAS['gasPriceSell'],
	'gas limit': DATAS['gasLimit'],
	'wss node': DATAS['WSS_NODE'],
	'network': DATAS['network'],
	'pair': DATAS['pair'],
	'time to sell': DATAS['time_to_sell'],
	'auto sell': DATAS['sell'],
	'rug checker': DATAS['rug_checker'],
	'taking profit': DATAS['taking_profit'],
	'amount sell': DATAS['amount_of_sell'],
	'stop loss': DATAS['stop_loss'],
	'max tax buy': DATAS['max_tax_buy'],
	'max tax sell': DATAS['max_tax_sell'],
	'check tax': DATAS['check_tax'],
	'spam buy': DATAS['spam_buy'],
	'contract': DATAS['ca'],
	'sell at': DATAS['sell_at'] + 'USD'
}),
module.exports = {
	'DATAS': DATAS
};