fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=01fc037797a74334bbbc9fd6da043c06')
.then(result => {
    let myData = result.json();
    // console.log(myData)
    return myData;
})
.then((currency) => {
    // console.log(currency.rates["EGP"])
    let usd = document.querySelector('.usdAmount');
    let egp = document.querySelector('.egyAmount span')
    let sar = document.querySelector('.sarAmount span')

    egp.innerHTML = Math.round(usd.innerHTML * currency.rates["EGP"]);
    sar.innerHTML = Math.round(usd.innerHTML * currency.rates["SAR"]);

    console.log(usd.innerHTML)
    console.log(egp.innerHTML)
    // console.log(sar.innerHTML)
})