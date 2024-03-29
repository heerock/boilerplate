import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const ReservationHotelStatusBadgeDiv = (props) => {
    const status = {
        CONFIRM_FAILED: { color: '#FFBC3B', text: '예약실패' },
        CONFIRMED: { color: '#3E7DB3', text: '예약확정' },
        FREE_CANCEL: { color: '#D64D49', text: '취소완료' },
        COMPLETE: { color: '#838383', text: '이용완료' },
        PENALTY_CANCEL: { color: '#D64D49', text: '취소(수수료)' },
        CANCELED: { color: '#D64D49', text: '취소완료' },
    }
    return (
        <>
            <StyleBadgeDiv
                style={props.style}
                background={status[props.status]?.color || '#3E7DB3'}
            >
                <Text>{status[props.status]?.text || props.status}</Text>
            </StyleBadgeDiv>
        </>
    )
}

export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.background};
  color: #FFF;
  font-size: 0.775rem;
  width: auto;
  height: 1.125rem;
  line-height: 1rem;
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
