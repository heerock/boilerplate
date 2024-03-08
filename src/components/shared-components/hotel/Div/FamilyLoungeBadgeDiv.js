import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const FamilyLoungeBadgeDiv = (props) => {
    const status = {
        NO_GRADE: { background: '#F3F3F3', text: '등급없음', color: '#000' },
        ROYAL_BLUE: { background: '#2b4ede', text: '로얄 블루', color: '#FFF' },
        BLUE: { background: '#0d6ffc', text: '블루', color: '#FFF' },
        SHY_BLUE: { background: '#5daef9', text: '샤이 블루', color: '#FFF' },
    }
    return (
        <>
            <StyleBadgeDiv
                style={props.style}
                color={status[props.status].background}
            >
                <Text style={{ color: status[props.status].color, fontWeight: '600' }}>{status[props.status].text}</Text>
            </StyleBadgeDiv>
        </>
    )
}

export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.color};
  color: #FFF;
  font-size: 0.725rem;
  // width: auto;
  padding: 0.1rem 0.485rem;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  
  .ant-typography {
    color: #FFF;
  }
`

export default FamilyLoungeBadgeDiv
