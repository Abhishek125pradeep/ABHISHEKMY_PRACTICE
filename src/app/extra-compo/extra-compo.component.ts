import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
import { MatDialog } from '@angular/material/dialog';
import { EditdetailComponent } from '../editdetail/editdetail.component';


@Component({
  selector: 'app-extra-compo',
  templateUrl: './extra-compo.component.html',
  styleUrls: ['./extra-compo.component.scss']
})
export class ExtraCompoComponent {

  registerationform!: FormGroup;
  alphabeticPattern = /^[a-zA-Z]+$/;
  recordbyid: any;
  Apires: any;
  endPoint: any;
  id: any;
  UserDetails: any;
  selectedOption: string = '';
  url = "assets/images/pass.jpeg";
  selectedAge: number = 20;
  disabled = false;
  max = 100;
  min = 20;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  item = ["Cricket","Football","Reading Books"]

  // Navbar!: FormGroup;
  constructor(private rout: Router, private fb: FormBuilder, private apicallService: ApicallService, private Dialouge: MatDialog) { }
  ngOnInit() {
  
    this.recordbyid = this.apicallService.recordById;

    this.id = this.apicallService.id


    this.formvalidationcontrol();
    
  }





  formvalidationcontrol() {
    // this.Navbar = this.fb.group({})
    this.registerationform = this.fb.group({
      Name: [this.recordbyid ? this.recordbyid[0].Name : '', [Validators.pattern(this.alphabeticPattern), Validators.maxLength(20), Validators.required]],
      LastName: [this.recordbyid ? this.recordbyid[0].LastNameName : '', [Validators.pattern(this.alphabeticPattern), Validators.maxLength(20), Validators.required]],
      Email: [this.recordbyid ? this.recordbyid[0].Email : '', [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), Validators.required]],
      MobNo: [this.recordbyid ? this.recordbyid[0].MobNo : '', [Validators.pattern('[0-9]*$'), Validators.maxLength(10), Validators.required]],
      State: [this.recordbyid ? this.recordbyid[0].State : '', [Validators.pattern('[a-zA-Z]*$'), Validators.required]],
      Contry: [this.recordbyid ? this.recordbyid[0].Contry : '', [Validators.required]],
      Address: [this.recordbyid ? this.recordbyid[0].Address : '', [Validators.required]],
      Photo:[this.recordbyid ? this.recordbyid[0].Photo : '',],
      age:[this.recordbyid ? this.recordbyid[0].Photo : '',],
      option: ['', Validators.required],
      Tags:[]

    })
  }

  Address() {
    this.apicallService.getApicall('post')


  }
  ImageUpload(e:any){
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }
  Submit(Data: any) {
    console.log(Data);
    let endpoint = "posts"
    this.apicallService.PostCall(Data, endpoint).subscribe(response => {
      this.Apires = response;
      console.log(this.Apires);
      this.rout.navigateByUrl(`/Profile/${this.Apires.id}`)

    })
    
    
     
    }
    Cancel() {
      this.rout.navigateByUrl('/registration')
    }
    Update() {
  
    }
  }
 









