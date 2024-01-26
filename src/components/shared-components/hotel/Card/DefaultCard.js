import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const DefaultCard = (props) => {

    return (
        <>
            <StyleCard
                title={props.title || ''}
                extra={props.extra || null}
            >
                {props?.content && props.content}
            </StyleCard>
        </>
    )
}

export const StyleCard = styled(Card)`
  display: block;
  .ant-card-head {
    background: #fafafa;
    .ant-card-head-title {
      padding: 10px 0 !important;
      font-size: 0.825rem;
    }
    .ant-card-extra {
        padding: 0;
    }
  }
`

export default DefaultCard
