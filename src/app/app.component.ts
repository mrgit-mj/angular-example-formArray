import { Component, VERSION, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular ' + VERSION.major;
  numberOfFields = 5;
  values = []
  inputs: FormArray;
  ngOnInit() {
    this.inputs  = new FormArray([])

    for(let i=0; i < this.numberOfFields; i++){
      this.inputs.push(new FormControl(null))
    }
  }

  getControl(i) {
    return this.inputs.at(i) as FormControl;
  }

  getValues() {
    this.values = [...this.inputs.value]
  }
}
