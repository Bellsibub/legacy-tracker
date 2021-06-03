// @material-ui/icons
// import Apps from '@material-ui/icons/Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import DateRange from '@material-ui/icons/DateRange';
// import GridOn from '@material-ui/icons/GridOn';
// import Image from '@material-ui/icons/Image';
// import Place from '@material-ui/icons/Place';
// import Timeline from '@material-ui/icons/Timeline';
import WidgetsIcon from '@material-ui/icons/Widgets';

import Dashboard from 'views/Dashboard';
import Widgets from 'views/Widgets';

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Dashboard,
    auth: true,
    section: 'categories'
  },
  {
    path: '/widgets',
    name: 'Widgets',
    icon: WidgetsIcon,
    component: Widgets,
    auth: true,
    section: 'categories'
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: "SE",
    component: Widgets,
    auth: true,
    section: 'profile'
  },
  {
    path: '/logout',
    name: 'Logout',
    icon: WidgetsIcon,
    component: Widgets,
    auth: true,
    section: 'profile'
  }
];
