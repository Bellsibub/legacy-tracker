// @material-ui/icons
// import Apps from '@material-ui/icons/Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import DateRange from '@material-ui/icons/DateRange';
// import GridOn from '@material-ui/icons/GridOn';
// import Image from '@material-ui/icons/Image';
// import Place from '@material-ui/icons/Place';
// import Timeline from '@material-ui/icons/Timeline';

import Dashboard from 'views/Dashboard';
import Laws from 'views/Laws';
import Geneology from 'views/Geneology';
import Skills from 'views/Skills';
import Aspirations from 'views/Aspirations';
import Settings from 'views/Settings';
import OnBoarding from 'views/OnBoarding';

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Dashboard,
    auth: true,
    section: 'categories',
    noLegacyShow: true
  },
  {
    path: '/laws-rules',
    name: 'Laws and Rules',
    icon: 'LR',
    component: Laws,
    auth: true,
    section: 'categories',
    noLegacyShow: false
  },
  {
    path: '/geneology',
    name: 'Geneology',
    icon: 'GE',
    component: Geneology,
    auth: true,
    section: 'categories',
    noLegacyShow: false
  },
  {
    path: '/skills',
    name: 'Skills',
    icon: 'SK',
    component: Skills,
    auth: true,
    section: 'categories',
    noLegacyShow: false
  },
  {
    path: '/aspirations',
    name: 'Aspirations',
    icon: 'GE',
    component: Aspirations,
    auth: true,
    section: 'categories',
    noLegacyShow: false
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: 'SE',
    component: Settings,
    auth: true,
    section: 'profile',
    noLegacyShow: true
  },
  {
    path: '/onboarding',
    name: 'OnBoarding',
    // icon: 'SE',
    component: OnBoarding,
    auth: true,
    section: 'none',
    noLegacyShow: true
  },
  {
    path: '/auth/login',
    name: 'Logout',
    icon: 'LG',
    // component: Login,
    auth: false,
    section: 'profile',
    noLegacyShow: true,
    isLogout: true
  }
];
