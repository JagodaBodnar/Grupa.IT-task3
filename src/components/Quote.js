import {StyledQuoteContainer, StyledQuote, StyledIconL, StyledIconR, StyledAuthor} from './styles/QuoteStyles'

const Quote = ({quote}) => {
    return (
        <>
            <StyledQuoteContainer>
                <StyledIconL/>
                <StyledQuote>{quote.quote}</StyledQuote>
                <StyledAuthor>-{quote.author}-</StyledAuthor>
                <StyledIconR/>
            </StyledQuoteContainer>
        </>
    )
}
export default Quote;