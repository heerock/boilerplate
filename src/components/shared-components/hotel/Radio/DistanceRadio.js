import React, { useState, useEffect } from 'react';
import { Typography, Radio } from 'antd';
import styled from 'styled-components';

const DistanceRadio = (props) => {
    return (
        <>
            <StyleRadioButton
                options={props.options}
                onChange={props.onChange}
                value={props.value}
                optionType={`button`}
                buttonStyle={`solid`}
            />
        </>
    )
}

export const StyleRadioButton = styled(Radio.Group)`
  margin-left: 10px;
  .ant-radio-button-wrapper {
    font-size: 0.805rem;
    height: 1.775rem !important;
    padding: 0px 0.55rem !important;
    line-height: 1.775rem !important;
  }
`

export default DistanceRadio
