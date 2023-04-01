import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;


  IsTrue: boolean = false;
  loginError: boolean = false;

  @ViewChild('input_password') input_password: ElementRef;
  @ViewChild('input_username') input_username: ElementRef;
  constructor( private http: HttpClient,
    private red: Renderer2,
    private router: Router) {
    this.username = ''; // initialize username with an empty string
    this.password = '';
  }

  onSubmit() {
    const data = {
      username: this.red.selectRootElement(this.input_username['nativeElement'])
        .value,
      password: this.red.selectRootElement(this.input_password['nativeElement'])
        .value,
    };

    
    this.http.post<{ success: boolean }>('http://localhost:3000/', data).subscribe(
      (response) => {
   // Handle successful authentication here
    if (response.success) {
     // Navigate to welcome page if authentication was successful
      this.router.navigate(['/success-login']);
    } else {
      this.loginError = true; 
      
    }
  },
  (error) => {
    // Handle authentication error here
    this.IsTrue = true;
  }
);

  }

}
