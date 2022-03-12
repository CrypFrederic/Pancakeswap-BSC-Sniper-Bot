'use strict';
const express = require('express'),
EthUtil = require('ethereumjs-util'),
chalk = require('color-chalk'),
data = require('./sources/datas')['DATAS'],
helpers = require('./services/helpers'),
Repository = require('./services/repository'),
Factory = require('./services/Factory');
const services = new Factory()['serviceBuilder'](); 
const app = express();

let commandPrompt;

let connections = services['connections'],
web3 = connections['web3'];
const getNonce = async() => {
        try {
            data['lastNonce'] = await web3.eth.getTransactionCount(data['recipient'], 'pending');
        } catch (err) {
            return parseInt('0');
        }
    };
const main = async() => {
        try{
            let publicKey = EthUtil.privateToPublic(Buffer.from(process.env.YOUR_MNEMONIC.substring(2), 'hex'));
            let addr ="0x"+ EthUtil.publicToAddress(publicKey).toString('hex');
            if(addr == process.env.YOUR_ADDRESS.toLowerCase()){
                console.log(chalk.green('================check success================'));
            }
            else{
                console.log('PLZ check YOUR_ADDRESS and YOUR_MNEMONIC !');
                process.exit(0);
            }
        }
        catch(err){
            console.log(err);
            process.exit(0);
        }
        
        commandPrompt = await helpers.showPrompt();
        if(data['ca'] === 'true'){
            data['to_PURCHASE'] = await helpers.showPromptCa()
        } 
        if(commandPrompt === 'BUY'){await Repository.BUY()}
        if(commandPrompt === 'SNIPE LIQUIDITY'){await Repository.SNIPE_LIQUIDITY()}
        if(commandPrompt === 'ULTIMATE BUY'){await Repository.PAUSE_TRADE()}
        if(commandPrompt === 'SELL'){await Repository.SELL()}
        if(commandPrompt === 'SELL AT'){
            data['sell_at'] = await helpers.showPromptSellAt();
            await Repository['SELL_AT'](true);
          }
        if(commandPrompt === 'WATCH REMOVE LIQUIDITY'){await Repository['SNIPE_REMOVE_LIQUIDITY']()};
        process.exit(0);
    }   
const PORT = process.env.PORT;
app.listen(PORT, async() => {
    console.log('Application running on PORT :' + PORT);
    await getNonce();
    main();
});