import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

const DefaultSelect = (props) => {
    const [options, setOptions] = useState([]);

    const onChange = (value) => {
        props.setSelectedKey(value);
    }

    useEffect(() => {
        setOptions(props.options)
    }, [props.options])


    return (
        <>
            <StyleSelect
                style={{
                    width: props.width ? `${props.width}%`: 'auto !important',
                    float: 'left',
                    fontSize: '0.805rem',
                    ...props.style
                }}
                disabled={props.disabled || false}
                placeholder={props.placeholder}
                onChange={onChange}
                // defaultValue={null}
                value={props.value}
                options={options}
            />
        </>
    )
}

export const StyleSelect = styled(Select)`
  // width: ${(props) => props?.width && props.width ? props.width : 'auto !important'};
  
  .ant-select-selector {
    height: ${(props) => props?.height ? props.height : '1.825rem !important'};
    
    .ant-select-selection-placeholder {
      line-height: ${(props) => props?.lineHeight ? props.lineHeight : '1.825rem !important'};
    }
  }
  
  .ant-select-selection-search-input {
    height: ${(props) => props?.height ? props.height : '1.825rem !important'};
  }
  
  .ant-select-selection-item {
    line-height: 1.825rem !important;
  }
`

export default DefaultSelect
