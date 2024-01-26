import React from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';

const DefaultDatePicker = (props) => {
    return (
        <>
            <StyleDatePicker />
        </>
    )
}

export const StyleDatePicker = styled(DatePicker)`
  height: 1.925rem;
  font-size: 0.805rem;
  
  input {
    font-size: 0.805rem;
  }
  
`

export default DefaultDatePicker
