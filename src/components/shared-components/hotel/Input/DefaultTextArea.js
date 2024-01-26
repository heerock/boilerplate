import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;


const DefaultTextArea = (props) => {
    return (
        <>
            <StyleTextArea
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                style={{ textAlign: 'left', display: 'inline-block' }}
            />
        </>
    )
}

export const StyleTextArea = styled(TextArea)`

`

export default DefaultTextArea
