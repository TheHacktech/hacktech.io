import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
//import { User }  from '../../../server/models/user';


@Component({
  selector: 'app-application',
  templateUrl: './views/application/application.component.html',
  styleUrls: ['./views/application/application.component.css']
})

export class ApplicationComponent implements OnInit{
  userForm = new FormGroup(
       //User
       {phoneNumber: new FormControl()}
    );

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(){
    /*this.userForm = this.fb.group({
       //User
       phoneNumber: new FormControl()

    });*/
  }

  /*userForm = this.formBuilder.group({
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
      //: ['', Validators.required],
        });
  */

  products =
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  }
  
  onSubmit() {
    let data: any = this.userForm.value;
    console.log(data);

  }

}

