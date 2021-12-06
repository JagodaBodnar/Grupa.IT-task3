import styled, {css} from 'styled-components'
import {colors} from "../../globalStyles/variables";

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  margin: 15px;
  min-width: 150px;
  transition: 0.7s;
  background-color: transparent;
  ${({primary}) => {
    return (
            primary &&
            css`
              color: ${colors.primary};
              border: 2px solid ${colors.primary};

              &:hover {
                box-shadow: inset 10rem 0 0 0 ${colors.primary};
                color: ${colors.white}
              }
            `
    )
  }}
  ${({secondary}) => {
    return (
            secondary &&
            css`
              color: ${colors.secondary};
              border: 2px solid ${colors.secondary};

              &:hover {
                box-shadow: inset 10rem 0 0 0 ${colors.secondary};
                color: ${colors.white}
              }
            `
    )
  }}
`