export default {
    state: {
        accountPrivateKey: '',
        accountPublicKey: '',
        accountAddress: '',
        node: 'http://47.107.245.217:3000',
        currentXem: 'nem.xem',
        currentXEM1: '577cba5470751c05',
        // currentXEM1: '77a1969932d987d7',
        // currentXEM1: '37EF2403A20729DF',
        currentXEM2: '1B47399ABD2C1E49',
        account: {},
        wallet: {},
        mosaic: [],
        namespace: [],
        UnconfirmedTx: [],
        ConfirmedTx: [],
        errorTx: [],
        generationHash: ''
    },
    getters: {
        Address: function (state) {
            return state.account.address;
        },
        PublicAccount: function (state) {
            return state.account.publicAccount;
        },
        privateKey: function (state) {
            return state.account.privateKey;
        },
        publicKey: function (state) {
            return state.account.publicKey;
        }
    },
    mutations: {
        SET_ACCOUNT: function (state, account) {
            state.account = account;
        },
        SET_WALLET: function (state, wallet) {
            state.wallet = wallet;
        },
        SET_MOSAICS: function (state, mosaic) {
            state.mosaic = mosaic;
        },
        SET_NAMESPACE: function (state, namespace) {
            state.namespace = namespace;
        },
    },
};
//# sourceMappingURL=index.js.map