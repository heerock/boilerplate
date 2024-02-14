import React from 'react';
import { InputNumber } from 'antd';
import styled from 'styled-components';


const DefaultInputNumber = (props) => {
    return (
        <>
            <StyleInputNumber
                min={props.min}
                max={props.max}
                step={props.step}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                style={{ ...props.style, textAlign: 'left', display: 'inline-block' }}
            />
        </>
    )
}

export const StyleInputNumber = styled(InputNumber)`
   height: 1.825rem !important;
   line-height: 1.825rem !important;
  
  .ant-input-number-input-wrap {
    input {
      height: 1.825rem !important;
      line-height: 1.825rem !important;
    }
  }
`

export default DefaultInputNumber
