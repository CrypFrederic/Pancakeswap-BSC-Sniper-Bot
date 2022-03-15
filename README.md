# 🚀 Pancakeswap BSC Sniper Bot 🚀


## [ENGLISH](https://github.com/CrypFrederic/Pancakeswap-BSC-Sniper-Bot/blob/main/README.md)  |  [简体中文](https://github.com/CrypFrederic/Pancakeswap-BSC-Sniper-Bot/blob/main/README_ZH.md) 
---------


## PLS rename example.env.bsc to .env.bsc
![donghua](https://github.com/CrypFrederic/image1/blob/main/md/donghua.gif)







## Contents

- Warning
- Feature
- Installation Steps
- Starting Run
- Configuration File(.env.bsc)



## Warning

**WE ONLY PROVIDING BOT & FULLNODE SERVICES**
**SNIPING IS HIGH RISK, YOU WILL NEED TO HAVE SKILL FOR READING SMART CONTRACT AND ANY OTHER RELATED WITH SNIPING AND SMART CONTRACT.**

**WE DO NOT BEAR ANY FORM OF LOSS. PLAY SMART, SNIPE SMART.**

**TO USE THIS BOT YOU WILL NEED AT LEAST 0.2- 0.3 BNB IN YOUR WALLET.**



## Feature

![1](https://github.com/CrypFrederic/image1/blob/main/md/1.png)

- **BUY** : This option is for the token that already launch, having liquidity, and tradeable. So its basically just normal swap like you do in pancakeswap
- **SNIPE LIQUIDITY** : This is the mempool sniping, so this option can only be use for fairlaunch token.
- **ULTIMATE BUY** : This is the powerfull feature because you can snipe any Listing token from any platform like DXSALE, UNICRYPT, PINKSALE and manymore. If you are going to snipe the token that not Open the trading yet which is the token already have a liquidity but arent tradable, you can use this feature for that, I really love this feature haha
- **SELL** : It will follow your env setup, if you are using SELL_WATCHER or TIME_TO_SELL. If you want immediately sell with this option, just turn off the SELL_WATCHER or TIME_TO_SELL feature
-  **EXIT** : Hmm idk , you can try this by yourself lol



Sure, there are other features

- Buy token multiple times in a row
- Check the token tax to prevent high tax, at the same time you can set the maximum tax for purchase, when the tax is lower than the set value, buy toekn
- Rug_check
- Set sell conditions, how much profit or how much loss
- Set how long to buy and then sell



## Installation Steps

### Download the Eexecutable files

Some friends do not have programming foundation. For everyone's convenience, we use Node.js&PKG to package the program as an executable file, support windows/macos/linux operating systems, and double-click to run directly.

The apps you need to have and install

- windows：[Download Here](https://github.com/CrypFrederic/Pancakeswap-BSC-Sniper-Bot/releases/download/v1.0.0/pcs_bot_win_x64.zip) 
- macos：[Download Here](https://github.com/CrypFrederic/Pancakeswap-BSC-Sniper-Bot/releases/download/v1.0.0/pcs_bot_macos.zip) 
- linux：[Download Here](https://github.com/CrypFrederic/Pancakeswap-BSC-Sniper-Bot/releases/download/v1.0.0/pcs_bot_linux.zip) 

After downloading, first modify the configuration file (.env.bsc), fill in Adress and Private_Key, and you can run the program.

### Install it yourself

Installation guide will be provided here, please read and follow all steps carefully.

The apps you need to have and install

- Node.js : [Download Here](https://nodejs.org/en/)(version 14)

- Code Editor (VsCode) : [Download Here](https://code.visualstudio.com/)

  

This bot is written with Javascript/NodeJs language so you need to have NodeJs installed in your computer

 And for opening and configuring the bot file you need Code Editor which is i recommend VisualStudioCode because its free and have a Friendly User Interface

#### Node.js 

![node1](https://github.com/CrypFrederic/image1/blob/main/md/node1.png)

CHECK ALL THE OPTION FOR EACH INSTALLATION

![node2](https://github.com/CrypFrederic/image1/blob/main/md/node2.png)

For the nodejs you will see this PowerShell terminal popup

![node3](https://github.com/CrypFrederic/image1/blob/main/md/node3.png)

Please wait and dont close the terminal until it says  "Type ENTER to exit"

when that message show up 

Press ENTER with your keyboard

and it will close by itself

#### Code Editor (VsCode)

![vs2](https://github.com/CrypFrederic/image1/blob/main/md/vs2.png)



After you download and install all the files  now its time to download SonicBot V2 Files.

After the download process is done you need to extract the bot folder, i recommend to extract the foler to you desktop or you can choose any location for the bot file in your PC

Open the Visual Studio Code

![vs1](https://github.com/CrypFrederic/image1/blob/main/md/vs1.png)

Now you need to install the modules file that the bot need

To install the modules just open the terminal in VsCode , follow this image :

![vs3](https://github.com/CrypFrederic/image1/blob/main/md/vs3.png)

Once the terminal opened , type “ npm install “ and then ENTER with your keyboard

![vs4](https://github.com/CrypFrederic/image1/blob/main/md/vs4.png)

When u see this result , then the npm install process is done :)

![vs5](https://github.com/CrypFrederic/image1/blob/main/md/vs5.png)

Now all the installation is done 


## Starting Run

`npm run snipe`


## Configuration File(.env.bsc)

```
#its a router to process the transaction, dont change!

BNB_CONTRACT=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
BUSD_CONTRACT=0xe9e7cea3dedca5984780bafc599bd69add087d56
NETWORK_RPC=https://bscscan.com/
NETWORK_RPC_API=https://api.bscscan.com/
WSS_NODE=wss://bsc-ws-node.nariox.org:443

#its a router to process the transaction, dont change!
```

In this part, you only able to  change the WSS_NODE
What is that ? its an url link to connect with the blockchain ( You can read binance docs [HERE](https://docs.binance.org/smart-chain/developer/rpc.html) to see what is rpc ) The one in the env file is free public node from binance community, but you really need your own private node or even Fullnode to make a stable and fast connection for sniping.
Since its a free public node it have a limit , i dont know exactly how much the limit but i can guarantee its pretty bad for sniping with bot using that public node. So use your own private node or build your Fullnode
Fullnode is better than quicknode , why ? Fullnode doesnt have limit. So you can use it whenever you want without worries.

Hi all, for now `wss://bsc-ws-node.nariox.org:443` it won't be able to use again forever. for that you can use private node or build your own node. it more faster than public node. there is my recommend for private node :

1. https://getblock.io/en/
2. https://www.quicknode.com/
3. https://www.ankr.com/ 



```
#Network and dex configuration

NETWORK=bsc
MODULE=pancakeswap

#Network and dex configuration
```

For now you can only use this bot for BSC & PANCAKESWAP. So if the token are launching in APESWAP and adding liquidity from there , this bot will not buying. But dont worry we are working for other Network & Dex too :)



```
#you can change the port if you want use the bot in multiple terminals

PORT=5000

#you can change the port if you want use the bot in multiple terminals
```

For Port you can change it if you want to run 2 bot at the same time, but remember you need to use different wallet too if you are running 2 or more bot at the same PC

To run the 2 bot at the same time just copy your bot folder to another directory

After you have a different folder of the bot, just change the PORT into 5002, 5005 , etc..



```
#your address configuration

YOUR_ADDRESS=
YOUR_MNEMONIC=

#your address configuration
```

In this part fill YOUR_ADDRESS with your wallet address that are going to use this bot

and in YOUR_MNEMONIC fill this with your Private key not a seed phrase



```
#Snipe Configuration

TO_PURCHASE=0xe9e7cea3dedca5984780bafc599bd69add087d56

AMOUNT_OF_BUY=0.001

GWEI_SELL=5

GWEI_BUY=10

GAS_LIMIT=1500000

SPAM_BUY=null

MAX_TAX_SELL=9

MAX_TAX_BUY=1

CHECK_TAX=false

RUG_CHECKER=false

#Snipe Configuration
```

**TO_PURCHASE* = target token that you wanna buy

**AMOUNT_OF_BUY** = this is the amount of your buy with bnb

**GWEI_SELL** = how much gwei you are going to use when you want to sell the token

**GWEI_BUY** = how much gwei you are going to use when you want to buy the token

**GAS_LIMIT** = how much gaslimit you are going to use when you want to buy the token

**SPAM_BUY** = how much you wanna send the transaction at the same time, you can send 10 transaction at the same time & same block ( if you dont wanna use this fill it with null / 0 )

**MAX_TAX_SELL** = how much tax tolerance in target token

**MAX_TAX_BUY** = how much tax tolerance in target token

**CHECK_TAX** = if you dont wanna use this tax tolerance feature fill this with false, if you want to use this tax tolerance feature fill it with true

**RUG_CHECKER** = its still on developing, sometime if you use this feature it wont buy the token so i preffer to dont use this feature for now



For tax tolerance maybe you are lil bit confuse , so here is the thing
Its simply to avoid you getting taxxed when you are sniping the token , how ?

Example : You are going to snipe a token, but they will tax you 99% if you are buying at very first or we can say 0-1 block different from addliquidity / open trade. And then you are going to snipe the token with your tax tolerance setup for both buy & sell is 40. When the liquidity is added/trading is enabled , bot will showing how much tax in the contract. Since your max tax for both buy & sell is 40% bot will keep scanning untill the tax of the target token is normal or below your max tax tolerance



```
#Sell Configuration

AUTO_SELL=true
TAKING_PROFIT=0.1
STOP_LOSS=0.01
AMOUNT_OF_SELL=40

#==SELL OPTION 1==
SELL_WATCHER=false
#==SELL OPTION 1==

#==SELL OPTION 2==
TIME_TO_SELL=2
#==SELL OPTION 2==

#==SELL OPTION 3==
SELL_AT= 18
#==SELL OPTION 3==

#Sell Configuration
```

In this sell config part we have 2 different kind of sell

**SELL_WATCHER** is a feature where you can monitoring how much profit or how much rekt you get.
If you want to take profit when your initial buy is goes up to 200% then just fill the **TAKING_PROFIT=200**
If you want to get out when your initial buy is down by 30% then just put **STOP_LOSS=30**. If you dont wanna use this feature just change SELL_WATCHER=false
Dont use TAKE_PROFIT=0 or STOP_LOSS=0 , it will give some error

**SELL_WATCHER**=true/false ( dont use uppercase )

**SELL_AT**=This feature allows you to make a limit sell order. So for example you are buying CAKE token when the price is 18$ and you want to sell when the price is touching 18.4$
you just need to put 18.4 in the SELL_AT. This option is available on the MENU when you are going to run the bot
 \-----------------------------------------------

**AMOUNT_OF_SELL** is how much token you wanna sell, maximum is 98 which means you will sell 98% of token you have
\-----------------------------------------------

And when you just wanna buy and sell immediately by second , you can use AUTO_SELL=true and fill TIME_TO_SELL=3 , it will immediately sell 3 second later after your buy is executed 

Dont use **TIME_TO_SELL**=0 , minimum is 1

**AUTO_SELL**=true/false ( dont use uppercase)
