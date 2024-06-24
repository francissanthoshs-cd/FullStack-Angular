import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  constructor(private service:ApiserviceService) { }

  errormsg: any;
  success:any;
  ngOnInit(): void {

  }
  userForm = new FormGroup({
    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required)
  });
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log('res==>',res);
        this.userForm.reset();
        this.success=res.message;
      })

    } else {
      this.errormsg = 'All Fields Should be Filled!';
    }

  }
}
