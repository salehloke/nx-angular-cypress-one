import { Meta } from '@storybook/angular';
import { SidenavListComponent } from './sidenav-list.component';

export default {
  title: 'SidenavListComponent',
  component: SidenavListComponent,
} as Meta<SidenavListComponent>;

export const Primary = {
  render: (args: SidenavListComponent) => ({
    props: args,
  }),
  args: {},
};
