import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const FamilyLoungeBadgeDiv = (props) => {
    const status = {
        NONE: { color: '#F3F3F3', text: '등급없음' },
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
