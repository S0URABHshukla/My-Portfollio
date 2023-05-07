import React from 'react'
import {ImCross} from 'react-icons/im';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 25px;
    padding: 5px;
    padding-top: 8px;
    // height: 30px;
    text-align: center;
`;

function NavDropDownBtn2() {
  return (
    <StyledDiv>
        <ImCross color='whitesmoke' />
    </StyledDiv>
  )
}

export default NavDropDownBtn2;