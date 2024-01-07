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
                    ...props.style
                }}
                placeholder={props.placeholder}
                onChange={onChange}
                defaultValue={null}
                options={options}
            />
        </>
    )
}

export const StyleSelect = styled(Select)`
  // width: ${(props) => props?.width && props.width ? props.width : 'auto !important'};
  
  .ant-select-selector {
    height: ${(props) => props?.height ? props.height : '2rem !important'};
    
    .ant-select-selection-placeholder {
      line-height: ${(props) => props?.lineHeight ? props.lineHeight : '2rem !important'};
    }
  }
  
  .ant-select-selection-search-input {
    height: ${(props) => props?.height ? props.height : '2rem !important'};
  }
`

export default DefaultSelect
