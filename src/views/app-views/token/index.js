import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import cookie from 'react-cookies';
import {LoadingOutlined} from "@ant-design/icons";

const TokenCheck = (props) => {
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => history.push('/app/hotel/mapping/hotel'), 1000);
    }, [])

    return (
        <>
            <Spin
                style={{
                    position: 'fixed',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                spinning={loading}
                tip={'로딩중..'}
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: '4rem',
                        }}
                        spin
                    />
                }
            >
            </Spin>
        </>
    )
}

export default TokenCheck
