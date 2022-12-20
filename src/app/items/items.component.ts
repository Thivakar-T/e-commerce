import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray,FormControl ,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  form!: FormGroup;
  goods:any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      goods: ['1'],
     
    })

}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}


checkpresent(event: any) {
  if (event.target.checked) {
    this.form.value.goods = '1'
  } else {
    this.form.value.goods = '0'
  }
}

}
