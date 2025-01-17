import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, Form, FormControl, FormGroup, NgControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-floating-input',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './floating-input.component.html',
  styleUrl: './floating-input.component.scss'
})
export class FloatingInputComponent implements ControlValueAccessor {
  
  get control(){
    return this.controlDir.control as FormControl;
  }
  constructor(@Self() public controlDir:NgControl){
    this.controlDir.valueAccessor = this;
  }
  
  @Input({required:true}) name!:string;
  @Input() placeholder:string='';
  @Input({required:true}) display!:string;
  @Input() type:string='text';
  @Input() required = false;
  @Input() invalidFeedback = [];
  @Input() validFeedback = '';
  wasTouched = false;
  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  

  
}
