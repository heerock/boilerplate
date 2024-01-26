import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const AffiliatesBadgeDiv = (props) => {
    const affiliates = {
        HIKARI_TOUR: { color: '#76BEDB', text: 'HIKARI' },
        TRIPBTOZ: { color: '#74B666', text: 'TRIPBTOZ' },
        OHMYHOTEL: { color: '#A8C533', text: 'OHMYHOTEL' },
        EXPEDIA: { color: '#3E7DB3', text: 'EXPEDIA' },
        HOTELBEDS: { color: '#E57DC8', text: 'HOTELBEDS' },
    }

    return (
        <>
            <StyleBadgeDiv
                style={props.style}
                background={affiliates[props.channel]?.color || '#3E7DB3'}
            >
                <Text>{affiliates[props.channel]?.text || props.channel}</Text>
            </StyleBadgeDiv>
        </>
    )
}

export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.background};
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

export default AffiliatesBadgeDiv
