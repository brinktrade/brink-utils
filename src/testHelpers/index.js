const balanceTests = require('./balanceTests')
const metaTx = require('./metaTx')

class TestHelpers {
  constructor (ethers) {
    this.ethers = ethers
    this.zeroBalanceTest = balanceTests.zeroBalanceTest.bind(this)
    this.tokenBalanceTest = balanceTests.tokenBalanceTest.bind(this)
    this.ethBalanceTest = balanceTests.ethBalanceTest.bind(this)
    this.chaiSolidity = require('./chaiSolidity').bind(this)
    this.deployTestTokens = require('./deployTestTokens').bind(this)
    this.deployUniswapV2 = require('./deployUniswapV2').bind(this)
    this.latestBlock = require('./latestBlock').bind(this)
    this.signMetaTx = metaTx.signMetaTx.bind(this)
    this.metaTxPromise = metaTx.metaTxPromise.bind(this)
    this.metaTxPromiseWithSignedData = metaTx.metaTxPromiseWithSignedData.bind(this)
    this.execMetaTx = metaTx.execMetaTx.bind(this)
    this.metaTxParamTypes = metaTx.metaTxParamTypes,
    this.nextAvailableBit = require('./nextAvailableBit').bind(this)
    this.randomAddress = require('./randomAddress').bind(this)
    this.testMetaTxEndpoint = require('./testMetaTxEndpoint').bind(this)
  }
}

module.exports = ethers => new TestHelpers(ethers)
