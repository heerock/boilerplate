import { 
  DashboardOutlined
} from '@ant-design/icons';

const dashBoardNavTree = [{
  key: 'hotel',
  path: '/app/hotel',
  title: '카모아 호텔',
  icon: DashboardOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: "HOTEL_MAPPING",
      path: "/app/hotel/mapping/hotel",
      title: "호텔 매핑 관리",
      icon: "",
      breadcrumb: false,
      parentkey: 'hotel',
      submenu: [],
    },
    {
      key: "HOTEL_RESERVATION",
      path: "/app/hotel/reservation",
      title: "호텔 예약 관리",
      icon: "",
      breadcrumb: false,
      parentkey: 'hotel',
      submenu: [],
    },
    {
      key: "HOTEL_MARKUP_SETTING",
      path: "/app/hotel/markup",
      title: "호텔 마크업 관리",
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
  title: '카모아 차량',
  icon: DashboardOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: "CAR_RESERVATION",
      path: "/app/hotel/mapping/hotel",
      title: "차량 예약 관리",
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
      title: "호텔 예약 변경",
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
