import { Meta, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { TopbarComponent } from './topbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export default {
  title: 'TopbarComponent',
  component: TopbarComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [TopbarComponent],
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
  ]
} as Meta<TopbarComponent>;

export const Primary = {
  render: (args: TopbarComponent) => ({
    props: args,
  }),
  args: {},
};
