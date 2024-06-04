import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MathPipe } from './pipes/math.pipe';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, MaterialModule, MathPipe],
  exports: [FormsModule, MaterialModule, MathPipe],
})
export class SharedModule {}
