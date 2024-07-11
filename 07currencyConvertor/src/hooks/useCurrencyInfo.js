import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})       // set the data
    useEffect(() => {               // fetch the data   
         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)         // get the response    
        .then((res) => res.json())         // convert the response to json
        .then((res) => setData(res[currency]))   // set the data
        console.log(data);              // log the data
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;