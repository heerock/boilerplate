import React, { useState } from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';

const { RangePicker } = DatePicker;

const DefaultDatePicker = (props) => {
    return <StyleRangeDatePicker />
}

export const StyleRangeDatePicker = styled(RangePicker)`
  height: 2rem;
  font-size: 0.805rem;
  
  input {
    font-size: 0.805rem;
  }
  
`

export default DefaultDatePicker
