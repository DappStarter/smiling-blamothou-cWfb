require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note meadow method hope knife borrow teach'; 
let testAccounts = [
"0xdf8484802c99677c171cbc12d5a8213da6bea1e87c4c624a791dd53bccf96087",
"0x9222253ec15d6f2637d22584dc9b2dccd9a221b0139acf5c29cbf8f0f537246f",
"0x26b93f0a97b651848a6002ffca413e5180d8249a775530f8ef8a679af48100eb",
"0x2118b7cb873831513d74db3084e4a2d3860906e23d2db88c9fd3b7e65922fad0",
"0x5e6a28a005d312f94db2405063913afbc4acf5d53ac006f2c49389043f5b68ef",
"0x06df319e4d11a40a874d0acd5bb7e70d6c0bb3b3a304613403eb5f93d598707f",
"0x623b389bf7524cd0fc07bdea7d0cf0e690bb732845d0edbabda60ba25ef57d84",
"0x32a4e8ac8b25c2a428c3cf6c0b50dd6a5839ecd78e6d33b2abbb1dd4e2414d3d",
"0x78213db65cc72858fa535a2fbaa2a9eaaf71c13a4e2dedbb33c1c3a62d31e565",
"0xc7027b1fb631b31d756288a75ad66495e8d5a2d2ce4ced2943fb6f0dd692c083"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


