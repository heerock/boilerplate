import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const ReservationHotelStatusBadgeDiv = (props) => {
    const status = {
        CONFIRM_FAILED: { color: '#76BEDB', text: '예약실패' },
        CONFIRMED: { color: '#76BEDB', text: '예약완료' },
        FREE_CANCEL: { color: '#74B666', text: '취소완료' },
        PENALTY_CANCEL: { color: '#A8C533', text: '취소(수수료)' },
        CANCELED: { color: '#74B666', text: '취소완료' },
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

export default ReservationHotelStatusBadgeDiv
