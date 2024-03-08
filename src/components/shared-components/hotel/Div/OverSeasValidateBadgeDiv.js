import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const OverSeasValidateBadgeDiv = (props) => {
    const status = {
        OVERSEAS: { color: '#757575', text: '해외' },
        DOMESTIC: { color: '#757575', text: '국내' },
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
  width: 2.225rem;
  height: 1.2rem;
  font-weight: bold;
  padding: 0.1rem 0.325rem;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;

  .ant-typography {
    color: #FFF;
  }
`

export default OverSeasValidateBadgeDiv
