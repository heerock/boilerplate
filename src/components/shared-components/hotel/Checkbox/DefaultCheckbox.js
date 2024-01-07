import React, { useState, useEffect } from 'react';
import { Checkbox, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const DefaultCheckbox = (props) => {
    return (
        <>
            <StyleCheckbox
                placeholder={props.placeholder}
                onChange={props.onChange}
                style={{ textAlign: 'left', display: 'inline-block' }}
            >
                <Text>{props.text}</Text>
            </StyleCheckbox>
        </>
    )
}

export const StyleCheckbox = styled(Checkbox)`
  .ant-checkbox {
    top: 0.42rem !important;
    float: ${props => props.float || 'right'} !important;
    .ant-checkbox-inner {
      border: 1px solid #d4d4d4;
    }
  }

  .ant-checkbox-wrapper {
    float: ${props => props.float || 'right'} !important;
  }
`

export default DefaultCheckbox
