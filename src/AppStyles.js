import styled from "styled-components"
import {device} from "./globalStyles/device"

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`

export const StyledButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  align-items: center;
  @media ${device.mobile} {
    grid-template-columns: repeat(2,1fr);
    margin: 100px 0;
  }
`