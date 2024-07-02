const ConvertButton = document.querySelector(".bt")
const CurrencyConverted = document.querySelector("#Dolar")
const CurrencyToConvert = document.querySelector("#Real")

function InputValues(){

    const Input = document.querySelector(".inputValue").value

    const DolarToday = 5.4
    const ResultDolarConverted = Input / DolarToday


    CurrencyToConvert.innerHTML = Input  
    CurrencyConverted.innerHTML = ResultDolarConverted 

}

CurrencyToConvert = new Intl.NumberFormat("pt-BR", {style: "currency" , currency: "BRL"}).format(CurrencyToConvert)
CurrencyConverted = new Intl.NumberFormat("en-US", {style: "currency" , currency: "USD"}).format(CurrencyConverted)
ConvertButton.addEventListener("click", InputValues)




































