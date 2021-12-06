import {StyledButton} from "./styles/ButtonStyles";

const Button = ({secondary, primary, value}) => {

    return (
        <StyledButton
            secondary={secondary}
            primary={primary}
        >{value}</StyledButton>
    )
}

export default Button