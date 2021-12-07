import styled from 'styled-components'
import {colors} from "../../globalStyles/variables";
import {RiDoubleQuotesL, RiDoubleQuotesR} from "react-icons/ri"
import {device} from "../../globalStyles/device"

export const StyledQuoteContainer = styled.div`
  width: 90%;
  min-height: 400px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 11px;
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
  @media ${device.tablet} {
    width: 60%;
    min-height: 200px;
  }
  @media ${device.desktop} {
    width: 40%;
  }
  
`
export const StyledAuthor = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.textLight};
  font-family: 'EB Garamond', serif;
`
export const StyledQuote = styled.p`
  font-size: 20px;
  color: ${colors.text};
  margin-bottom: 20px;
  font-family: 'EB Garamond', serif;
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
