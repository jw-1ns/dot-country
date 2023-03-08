import { expect } from 'chai'
import { ethers, waffle } from 'hardhat'
import config from '../config'
import { Context } from 'mocha'

const initConfiguration = {
  wrapperExpiry: ethers.BigNumber.from(new Uint8Array(8).fill(255)).toString(),
  fuses: config.fuses,
  registrarController: config.registrarController,
  nameWrapper: config.nameWrapper,
  baseRegistrar: config.registrar,
  resolver: config.resolver,
  reverseRecord: config.reverseRecord,
  duration: config.duration
}

describe('DC', function () {
  // const TestDomain = 'test'

  before(async function () {
    this.beforeSnapshotId = await waffle.provider.send('evm_snapshot', [])
    console.log('In Before function')
    const DC = await ethers.getContractFactory('DC')
    this.dc = await DC.deploy(initConfiguration)
    await this.dc.deployed()
    console.log(`this.dc.address: ${this.dc.address}`)
  })

  beforeEach(async function () {
    this.snapshotId = await waffle.provider.send('evm_snapshot', [])
  })

  afterEach(async function () {
    await waffle.provider.send('evm_revert', [this.snapshotId])
  })

  after(async function () {
    await waffle.provider.send('evm_revert', [this.beforeSnapshotId])
  })

  it('DC-001 DC can  be deployed', async function (this: Context) {
    expect(this.dc.address).to.equal('0x8A791620dd6260079BF849Dc5567aDC3F2FdC318')
  })

  it('DC-002 domain can be registered', async function (this: Context) {
  })

  it('DC-003 domain can be unwrapped', async function (this: Context) {
  })

  it('DC-004 domain supports NFT Marketplace', async function (this: Context) {
  })

  it('DC-005 domain supports NFT Marketplace', async function (this: Context) {
  })

  it('DC-006 domain checks ownership', async function (this: Context) {
  })

  it('DC-007 domain checks ens validity', async function (this: Context) {
  })
})
