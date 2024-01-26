import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';


const DefaultInput = (props) => {
    return (
        <>
            <StyleInput
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                style={{ textAlign: 'left', display: 'inline-block' }}
            />
        </>
    )
}

export const StyleInput = styled(Input)`

`

export default DefaultInput
