import React, {useState} from "react"
import Quote from "./components/Quote";
import Button from "./components/Button";
import GlobalStyle from "./globalStyles/globalStyles";
import {StyledAppWrapper} from "./AppStyles";


const App = () => {
    const [quote, setQuote] = useState({content: "Test", author: "John Doe"})
    return (
        <>
            <GlobalStyle/>
            <StyledAppWrapper>
                <div>
                    <Button secondary value="Show previous"/>
                    <Button primary value="Generate"/>
                </div>
                <Quote quote={quote}/>
            </StyledAppWrapper>
        </>
    );
}

export default App;
