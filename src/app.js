import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rate: null,
      currencies: [],
      baseAmount: 0,
      baseAmount_the_second: 0,
      rate_the_second: 0

    },
    computed: {
      currencyConverter: function(){
        return this.baseAmount_the_second * this.rate_the_second
      },
      exRatedMoney: function(){
        return this.baseAmount / this.rate
      }
    },
    mounted(){
      this.getExRated()
    },
    methods: {
      getExRated: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(currency => this.currencies = currency.rates)

      },

    }
  })
})
