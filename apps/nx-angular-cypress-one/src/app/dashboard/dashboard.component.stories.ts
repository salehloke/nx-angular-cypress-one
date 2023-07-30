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

export default {
  title: 'Dashboard/DashboardComponent',
  component: DashboardComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [DashboardComponent],
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

      <div style="margin: 3em">${story}</div>
      `
    ),
  ],
} as Meta<DashboardComponent>;

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
