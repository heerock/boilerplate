import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const DefaultSearch = (props) => {

    return (
        <>
            <StyleSearch
                placeholder={props.placeholder}
                onSearch={props.onSearch}
            />
        </>
    )
}

export const StyleSearch = styled(Search)`
  
  .ant-input {
    height: 2rem !important;
    border: 1px solid #D4D4D4;
  }
  
  button {
    height: 2rem !important;
    border: 1px solid #D4D4D4;
    border-radius: 0 0.425rem 0.425rem 0 !important;
  }
`

export default DefaultSearch
