import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Space, Typography, Select, Divider, Form } from 'antd';
import styled from 'styled-components';
import DefaultSelect from '../../../../../../components/shared-components/hotel/Select/DefaultSelect';
import DefaultButton from '../../../../../../components/shared-components/hotel/Button/DefaultButton';
import DefaultSearch from '../../../../../../components/shared-components/hotel/Search/DefaultSearch';
import SettingMasterHotelTable from './SettingMasterHotelTable';
import DefaultCheckbox from 'components/shared-components/hotel/Checkbox/DefaultCheckbox';
import SettingVendorHotelTable from "./SettingVendorHotelTable";
import DistanceRadio from "../../../../../../components/shared-components/hotel/Radio/DistanceRadio";
import {useSelector} from "react-redux";
import SettingVendorHotel from "./SettingVendorHotel";
import SettingMasterHotel from "./SettingMasterHotel";
const defaultMasterData = [
    {
        key: '11eebb1e-300e-98d6-850e-95b5d5006522',
        id: "11eebb1e-300e-98d6-850e-95b5d5006522",
        supplierSystem: "EXPEDIA",
        vendors: ['TRIPBTOZ', 'OHMYHOTEL','OHMYHOTEL','OHMYHOTEL','OHMYHOTEL'],
        code: "HT00000001",
        name: "Hanwha Resort Jirisan",
        address: "464, Hwaeomsa-ro, Masan-myeon 57616 Gurye ´KR´",
        phone: "8227295936",
        fax: "8227293893",
        rating: 3.50,
        country: {
            "code": "KR",
            "name": "대한민국"
        },
        city: {
            "code": "KRGRE",
            "name": "구례군",
            "englishName": "Gurye"
        },
        updatedId: 'heerock@teamo2.kr',
        updatedAt: '2024-01-30 10:00',
        isMapping: 'Y',
        isSale: 'Y'
    },

    // { key: 'EX12345678', vendors: ['TRIPBTOZ', 'OHMYHOTEL','OHMYHOTEL','OHMYHOTEL','OHMYHOTEL'], hotelCode: 'EX12345678', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isMapping: 'Y', isSale: 'Y'},
    // { key: 'EX12345679', vendors: ['EXPEDIA'], hotelCode: 'EX12345679', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL2', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isMapping: 'Y', isSale: 'Y'},
    // { key: 'EX12345680', hotelCode: 'EX12345680', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isMapping: 'N', isSale: 'Y'},
    // { key: 'EX12345681', hotelCode: 'EX12345681', vendorHotelCode: 'HK12345679', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isMapping: 'N', isSale: 'N'},
];

const defaultVendorData = [
    {
        key: '11eebb1e-300e-98d6-850e-95b5d5006522',
        id: "11eebb1e-300e-98d6-850e-95b5d5006522",
        supplierSystem: "HIKARI_TOUR",
        code: "HT00000001",
        name: "Hanwha Resort Jirisan",
        address: "464, Hwaeomsa-ro, Masan-myeon 57616 Gurye ´KR´",
        phone: "8227295936",
        fax: "8227293893",
        rating: 3.00,
        country: {
            "code": "KR",
            "name": "대한민국"
        },
        city: {
            "code": "KRGRE",
            "name": "구례군",
            "englishName": "Gurye"
        },
        isMapping: 'Y',
        isSale: 'Y'
    },
];

const MappingSetting = (props) => {
    const { mappingCountries, mappingCountriesOption } = useSelector(state => state.location);
    const [masterData, setMasterData] = useState(defaultMasterData);
    const [vendorData, setVendorData] = useState(defaultVendorData);
    const [selectedCountryCode, setSelectedCountryCode] = useState(null);
    const [selectedCityCode, setSelectedCityCode] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);
    const [selectedVendorHotelKey, setSelectedVendorHotelKey] = useState([]);
    const [selectedMasterHotelKey, setSelectedMasterHotelKey] = useState([]);
    const [masterfilterOptions, setMasterFilterOptions] = useState([
        { label: '마스터 호텔 코드', value: 'HOTEL_CODE' },
        { label: '마스터 호텔명', value: 'HOTEL_NAME' },
    ]);

    useEffect(() => {
        setSelectedCityCode(null);
        if (selectedCountryCode) {
            const country = mappingCountries.find((country) => country.countryCode === selectedCountryCode)
            if (country) {
                setCityOptions([
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

    }, [selectedCountryCode])

    return (
        <>
            <Row style={{width: `100%`}} gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row gutter={[0, 16]}>
                        <DefaultSelect
                            width={20}
                            setSelectedKey={setSelectedCountryCode}
                            value={selectedCountryCode}
                            placeholder={`=== 국가 선택 ===`}
                            options={mappingCountriesOption}
                        />
                    </Row>
                    <Divider />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{display: 'flex'}}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                       <SettingMasterHotel
                           selectedCityCode={selectedCityCode}
                           setSelectedCityCode={setSelectedCityCode}
                           selectedCountryCode={selectedCountryCode}
                           cityOptions={cityOptions}
                           masterfilterOptions={masterfilterOptions}
                           data={masterData}
                           setData={setMasterData}
                           selectedMasterHotelKey={selectedMasterHotelKey}
                           setSelectedMasterHotelKey={setSelectedMasterHotelKey}
                       />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <SettingVendorHotel
                            selectedMasterHotelKey={selectedMasterHotelKey}
                            data={vendorData}
                            setData={setVendorData}
                        />
                    </Col>

                </Col>
            </Row>
        </>
    )
}


export default MappingSetting
