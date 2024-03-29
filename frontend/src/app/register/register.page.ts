import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  firstname:string;
  secondname: string;
  username:string;
  pass:string;
  cpass:string;

  register(){
      const firstname = this.firstname;
      const secondname =this.secondname;
      const username = this.username;
      const pass = this.pass;
      const cpass = this.cpass;
      
        fetch('http://localhost:3000/register',{
            method: 'POST',
            headers: new Headers({
          // Encabezados
         'Content-Type': 'application/json'
          }),
            body: JSON.stringify(
          {
          "firstname": firstname,
          "secondname": secondname,
          "username": username,
          "pass": pass,
          "cpass": cpass
          })
          
        }).then(response=>{
          console.log(response);
          if (response.redirected == true)
          {
            window.location.replace(response.url)
          }
          return response.json()
        }).then(r =>{
          console.log(r);
      }).catch(e => console.log(e))
        
      //var p = document.createElement("p");
      //cont1.appendChild(p);
      //p.innerHTML = "Succesfully updated";
    
    this.router.navigate(['/login']);
  }
}
