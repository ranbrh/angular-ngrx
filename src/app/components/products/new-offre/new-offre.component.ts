import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NewOffresAction, SaveOffresAction } from 'src/app/ngrx/offres.actions';

import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/offres.reducer';


@Component({
  selector: 'app-new-offre',
  templateUrl: './new-offre.component.html',
  styleUrls: ['./new-offre.component.css']
})
export class NewOffreComponent implements OnInit {

  productFormGroup : FormGroup | null = null;
  state : ProductsState | null = null;
  readonly ProducstStateEnum = ProductsStateEnum;
  submitted : boolean = false ; 
  
  
  constructor(private store : Store<any>, private fb : FormBuilder) { }

  
  
  ngOnInit(): void {
      this.store.dispatch(new NewOffresAction({}));
      this.store.subscribe(mystate=>{
        this.state = mystate.catalogState;
         if ( this.state?.dataState==ProductsStateEnum.NEW){
           this.productFormGroup = this.fb.group({
            
            
            employ :["",Validators.required],
            villedep :["",Validators.required],
            villeariv :["",Validators.required],
            date : ["",Validators.required],
          });
         }
      });

  }
  onNewOffre(){
    this.store.dispatch(new NewOffresAction({}));
  
   }


  onSaveOffre(){
    this.submitted=true;
    //if (!this.productFormGroup?.valid) return;
    this.store.dispatch(new SaveOffresAction(this.productFormGroup?.value));
  }
}
