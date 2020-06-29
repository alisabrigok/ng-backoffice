import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { SpacerComponent } from 'src/app/components/spacer/spacer.component';

@NgModule({
  declarations: [SpacerComponent],
  imports: [MatDividerModule],
  exports: [SpacerComponent, MatDividerModule],
})
export class CommonsModule {}
