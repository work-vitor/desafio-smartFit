import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  results: Location[] = [];
  filteredResults: Location[] = []
  formGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService
  ){}

  ngOnInit(): void{
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })

    this.unitsService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    })
  }

  onSubmit(): void{

    if(!this.formGroup.value.showClosed){
      this.filteredResults = this.results.filter(location => location.opened === true)
    } else{
      this.filteredResults = this.results;
    }

  }

  onClear(): void{
    this.formGroup.reset()
  }
}
