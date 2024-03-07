import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';

const DefaultDivider = (props) => {
    return (
        <>
            <StyleDivider />
        </>
    )
}

export const StyleDivider = styled(Divider)`
  margin: 6px 0px;
  color: #455560;
`

export default DefaultDivider
