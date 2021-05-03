import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import { GetAllOffresAction, GetSelectedOffresAction, SearchOffresAction } from 'src/app/ngrx/offres.actions';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './offres-nav-bar.component.html',
  styleUrls: ['./offres-nav-bar.component.css']
})
export class OffresNavBarComponent implements OnInit {
  
  constructor(private store:Store<any>, private router : Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllOffresAction({}))
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedOffresAction({}))
  }
 
  onSearch(dataForm : any){
    this.store.dispatch(new SearchOffresAction(dataForm.keyword))
  }

  onNewOffre(){
    this.router.navigateByUrl("newOffre");
  }
}



