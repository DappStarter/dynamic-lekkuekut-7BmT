require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note ranch pulp hidden private food type'; 
let testAccounts = [
"0x01003aa6feb3e7ed496bccd9cbc3ff8e8c73f20346d3ba15ad4df6b89103aa7b",
"0xee9e9b7713588d1c10f3446d6cd96e7ce68099f8fdc4d15170cd9aac7e0c3b10",
"0x4f8a8c967855674eeeb218fd4d18f8df2676cc115fc224052e3fb3bae472345a",
"0xbcca914667447da3a8724538309dc70b4b53a6338d14a971f48b9488e1eeecbb",
"0xdb3ae44e05d7017a927305a4e038f07cb122c294d1b24ac53ed3b4060b4c6fd0",
"0x2c7ec422a92e6f8fa6f71e478ab15777a3eba477db331aa4954beede435fb934",
"0x07d69ee073d111df7eabd8cc8df0f538c9d6c5894349abaf83c783e0b61500b7",
"0xec5359535ebccda16904f81554466ba88490c914c3071c5db6663301d8ea42b9",
"0x45e59f986b66c0bf4385b90625e7816dc3b7fd4b43dfcf837964ff383bbcb2e6",
"0x18e4a358583d70bc4dc9b9449da20bcb642098213efc3397a3f06e33df27fd41"
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


