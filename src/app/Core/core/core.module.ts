import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserStorageService} from '../browser-storage.service';
import {AppConfigService} from '../app-config.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [], // components that are used in app.component.ts will be listed here.
  declarations: [], // components that are used in app.component.ts will be listed here.
  providers: [BrowserStorageService, AppConfigService] // global singleton services of the whole app will be listed here.
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule should be imported ONLY in AppModule.');
    }
  }
}

/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserRepositoryService } from './user-repository.service';
import { NavBarComponent } from './nav-bar.component';
import { AccountMenuComponent } from './account-menu.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [ NavBarComponent, AccountMenuComponent ],
  declarations: [ NavBarComponent, AccountMenuComponent ],
  providers: [ UserRepositoryService ]
})
export class CoreModule { };
*/
