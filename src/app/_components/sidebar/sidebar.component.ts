import { Component } from '@angular/core';
import { SidebarModule } from '@coreui/angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  dropdowns = [
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
  ];

  toggleDropdown(index: number) {
    this.dropdowns[index].isOpen = !this.dropdowns[index].isOpen;
  }

}
