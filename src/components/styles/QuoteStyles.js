import styled, {css} from 'styled-components'
import {colors} from "../../globalStyles/variables";
import {RiDoubleQuotesL, RiDoubleQuotesR} from "react-icons/ri"

export const StyledQuote = styled.div`
  width: 40%;
  min-height: 200px;
  border-radius: 5px;
  background-color: #fff;
  border-radius: 5px;
  //box-shadow: rgb(0 0 0 / 20%) 0px 0px 11px;

  transform: scale(1.05);
  border-bottom: none;
  justify-self: center;
  margin: 10px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
`
export const StyledIconL = styled(RiDoubleQuotesL)`
  position: absolute;
  left: 0;
  top: -20px;
  font-size: 40px;
  color: ${colors.primary};
`
export const StyledIconR = styled(RiDoubleQuotesR)`
  position: absolute;
  right: 0;
  bottom: -20px;
  font-size: 40px;
  color: ${colors.primary};
`
export const StyledAuthor = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.text};
  font-family: 'EB Garamond', serif;
`