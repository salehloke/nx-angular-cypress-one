import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nx-angular-cypress-one-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Output() openSideNavToggle = new EventEmitter();

  isLoading = false;

  openSidenav() {
    this.openSideNavToggle.emit();
  }
}
