import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(
    private menuService: NbMenuService,
  ) {
    this.menuService
      .onItemClick()
      .subscribe((x) => x.item?.data?.onClick?.call(null, x));
  }
}
