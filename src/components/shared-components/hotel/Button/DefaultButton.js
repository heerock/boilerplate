import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const DefaultButton = (props) => {
    const [type, setType] = useState('default');
    const [href, setHref] = useState('');

    useEffect(() => {
        setType(type => props.type || type);
    }, [props.type])

    useEffect(() => {
        setHref(href => props.href || href);
    }, [props.href])

    useEffect(() => {
    }, [props])

    return (
        <>
            { type === 'link' ?
                <StyleButton
                    style={props.style}
                    onClick={props.onClick}
                    type={type}
                    href={href}
                    htmlType={props.htmlType ? props.htmlType : 'button'}
                >
                    <Text style={{ color: props.color ? props.color : '#FFF' }}>{props.prefixIcons && props.prefixIcons} {props.text}</Text>
                </StyleButton>
                :
                <StyleButton
                    style={props.style}
                    onClick={props.onClick}
                    htmlType={props.htmlType ? props.htmlType : 'button'}
                >
                    <Text style={{ color: props.color ? props.color : '#FFF' }}>
                        {props.prefixIcons && props.prefixIcons} {props.text}
                    </Text>
                </StyleButton>
            }
        </>
    )
}

export const StyleButton = styled(Button)`
  display: flex;
  font-size: 0.805rem;
  align-items: ${(props) => props?.type === 'link' ? 'baseline' : 'center'};
  justify-content: center;
  height: ${(props) => props?.style?.height ? props.style.height : '1.825rem !important'};
  background: ${(props) => props?.background ? props.background : '#337AB7'};

  .ant-typography {
    color: ${(props) => props?.color ? props.color : '#FFF'};
    height: 1.825rem;
    line-height: 1.825rem;
  }
`

export default DefaultButton
