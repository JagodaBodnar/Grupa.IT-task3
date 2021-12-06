const Quote = ({quote}) => {
    return (
        <>
            <div>{quote.content}</div>
            <div>{quote.author}</div>
        </>
    )
}
export default Quote;