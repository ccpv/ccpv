import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopPage } from './top';

import { MessageModule } from '../../components/message/message.module';

@NgModule({
  declarations: [
    TopPage,
  ],
  imports: [
    IonicPageModule.forChild(TopPage),
    MessageModule
  ],
})
export class TopPageModule {}
