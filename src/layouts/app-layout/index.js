import React, { useEffect } from 'react';
import { Layout, Grid } from 'antd';
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

import SideNav from 'components/layout-components/SideNav';
import TopNav from 'components/layout-components/TopNav';
import MobileNav from 'components/layout-components/MobileNav'
import HeaderNav from 'components/layout-components/HeaderNav';
import PageHeader from 'components/layout-components/PageHeader';
import Footer from 'components/layout-components/Footer';
import AppViews from 'views/app-views';
import navigationConfig from "configs/NavigationConfig";
import { 
  SIDE_NAV_WIDTH, 
  SIDE_NAV_COLLAPSED_WIDTH,
  NAV_TYPE_SIDE,
  NAV_TYPE_TOP
} from 'constants/ThemeConstant';
import utils from 'utils';
import AccessTokenService from '../../services/AccessToken/AccessTokenService';
import {authenticated, tokenUser} from '../../redux/actions/Auth';
import {ADMIN_HOST} from "../../configs/HostConfig";

const { Content } = Layout;
const { useBreakpoint } = Grid;

export const AppLayout = ({ navCollapsed, navType, location }) => {
  const { token, user } = useSelector(state => state.auth);
  const { loading } = useSelector(state => state.loading);
  const currentRouteInfo = utils.getRouteInfo(navigationConfig, location.pathname)
  const history = useHistory();
  const dispatch = useDispatch();
  const screens = utils.getBreakPoint(useBreakpoint());
  const isMobile = !screens.includes('lg')
  const isNavSide = navType === NAV_TYPE_SIDE
  const isNavTop = navType === NAV_TYPE_TOP

  const loginPage = () => {
    localStorage.removeItem('token');
    window.location.href = `${ADMIN_HOST}/adminmanage/Login`;
    return false;
  }

  const validateToken = (token) => {
    const decodedToken = jwt.decode(token, process.env.SECRET_KEY)
    const now = parseInt(new Date().getTime() / 1000)

    if (decodedToken.exp < now) {
      loginPage()
    }

    if (decodedToken && !('admin_index' in decodedToken) || !('admin_email' in decodedToken)) {
      loginPage()
    }

    return decodedToken;
  }

  useEffect(() => {
    const cookieToken = cookie.load('token')
    const localStorageToken = localStorage.getItem('token');

    if (!cookieToken) {
      if (localStorageToken) {
        const decodedToken = validateToken(localStorageToken);
        if (!decodedToken) loginPage()

        dispatch(tokenUser(decodedToken));
        dispatch(authenticated(localStorageToken));
      } else loginPage()

    } else {
      const decodedToken = validateToken(cookieToken)
      if (!decodedToken) loginPage()

      localStorage.setItem('token', cookieToken)
      dispatch(tokenUser(decodedToken));
      dispatch(authenticated(cookieToken));
    }
  }, [])

  const getLayoutGutter = () => {
    if(isNavTop || isMobile) {
      return 0
    }
    return navCollapsed ? SIDE_NAV_COLLAPSED_WIDTH : SIDE_NAV_WIDTH
  }
  return (
      token &&
    <Layout>
      <HeaderNav isMobile={isMobile}/>
      {(isNavTop && !isMobile) ? <TopNav routeInfo={currentRouteInfo}/> : null}
      <Layout className="app-container">
        {(isNavSide && !isMobile) ? <SideNav routeInfo={currentRouteInfo}/> : null }
        <Layout className="app-layout" style={{paddingLeft: getLayoutGutter()}}>
          <div className={`app-content ${isNavTop ? 'layout-top-nav' : ''}`}>
            <PageHeader display={currentRouteInfo?.breadcrumb} title={currentRouteInfo?.title} />
            <Content>
              <Switch>
                    <Route path="" component={AppViews} />
              </Switch>
            </Content>
          </div>
          {/*<Footer />*/}
        </Layout>
      </Layout>
      {isMobile && <MobileNav />}
    </Layout>
  )
}

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType, locale } =  theme;
  return { navCollapsed, navType, locale }
};

export default withRouter(connect(mapStateToProps)(AppLayout));
