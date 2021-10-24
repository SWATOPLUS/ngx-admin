import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'SWATONOTES',
    group: true,
  },
  {
    title: 'Task List',
    icon: 'home-outline',
    link: '/pages/task-list',
  },
  {
    title: 'DASHBOARDS',
    group: true,
  },
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT (Not found)',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
];
