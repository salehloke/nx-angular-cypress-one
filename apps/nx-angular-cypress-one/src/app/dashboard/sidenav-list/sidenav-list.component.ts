import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nx-angular-cypress-one-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent {
  @Output() closeSideNav = new EventEmitter();

  onToggleClose() {
    this.closeSideNav.emit();
  }
}
