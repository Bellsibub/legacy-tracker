// icons
import {
  Bookshelf,
  Cog,
  Dna,
  FoodApple,
  Gavel,
  LockOpenVariant,
  StarShooting,
  ViewDashboard
} from 'mdi-material-ui';

// views
import Dashboard from 'views/Dashboard';
import Laws from 'views/Laws';
import Geneology from 'views/Geneology';
import Skills from 'views/Skills';
import Aspirations from 'views/Aspirations';
import Food from 'views/Food';
import Settings from 'views/Settings';
import OnBoarding from 'views/OnBoarding';

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: ViewDashboard,
    component: Dashboard,
    auth: true,
    section: 'categories',
    noLegacyShow: true
  },
  {
    path: '/laws-rules',
    name: 'Laws and Rules',
    icon: Gavel,
    component: Laws,
    auth: true,
    section: 'categories',
    noLegacyShow: false
  },
  {
    path: '/geneology',
    name: 'Geneology',
    icon: Dna,
    component: Geneology,
    auth: true,
    section: 'categories',
    noLegacyShow: false
  },
  {
    path: '/skills',
    name: 'Skills',
    icon: Bookshelf,
    component: Skills,
    auth: true,
    section: 'categories',
    noLegacyShow: false
  },
  {
    path: '/aspirations',
    name: 'Aspirations',
    icon: StarShooting,
    component: Aspirations,
    auth: true,
    section: 'categories',
    noLegacyShow: false
  },
  {
    path: '/food',
    name: 'Food',
    icon: FoodApple,
    component: Food,
    auth: true,
    section: 'categories',
    noLegacyShow: false
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: Cog,
    component: Settings,
    auth: true,
    section: 'profile',
    noLegacyShow: true
  },
  {
    path: '/onboarding',
    name: 'OnBoarding',
    component: OnBoarding,
    auth: true,
    section: 'none',
    noLegacyShow: true
  },
  {
    path: '/auth/login',
    name: 'Logout',
    icon: LockOpenVariant,
    auth: false,
    section: 'profile',
    noLegacyShow: true,
    isLogout: true
  }
];
