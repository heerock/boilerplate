import React from 'react'
import { SIDE_NAV_WIDTH, SIDE_NAV_COLLAPSED_WIDTH, NAV_TYPE_TOP } from 'constants/ThemeConstant';
import { APP_NAME } from 'configs/AppConfig';
import { connect } from "react-redux";
import utils from 'utils';
import { Grid, Typography } from 'antd';
import styled from 'styled-components';

const { useBreakpoint } = Grid;
const { Title } = Typography;

const getLogoWidthGutter = (props, isMobile) => {
  const { navCollapsed, navType } = props;
  const isNavTop = navType === NAV_TYPE_TOP ? true : false
  if(isMobile && !props.mobileLogo) {
    return 0
  }
  if(isNavTop) {
    return 'auto'
  }
  if(navCollapsed) {
    return `${SIDE_NAV_COLLAPSED_WIDTH}px`
  } else {
    return `${SIDE_NAV_WIDTH}px`
  }
}

const getLogo = (props) => {
  const { navCollapsed, logoType } = props;
  if(logoType === 'light') {
    if(navCollapsed) {
      return '/img/logo-sm-white.png'
    }
    return '/img/logo-white.png'
  }

  if (navCollapsed) {
    return '/img/logo-sm.png'
  }
  return '/img/logo.png'
}

const getLogoDisplay = (isMobile, mobileLogo) => {
  if(isMobile && !mobileLogo) {
    return 'd-none'
  } else {
    return 'logo'
  }
}

export const Logo = (props) => {
  const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
  return (
    <div
      className={getLogoDisplay(isMobile, props.mobileLogo)} 
      style={{width: `${getLogoWidthGutter(props, isMobile)}`}}>
      <TextLogo>호텔모아 운영툴</TextLogo>
      {/* <img src={getLogo(props)} alt={`${APP_NAME} logo`}/> */}
    </div>
  )
}

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType } =  theme;
  return { navCollapsed, navType }
};

export const TextLogo = styled(Title)`
  color: #FFF !important;
  margin: 0 auto;
  margin-bottom: 0px !important;
  font-size: 1.5rem !important;
`

export default connect(mapStateToProps)(Logo);
