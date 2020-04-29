import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    plugins: [createPersistedState()],

    state: {
        token: localStorage.getItem('access_token') || null,
        user: [],
        networks: [],
        banks: [],
        prices: [],
        url: '',
        cardDetails: [],
        validMsg: '',
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token
        },

        destroyToken(state) {
            state.token = null
        },

        retrieveUser(state, user) {
            state.user = user
        },

        clearUser(state) {
            state.user = []
        },

        clearDetails(state) {
            state.cardDetails = []
        },

        retrieveBanks(state, banks) {
            state.banks = banks
        },

        retrieveNetworks(state, networks) {
            state.networks = networks
        },

        getSpectranetprices(state, prices) {
            state.prices = prices
        },
        
        retrieveUrl(state, url) {
            state.url = url
        },

        cardVerification(state, cardDetails) {
            state.cardDetails = cardDetails
        },

        cardVerification(state, cardDetails) {
            state.cardDetails = cardDetails
        },

        validationMsg(state, validMsg) {
            state.validMsg = validMsg
        },

    },
    actions: {

        //post
        registerUser(context, data) {

            return new Promise((resolve, reject) => {
                axios.post('api/v1/users', {
                    fullname: data.fullname,
                    email: data.email,
                    username: data.username,
                    number: data.number,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',},
                })
                .then(({status}) => {
                    if (status === 200) {
                        resolve(true)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        retrieveToken(context, credentials) {

            return new Promise((resolve, reject) => {
                axios.post('api/v1/login', {
                    identity: credentials.identity,
                    password: credentials.password,
                    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', },
                })
                .then(response => {
                    const token = response.data.payload.access_token
  
                    localStorage.setItem('access_token', token)
                    context.commit('retrieveToken', token)

                    context.commit('retrieveUser', response.data.payload.user)

                    resolve(response)
                    //console.log(response);
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        },

        destroyToken(context) {
            if (context.getters.loggedIn) {
                    localStorage.removeItem('access_token')
                    context.commit('destroyToken')
            }
        },

        clearUser(context) {
            context.commit('clearUser')
        },

        clearDetails(context) {
            context.commit('clearDetails')
        },

        fundUser(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/fund-account', {
                    amount: data.amount,
                    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',},
                })
                .then((response) => {
                    if (data.success = true) {
                        resolve(true)
                    }
                    context.commit('retrieveUrl', response.data.payload.payment_url)
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },
        
        addPin(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/pins', {
                    pin: data.pin
                })
                .then(response => {
                    if (status === 200) {
                        resolve(true)
                    }
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        },

        createAccount(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/accounts?personal=yes', {
                    bank_id: data.bank_id,
                    account_name: data.account_name,
                    account_number: data.account_number,
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        addAccount(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/accounts?personal=no', {
                    bank_id: data.bank_id,
                    account_name: data.account_name,
                    account_number: data.account_number,
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        sendTransfer(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/transfers', {
                    receiver: data.receiver,
                    amount: data.amount,
                    pin: data.pin,
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        airtelAirtime(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/services/pay-airtel-vtu', {
                    phone_number: data.phone_number,
                    amount: data.amount,
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        etisalatAirtime(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/services/pay-etisalat-vtu', {
                    phone_number: data.phone_number,
                    amount: data.amount,
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        gloAirtime(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/services/pay-glo-vtu', {
                    phone_number: data.phone_number,
                    amount: data.amount,
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        mtnAirtime(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/services/pay-mtn-vtu', {
                    phone_number: data.phone_number,
                    billing_method: data.billing_method,
                    amount: data.amount
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        validateSmartCard(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/services/validate-smartcard', {
                    smartcard_number: data.smartcard_number,
                    service: data.service,
                })
                .then(response => {
                    context.commit('cardVerification', response.data.payload.details)
                    context.commit('validationMsg', response.data.message)
                    resolve(response)
                    //console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        dstvService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/services/pay-dstv', {
                    customer_name: data.customer_name,
                    smartcard_number: data.smartcard_number,
                    amount: data.amount,
                    invoice_period: data.invoice_period,
                    plan: data.plan
                })
                .then(response => {
                    resolve(response)
                    //console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },
        
        gotvService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/services/pay-gotv', {
                    customer_name: data.customer_name,
                    smartcard_number: data.smartcard_number,
                    amount: data.amount,
                    invoice_period: data.invoice_period,
                    plan: data.plan
                })
                .then(response => {
                    resolve(response)
                    //console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        startimesService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/services/pay-startimes', {
                    smartcard_number: data.smartcard_number,
                    amount: data.amount
                })
                .then(response => {
                    resolve(response)
                    //console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        spectranetService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.post('api/v1/services/pay-spectranet', {
                    service_id: data.service_id,
                    price: data.price,
                    number_of_pins: data.number_of_pins
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        abujaprepaidService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token + context.service_id

                axios.post('api/v1/services/pay-abuja-prepaid', {
                    // service_id: data.service_id,
                    meter_number: data.meter_number,
                    amount: data.amount
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        ibadanprepaidService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token + context.service_id

                axios.post('api/v1/services/pay-ibadan-prepaid', {
                    // service_id: data.service_id,
                    customer_reference: data.customer_reference,
                    amount: data.amount
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        ikejaelectricService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token + context.service_id

                axios.post('api/v1/services/ikeja-electric-bill', {
                    // service_id: data.service_id,
                    customer_number: data.customer_number,
                    amount: data.amount,
                    phone: data.phone,
                    contact_type: data.contact_type
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        kedcopostpaidService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token +context.service_id

                axios.post('api/v1/services/pay-kedco-postpaid', {
                    // service_id: data.service_id,
                    customer_reference: data.customer_reference,
                    amount: data.amount
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        kedcoprepaidService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token + context.service_id

                axios.post('api/v1/services/pay-kedco-prepaid', {
                    // service_id: data.service_id,
                    customer_reference: data.customer_reference,
                    amount: data.amount
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        waecService(context, data) {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token + context.service_id

                axios.post('api/v1/services/pay-waec', {
                    // service_id: data.service_id,
                    number_of_pins: data.number_of_pins,
                    price: data.price
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },


        //get
        retrieveBanks(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      
            axios.get('api/v1/banks')
            .then(response => {
                context.commit('retrieveBanks', response.data.payload)
                //console.log(response)
            })
            .catch(error => {
            console.log(error)
            })
        },

        retrieveNetworks(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      
            axios.get('api/v1/networks')
            .then(response => {
                context.commit('retrieveNetworks', response.data.payload)
                //console.log(response)
            })
            .catch(error => {
            console.log(error)
            })
        },

        getSpectranetprices(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      
            axios.get('api/v1/services/spectranet-prices')
            .then(response => {
                context.commit('getSpectranetprices', response.data.payload)
                //console.log(response)
            })
            .catch(error => {
            console.log(error)
            })
        },

    }
})
