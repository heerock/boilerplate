import { 
  DashboardOutlined
} from '@ant-design/icons';

const dashBoardNavTree = [{
  key: 'hotel',
  path: '/app/hotel',
  title: 'HOTEL',
  icon: DashboardOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: "HOTEL_MAPPING",
      path: "/app/hotel/mapping/hotel",
      title: "HOTEL_MAPPING",
      icon: "",
      breadcrumb: false,
      parentkey: 'hotel',
      submenu: [],
    },
    {
      key: "HOTEL_RESERVATION",
      path: "/app/hotel/reservation",
      title: "HOTEL_RESERVATION",
      icon: "",
      breadcrumb: false,
      parentkey: 'hotel',
      submenu: [],
    },
    {
      key: "HOTEL_MARKUP_SETTING",
      path: "/app/hotel/markup",
      title: "HOTEL_MARKUP_SETTING",
      icon: "",
      breadcrumb: false,
      parentkey: 'hotel',
      submenu: [],
    },
  ]
},
{
  key: 'carmore',
  path: '/app/carmore',
  title: 'CARMORE',
  icon: DashboardOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: "CAR_RESERVATION",
      path: "/app/hotel/mapping/hotel",
      title: "CAR_RESERVATION",
      icon: "",
      breadcrumb: false,
      parentkey: 'carmore',
      submenu: [],
    },
  ]
},
{
  key: 'QA',
  path: '/app/qa',
  title: 'QA',
  icon: DashboardOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: "QA_HOTEL_DATE_CHANGE",
      path: "/app/qa/hotel/reservation",
      title: "QA_HOTEL_DATE_CHANGE",
      icon: "",
      breadcrumb: false,
      parentkey: 'QA',
      submenu: [],
    },
  ]
},
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
