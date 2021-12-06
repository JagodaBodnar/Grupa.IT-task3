import {StyledButton} from "./styles/ButtonStyles";

const Button = ({secondary, primary, value, onClick}) => {

    return (
        <StyledButton
            secondary={secondary}
            primary={primary}
            onClick={onClick}
        >{value}</StyledButton>
    )
}

export default Button