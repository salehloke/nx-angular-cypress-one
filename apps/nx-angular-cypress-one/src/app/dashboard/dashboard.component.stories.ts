import {
  Meta,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TopbarComponent } from './topbar/topbar.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

const meta: Meta<DashboardComponent> = {
  title: 'Dashboard/DashboardComponent',
  component: DashboardComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [DashboardComponent, TopbarComponent, SidenavListComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatProgressSpinnerModule,
      ],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (story) => `
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <div style="margin: 3em">
     
      <!-- SIDENAV -->
<mat-sidenav-container>
  <mat-sidenav #sidenav opened="true">
    <!-- SIDENAV LIST -->
    <nx-angular-cypress-one-sidenav-list
      (closeSideNav)="sidenav.close()"
    ></nx-angular-cypress-one-sidenav-list>
    <!-- end of SIDENAV LIST -->
  </mat-sidenav>

  <mat-sidenav-content>
    <!-- TOOLBAR -->
    <nx-angular-cypress-one-topbar
      (openSideNavToggle)="sidenav.toggle()"
    ></nx-angular-cypress-one-topbar>
    <!-- end of TOOLBAR -->
    <main>
    ${story}
    </main>
  </mat-sidenav-content>
</mat-sidenav-container>
<!-- end of SIDENAV -->
      </div>
      `
    ),
  ],
  render: (args: DashboardComponent) => ({
    props: {
      ...args,
      // onPinTask: actionsData.onPinTask,
      // onArchiveTask: actionsData.onArchiveTask,
    },
  }),
};
export default meta;

export const Primary = {
  render: (args: DashboardComponent) => ({
    props: args,
  }),
  args: {
    isLoading: false,
    label: 'Dashboard',
  },
};

export const isLoading = {
  render: (args: DashboardComponent) => ({
    props: args,
  }),
  args: {
    isLoading: true,
    label: 'Dashboard',
  },
};
