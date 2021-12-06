import React, {useState, useEffect, useRef} from "react"
import Quote from "./components/Quote";
import Button from "./components/Button";
import GlobalStyle from "./globalStyles/globalStyles";
import {StyledAppWrapper} from "./AppStyles";
import {url} from "./data/url"
import {generateRandom} from "./helpers"
import axios from 'axios'

const App = () => {
    const [quote, setQuote] = useState()
    const [prev, setPrev] = useState([])
    const getQuote = () => {
        console.log(quote, prev)
        axios.get(url)
            .then(function (response) {
                setQuote(response.data[generateRandom(0, 102)])
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const prevQuoteRef = useRef();
    useEffect(() => {
        prevQuoteRef.current = quote;
    });
    const prevQuote = prevQuoteRef.current;
    useEffect(() => {
        getQuote()
    }, [])
    return (
        (quote !== undefined)
            &&
            <>
                <GlobalStyle/>
                <StyledAppWrapper>
                    <div>
                        <Button secondary value="Show previous" onClick={() => setQuote(prevQuote)}/>
                        <Button primary value="Generate" onClick={() => getQuote()}/>
                    </div>
                    <Quote quote={quote}/>
                </StyledAppWrapper>
            </>
    )

}

export default App;
