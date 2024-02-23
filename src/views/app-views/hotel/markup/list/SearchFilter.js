import React, { useState, useEffect } from 'react';
import { Col, Row, Collapse, Typography, DatePicker, Space, Divider } from 'antd';
import styled from 'styled-components';
import DefaultCheckbox from 'components/shared-components/hotel/Checkbox/DefaultCheckbox';
import DefaultSelect from 'components/shared-components/hotel/Select/DefaultSelect';
import DefaultSearch from 'components/shared-components/hotel/Search/DefaultSearch';
import DefaultButton from "../../../../../components/shared-components/hotel/Button/DefaultButton";

const { Text } = Typography;
const { Panel } = Collapse;

const SearchFilter = (props) => {
    const [vendorSystemOptions, setVendorSystemOptions] = useState([
        {key: 'HIKARI_TOUR', label: 'HIKARI GLOBAL', value: 'HIKARI_TOUR'},
    ])

    useEffect(() => {
        props.setCityKey(null)
        if (props.countryKey) {
            const country = props.mappingCountries.find((country) => country.countryCode === props.countryKey)
            if (country) {
                props.setCityOptions([
                    { label: '== 도시 선택 ==', value: null },
                    ...country.cities.map((city) => {
                        return {
                            label: `${city.name} (${city.englishName})`,
                            value: city.code
                        }
                    })
                    .sort((a, b) => a.label.localeCompare(b.label))
                ])
            }
        }
    }, [props.countryKey])

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Row gutter={[8, 8]} style={{ alignItems: 'center' }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ display: 'flex', alignItems: 'center' }}>
                                <DefaultButton
                                    text={'전체 마진 변경'}
                                    onClick={props.onClick}
                                    style={{
                                        fontWeight: 'bold',
                                        backgroundColor: '#6DAE60',
                                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(109, 174, 96, 0.2) 100%),linear-gradient(0deg, #6DAE60, #6DAE60)'
                                    }}
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ display: 'flex', alignItems: 'center' }}>
                                <DefaultSelect
                                    setSelectedKey={props.setVendorSystem}
                                    value={props.vendorSystem}
                                    options={vendorSystemOptions}
                                    placeholder={'=== 공급처 선택 ==='}
                                    style={{ width: '12.3rem' }}
                                />
                                {
                                    props.selectedVendorSystem &&
                                    <>
                                        <Row style={{}}>
                                            <Text style={{ marginLeft: '0.5rem' }}>현재 공통 마크업 : </Text>
                                            <Text style={{ fontWeight: 'bold', marginLeft: '0.125rem' }}>{props?.selectedVendorSystem?.rate}</Text>
                                            <Text style={{ marginLeft: '0.125rem' }}>%</Text>
                                        </Row>
                                    </>
                                }
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                                <DefaultSelect
                                    placeholder={'=== 국가 선택 ==='}
                                    options={props.mappingCountriesOption}
                                    setSelectedKey={props.setCountryKey}
                                    value={props.countryKey}
                                    style={{ width: '100%' }}
                                />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                                <DefaultSelect
                                    placeholder={'=== 도시 선택 ==='}
                                    options={props.cityOptions}
                                    setSelectedKey={props.setCityKey}
                                    value={props.cityKey}
                                    style={{
                                        width: `100%`,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]} style={{ marginTop: '0.425rem' }}>
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                                <DefaultSelect
                                    options={props.filterOptions}
                                    setSelectedKey={props.setFilterValue}
                                    value={props.filterValue}
                                    placeholder={'공급업체 호텔코드'}
                                    style={{ width: '100%' }}
                                />
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                <DefaultSearch
                                    onSearch={props.onSearch}
                                    placeholder={'호텔 정보를 검색해주세요.'}
                                />
                            </Col>
                        </Row>
            </Col>
		</>
	)
}

export const StyleLabel = styled(Text)`
    font-weight: bold;
    margin-right: 1rem;
`

export default SearchFilter
