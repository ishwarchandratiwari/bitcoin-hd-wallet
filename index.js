var bitcoin = require('bitcoinjs-lib');
var bip39 = require('bip39');

const mnemonic = bip39.generateMnemonic(); //generates string

if (bip39.validateMnemonic(mnemonic)) {
    var seed = bip39.mnemonicToSeed(mnemonic);
    var root = bitcoin.HDNode.fromSeedBuffer(seed);
    var dp = root.derivePath("m/44'/0'/0'/0/1");

    console.log('\nThe privateKey is \n' + dp.keyPair.toWIF());
    console.log('\nThe publicKey is \n' + dp.getPublicKeyBuffer().toString('hex'));
    console.log('\nThe Address is \n' + dp.getAddress());
}