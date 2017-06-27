import { CommonModule } from '@angular/common';
import { DropDownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [DropDownDirective],
    exports: [DropDownDirective, CommonModule]
})

export class SharedModule { }