import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  emoji(): void{
    this.router.navigate(['emoji-data']);
  }
  begin(): void{
    this.router.navigate(['admin1']);
  }
  socio(){

  }
  health(){
    
  }
}
