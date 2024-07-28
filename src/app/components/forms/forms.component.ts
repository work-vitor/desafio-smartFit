import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  results = [];

  formGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService
  ){}

  ngOnInit(): void{
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    })

    this.unitsService.getAllUnits().subscribe(data => console.log(data))
  }

  onSubmit(): void{
    console.log(this.formGroup.value)
  }

  onClear(): void{
    this.formGroup.reset()
  }
}
