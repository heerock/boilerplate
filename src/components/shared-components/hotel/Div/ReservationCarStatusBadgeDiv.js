import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const ReservationCarStatusBadgeDiv = (props) => {
    const status = {
        BEFORE_PAYMENT: { color: '#76BEDB', text: '카드결제전' },
        BEFORE_CONFIRMED: { color: '#76BEDB', text: '예약확정전' },
        CONFIRMED: { color: '#74B666', text: '예약확정' },
        USING: { color: '#A8C533', text: '대여중' },
        CANCELED: { color: '#3E7DB3', text: '반납' },
        RETURN: { color: '#E57DC8', text: '결제취소' },
    }

    return (
        <>
            <StyleBadgeDiv
                style={props.style}
                background={status[props.status]?.color || '#3E7DB3'}
            >
                <Text>{status[props.status]?.text}</Text>
            </StyleBadgeDiv>
        </>
    )
}

export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.background};
  color: #FFF;
  font-size: 0.775rem;
  width: auto;
  font-weight: bold;
  padding: 0.1rem 0.325rem;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  
  .ant-typography {
    color: #FFF;
  }
`

export default ReservationCarStatusBadgeDiv
