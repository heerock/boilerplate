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
      key: "HOTEL_ROOM_MAPPING",
      path: "/app/hotel/mapping/room",
      title: "호텔 룸매핑 관리",
      icon: "",
      breadcrumb: false,
      parentkey: 'hotel',
      submenu: [],
    },
    {
      key: "HOTEL_MARGIN_SETTING",
      path: "/app/hotel/setting/margin",
      title: "호텔 마진 설정",
      icon: "",
      breadcrumb: false,
      parentkey: 'hotel',
      submenu: [],
    },
    {
      key: "HOTEL_CALCULATE",
      path: "/app/hotel/calculate",
      title: "호텔 정산",
      icon: "",
      breadcrumb: false,
      parentkey: 'hotel',
      submenu: [],
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
