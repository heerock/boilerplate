import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const FamilyLoungeBadgeDiv = (props) => {
    const status = {
        NO_GRADE: { color: '#F3F3F3', text: '등급없음' },
        ROYAL_BLUE: { color: '#F3F3F3', text: '로얄 블루' },
        BLUE: { color: '#F3F3F3', text: '블루' },
        SHY_BLUE: { color: '#F3F3F3', text: '샤이 블루' },
    }
    return (
        <>
            <StyleBadgeDiv
                style={props.style}
                color={status[props.status].color}
            >
                <Text style={{ color: props.style.color, fontWeight: '600' }}>{status[props.status].text}</Text>
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

export default FamilyLoungeBadgeDiv
