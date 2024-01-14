import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const DefaultButton = (props) => {
    const [type, setType] = useState('default');
    const [href, setHref] = useState('');

    useEffect(() => {
        setType(props.type || type);
    }, [props.type])

    useEffect(() => {
        setHref(props.href || href);
    }, [props.href])

    return (
        <>
            { type === 'link' ?
                <StyleButton
                    style={props.style}
                    onClick={props.onClick}
                    type={type}
                    href={href}
                >
                    <Text>{props.text}</Text>
                </StyleButton>
                :
                <StyleButton
                    style={props.style}
                    onClick={props.onClick}
                >
                    <Text>{props.text}</Text>
                </StyleButton>
            }
        </>
    )
}

export const StyleButton = styled(Button)`
  display: flex;
  align-items: ${(props) => props?.type === 'link' ? 'baseline' : 'center'};
  justify-content: center;
  height: 2rem !important;
  background: ${(props) => props?.background ? props.background : '#337AB7'};

  .ant-typography {
    color: ${(props) => props?.color ? props.color : '#FFF'};
    height: 2rem;
    line-height: 2rem;
  }
`

export default DefaultButton
