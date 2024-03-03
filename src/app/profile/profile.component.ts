import { Component, inject } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  UserDetails: any;
  id:any;
  Name: any;
  
  url= "assets/images/pass.jpeg" ;
  private activatedRoute = inject(ActivatedRoute) 
  

 
constructor(private apicallService:ApicallService,private rout:Router){
  
}
ngOnInit(){

  this.id = this.activatedRoute.snapshot.params['id'];
  this.Name = this.activatedRoute.snapshot.params['Name'];
  
 this.ShowregisterformDetail()
  
}


  async ShowregisterformDetail(){
   
    this.UserDetails = await this.apicallService.getApicall(`posts/${this.id}`).toPromise()
        console.log(this.UserDetails)
      
  
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
Edit(id:any){
 let  recordById:any = [];
   console.log("id",id);
  this.UserDetails.forEach((ele:any) => {
      if(ele.id == id){
      recordById.push(ele)
      }
   });

  this.apicallService.recordById =this.UserDetails
  this.apicallService.id = id;
  this.rout.navigateByUrl("/Extracompo")
}
}
