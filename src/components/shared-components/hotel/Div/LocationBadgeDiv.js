import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const LocationBadgeDiv = (props) => {
    const status = {
        BEFORE: { color: '#FFBC3B', text: '카드결제전' },
        PAYMENT: { color: '#64C9E8', text: '예약확정전'},
        CONFIRM: { color: '#3E7DB3', text: '예약확정'},
        RENTAL: { color: '#85C553', text: '대여중' },
        RETURN: { color: '#838383', text: '반납' },
        CANCEL: { color: '#D64D49', text: '결제취소' }
    }
    return (
        <>
            <StyleBadgeDiv
                style={props.style}
                color={status[props.status].color}
            >
                <Text>{status[props.status].text}</Text>
            </StyleBadgeDiv>
        </>
    )
}

export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.color};
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

export default LocationBadgeDiv
