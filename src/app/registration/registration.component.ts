import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { FormGroup,FormControl } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControl} from  '@angular/forms';
import { AppModule } from '../app.module';
import { Observable, throwError } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm:any
  // registrationForm=new FormGroup({
  //     fullName: new FormControl(),
  //     lastName: new FormControl(),
  //     mobile:new FormControl(),
  //     gender:new FormControl(),
  //     address:new FormControl(),
  //     city:new FormControl(),
  //     pincode:new FormControl(),
  //     email: new FormControl(),
  //     password:new FormControl()
  // });
  constructor (private http:HttpClient,private router:Router,private formBuilder:FormBuilder){
    this.createRegistrationForm();
  }
  createRegistrationForm(): void{
    this.registrationForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender:['',Validators.required],
      address:['',Validators.required],
      city:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      pincode:['',[Validators.required,Validators.pattern("^[1-9][0-9]{5}$")]],
      email: ['',[Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z.-]+\\.[com]{3}$')]],
      password:['',Validators.required]
    });
  }
  // adminForm = new FormGroup({
  //   Email: new FormControl(""),
  //   Password: new FormControl("")

  // });
  save(){
    this.http.post('http://localhost:5184/api/Registrations/create',this.registrationForm.value,{ responseType: 'text' }).subscribe(data=>{
    console.log(data);
    if(data=="Registration Successfull")
    {
      this.router.navigate(['/Login']);
    }
    },
    error=>{
      if(error){
        console.log(error);
        alert("Sorry unable to register");
      }
    }
    ) ;
    

  }

  ngOnInit(): void {
  }
  get field() { return this.registrationForm.controls; }
  handleClear():void{
    this.registrationForm.reset();
  }
}

