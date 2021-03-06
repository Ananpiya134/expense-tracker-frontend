const formatThaiCurrency = (number) => 
    new Intl.NumberFormat('en-US', { 
        style:'currency', 
        currency:'THB',
        currencyDisplay:'narrowSymbol'
    }).format(number)

export {formatThaiCurrency}