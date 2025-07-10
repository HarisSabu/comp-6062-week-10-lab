console.log('JS Loaded!');

const app = Vue.createApp({
    data(){
        return{
            firstName: '',
            lastName: '',
            quantity:0,
            pricePerItem :10
        };
    },
    computed: {
        priceCalc(){
            return this.pricePerItem*this.quantity;
        }
    },
    methods: {
        clearFields() {
            this.firstName='';
            this.lastName='';
            this.quantity =0;
            this.pricePerItem = 10;
        }
    }
});
app.mount('#app');