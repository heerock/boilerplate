import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const PackageBadgeDiv = (props) => {
    return (
        <>
            <StyleBadgeDiv
                style={props.style}
                color={'#6934FF'}
            >
                <Text>호텔+렌트카</Text>
            </StyleBadgeDiv>
        </>
    )
}

export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.color};
  color: #FFF;
  font-size: 0.725rem;
  width: 5rem;
  font-weight: bold;
  padding: 0.1rem 0.325rem;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  
  .ant-typography {
    color: #FFF;
  }
`

export default PackageBadgeDiv
