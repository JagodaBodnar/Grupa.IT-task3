import {StyledQuote, StyledIconL, StyledIconR,StyledAuthor} from './styles/QuoteStyles'

const Quote = ({quote}) => {
    return (
        <>
            <StyledQuote><StyledIconL/><p>{quote.quote}</p><StyledAuthor>-{quote.author}</StyledAuthor><StyledIconR/></StyledQuote>

        </>
    )
}
export default Quote;