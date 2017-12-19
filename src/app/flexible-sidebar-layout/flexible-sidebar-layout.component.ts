import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-flexible-sidebar-layout',
  templateUrl: './flexible-sidebar-layout.component.html',
  styleUrls: ['./flexible-sidebar-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlexibleSidebarLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(event) {
    event.preventDefault();
    this.toggle('flex-layout-uncollapse');
  }

  toggle(toggleClass) {
    const flexRoot = document.getElementsByClassName('flex-layout-wrapper') as HTMLCollection;
    flexRoot[0].classList.toggle(toggleClass);
  }
}
