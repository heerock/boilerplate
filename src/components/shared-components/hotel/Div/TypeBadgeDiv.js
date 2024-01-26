import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const TypeBadgeDiv = (props) => {
    const TYPE = {
        SELF_SALE: { text: '단독판매' }
    }
    return (
        <>
            <StyleBadgeDiv
                style={props.style}
                type={props.type}
            >
                <Text>{TYPE[props.type].text}</Text>
            </StyleBadgeDiv>
        </>
    )
}

export const StyleBadgeDiv = styled.div`
  background: ${(props) => {
    switch (props.type) {
        case 'SELF_SALE':
            return '#D42323'
        default:
            return '#3E7DB3'
    }
}};
  color: #FFF;
  font-size: 0.725rem;
  width: auto;
  padding: 0.1rem 0.325rem;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  
  .ant-typography {
    color: #FFF;
  }
`

export default TypeBadgeDiv
