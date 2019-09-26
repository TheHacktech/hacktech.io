import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';
//TODO: add user model and post to backend api.
//import { User }  from '../../../server/models/user';


@Component({
  selector: 'app-application',
  templateUrl: './views/application/application.component.html',
  styleUrls: ['./views/application/application.component.css']
})

export class ApplicationComponent implements OnInit{

  constructor(private fb: FormBuilder) {}

  ngOnInit(){}

  userForm = this.fb.group({
      // TODO: intialize '' with user's actual values
      phoneNumber: ['', Validators.required],
      school: ['', Validators.required],
      major: ['', Validators.required],
      undergrad: ['', Validators.required],
      graduationYear: ['', Validators.required],
      github: [''],
      linkedin: [''],
      resume: ['', Validators.required],
      latino: ['', Validators.required],
      race: new FormArray([]),
      gender: ['', Validators.required],
      shirtSize: ['', Validators.required],
      needTransportation: ['', Validators.required],
      busFrom: [''],
      airport: [''],
      dietaryRestrictions: ['', Validators.required],
      dietaryRestrictionsChoice: new FormArray([]),
      dietaryRestrictionsDetail: [''],
      Q1: ['', Validators.required],
      Q2: ['', Validators.required],
      Q3: ['', Validators.required],
      Q4: ['', Validators.required],
      codeOfConduct: ['', Validators.required],
  });

  public races: Array<String> = [
    'Asian',
    'White',
    'Native Hawaiian or Other Pacific Islander',
    'American Indian or Alaska Native',
    'Black or African American'
  ];

  public diets: Array<String> = [
    'Lactose intolerance',
    'Halal',
    'Peanut allergy',
    'Vegetarian',
    'Vegan',
    'Other'
  ];


  onCheckChange(event:any, isRace:Boolean) {
    let formArray: FormArray;
    if (isRace) {
      formArray = this.userForm.get('race') as FormArray;
    } else {
      formArray = this.userForm.get('dietaryRestrictionsChoice') as FormArray;
    }
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;

      for (let control of formArray.controls) {
        if(control.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
        i++;
      }
    }
  }

  onSubmit() {
    let data: any = this.userForm.value;
    console.log(data);

  }

}

