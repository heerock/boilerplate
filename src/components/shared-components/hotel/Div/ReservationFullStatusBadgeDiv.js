import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const ReservationFullStatusBadgeDiv = (props) => {
    const status = {
        FAILED: { color: '#FFBC3B', text: '예약실패' },
        CONFIRMING: { color: '#74B666', text: '예약확정중' },
        CONFIRMED: { color: '#3E7DB3', text: '예약확정' },
        COMPLETE: { color: '#838383', text: '이용완료' },
        CANCELED: { color: '#D64D49', text: '취소완료' },
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
  width: 4rem;
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

export default ReservationFullStatusBadgeDiv
