import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Grid } from "antd";
import IntlMessage from "../util-components/IntlMessage";
import Icon from "../util-components/Icon";
import navigationConfig from "configs/NavigationConfig";
import { connect } from "react-redux";
import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE } from "constants/ThemeConstant";
import utils from 'utils'
import styled from 'styled-components';
import { onMobileNavToggle } from "redux/actions/Theme";

const { SubMenu } = Menu;
const { useBreakpoint } = Grid;

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const setDefaultOpen = (key) => {
  let keyList = [];
  let keyString = "";
  if (key) {
    const arr = key.split("-");
    for (let index = 0; index < arr.length; index++) {
      const elm = arr[index];
      index === 0 ? (keyString = elm) : (keyString = `${keyString}-${elm}`);
      keyList.push(keyString);
    }
  }
  return keyList;
};

const SideNavContent = (props) => {
  const [themeColor, setThemeColor] = useState('');
  const [openKeySelect, setOpenKeySelect] = useState('');
  const [selectedKey, setSelectedKey] = useState(null); 

	const { sideNavTheme, routeInfo, hideGroupTitle, localization, onMobileNavToggle, navCollapsed } = props;
	const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
	const closeMobileNav = () => {
		if (isMobile) {
			onMobileNavToggle(false)
		}
	}

  useEffect(() => {
    if (sideNavTheme === 'SIDE_NAV_LIGHT') setThemeColor('#324358');
    if (sideNavTheme === 'SIDE_NAV_DARK') setThemeColor('#324358');
    if (sideNavTheme === 'SIDE_NAV_DARK_DEFAULT') isMobile ? setThemeColor('#fff') : setThemeColor('#324358');
  }, [sideNavTheme, isMobile]);


  const onOpenChanges = (e, navTree) => {
    let element = navTree;
    let reMap = [];
    let lastFlag;
    let last = e[e.length - 1];

    if (e.length > 0) {
      e.map((item) => {
        lastFlag = element.find((el) => el.key === last);

        if (!lastFlag) {
          const flag = element.find((el) => el.key === item);
          if (flag) {
            element = flag?.submenu;
            reMap = reMap.concat(item);
          }
        } else {
          element = lastFlag?.submenu;
          reMap = reMap.concat(lastFlag.key);
        }
      });
    } else {
      reMap = reMap.concat(last);
    }
    setOpenKeySelect(reMap);
  };


  const getMenu = (menus) => {
    if (menus?.length) {
      const result = menus.map((menu) => {
        if (menu.submenu.length === 0) {
          return (
            <Menu.Item key={menu.key} icon={menu.icon ? <Icon type={menu.icon} /> : ''}>
              <span>{setLocale(localization, menu.title)}</span>
              {menu.path ? <Link onClick={() => closeMobileNav()} to={menu.path} /> : null}
            </Menu.Item>
          );
        } else {
          return (
            <SubMenu
              key={menu.key}
              title={
                <>
                  {setLocale(localization, menu.title)}
                  <span className={'nav_line_span'}></span>
                </>
              }
              className={!menu.path && !menu.parentKey ? 'nav_group' : ''}
            >
              {getMenu(menu.submenu)}
            </SubMenu>
          );
        }
      });

      return result;
    }
  };

  useEffect(() => {
    if (routeInfo?.key) setSelectedKey([routeInfo.key]);
    // if (routeInfo?.path) {
    //   setOpenKeySelect(routeInfo.parentMenuArr.filter((ele) => ele !== null));
    // } else {
    //   setOpenKeySelect([]);
    // }
  }, [routeInfo]);

  return (
    <StyleMenu
      theme={sideNavTheme === SIDE_NAV_LIGHT ? "light" : "dark"}
      mode="inline"
      style={{ height: "100%", borderRight: 0 }}
      defaultSelectedKeys={[routeInfo?.key]}
      defaultOpenKeys={setDefaultOpen(routeInfo?.key)}
      selectedKeys={selectedKey}
      // openKeys={openKeySelect}
      // onOpenChange={(e) => onOpenChanges(e, navigationConfig)}
      className={hideGroupTitle ? "hide-group-title" : ""}
      color={themeColor}
      $navCollapsed={navCollapsed}
    >
      {getMenu(navigationConfig)}
    </StyleMenu>
  );
};

const TopNavContent = (props) => {
  const { topNavColor, localization } = props;
  return (
    <Menu mode="horizontal" style={{ backgroundColor: topNavColor }}>
      {navigationConfig.map((menu) =>
        menu.submenu.length > 0 ? (
          <SubMenu
            key={menu.key}
            popupClassName="top-nav-menu"
            title={
              <span>
                {menu.icon ? <Icon type={menu?.icon} /> : null}
                <span>{setLocale(localization, menu.title)}</span>
              </span>
            }
          >
            {menu.submenu.map((subMenuFirst) =>
              subMenuFirst.submenu.length > 0 ? (
                <SubMenu
                  key={subMenuFirst.key}
                  icon={
                    subMenuFirst.icon ? (
                      <Icon type={subMenuFirst?.icon} />
                    ) : null
                  }
                  title={setLocale(localization, subMenuFirst.title)}
                >
                  {subMenuFirst.submenu.map((subMenuSecond) => (
                    <Menu.Item key={subMenuSecond.key}>
                      <span>
                        {setLocale(localization, subMenuSecond.title)}
                      </span>
                      <Link to={subMenuSecond.path} />
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={subMenuFirst.key}>
                  {subMenuFirst.icon ? (
                    <Icon type={subMenuFirst?.icon} />
                  ) : null}
                  <span>{setLocale(localization, subMenuFirst.title)}</span>
                  <Link to={subMenuFirst.path} />
                </Menu.Item>
              )
            )}
          </SubMenu>
        ) : (
          <Menu.Item key={menu.key}>
            {menu.icon ? <Icon type={menu?.icon} /> : null}
            <span>{setLocale(localization, menu?.title)}</span>
            {menu.path ? <Link to={menu.path} /> : null}
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

const MenuContent = (props) => {
  return props.type === NAV_TYPE_SIDE ? (
    <SideNavContent {...props} />
  ) : (
    <TopNavContent {...props} />
  );
};

const mapStateToProps = ({ theme }) => {
  const { sideNavTheme, topNavColor } = theme;
  return { sideNavTheme, topNavColor };
};

export default connect(mapStateToProps, { onMobileNavToggle })(MenuContent);

export const StyleMenu = styled(Menu)`
  height: 100%;
  border-right: 0px;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => (props.$navCollapsed ? '10px' : '0px')};
  opacity: ${(props) => (props.$navCollapsed ? 0.98 : 1)};

  & .ant-menu-submenu-title .ant-menu-title-content {
    font-weight: 700;
    font-size: 15px;
    color: #FFF;
  }

  .ant-menu-submenu {
    width: 90%;
    margin: 0 auto;
    background: #1F262F;
    border-radius: 10px;
  }

  .ant-menu-submenu-arrow {
    color: #FFF;
    background: #FFF;
    background-image: unset;
    :before {
      color: #FFF;
      background: #FFF !important;
      background-image: unset !important;
    }
    :after {
      color: #FFF;
      background: #FFF !important;
      background-image: unset !important;
    }
  }

  .ant-menu-inline {
    color: #FFF;
    background: #1F262F;
  }

  .ant-menu-item {
    padding-left: 24px !important;
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    height: 1.8rem !important;
    line-height: 1.8rem !important;
  }
`;
