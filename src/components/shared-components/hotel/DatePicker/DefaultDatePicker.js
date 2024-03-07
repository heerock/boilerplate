import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import styled from 'styled-components';

const DefaultDatePicker = (props) => {

    const onChange = (e) => {
        props.setDate(e.format('YYYY-MM-DD'));
    }

    return (
        <>
            <StyleDatePicker
                onChange={onChange}
                defaultValue={props.date && moment(props.date, 'YYYY-MM-DD')}
            />
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
