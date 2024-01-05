import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const DefaultButton = (props) => {

    return (
        <>
            <StyleButton
                style={props.style}
                onClick={props.onClick}
            >
                <Text>{props.text}</Text>
            </StyleButton>
        </>
    )
}

export const StyleButton = styled(Button)`
  height: 2rem !important;
  background: ${(props) => props?.background ? props.background : '#337AB7'};
  .ant-typography {
    color: ${(props) => props?.color ? props.color : '#FFF'};
  }
`

export default DefaultButton
