import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EditOffresAction, UpdateOffresAction } from 'src/app/ngrx/offres.actions';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/offres.reducer';


@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.component.html',
  styleUrls: ['./edit-offre.component.css']
})
export class EditOffreComponent implements OnInit {
  productID: number;
  state:ProductsState | null = null;
  offreFormGroup!: FormGroup   ;
  readonly ProducstStateEnum = ProductsStateEnum;
  formBuilt : boolean = false;
  submitted : boolean = false ; 

  constructor(private store : Store<any>,private activatedRoute : ActivatedRoute,private fb :FormBuilder ) {
    this.productID = activatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {
this.store.dispatch(new EditOffresAction(this.productID));
this.store.subscribe(state=>{
this.state = state.catalogState;
if (this.state?.dataState==ProductsStateEnum.LOADED){
  if(this.state.currentProduct!=null){
    this.offreFormGroup=this.fb.group({
  
      id :[this.state.currentProduct.id],
      employ :[this.state.currentProduct.employ,Validators.required],
      villedep :[this.state.currentProduct.villedep,Validators.required],
      villeariv :[this.state.currentProduct.villeariv,Validators.required],
      date :[this.state.currentProduct.date,Validators.required],
      });
     this.formBuilt=true;
  }
}
 
}) ;
}

okUpdated(){}

onUpdateOffre(){
  this.submitted=true;
  if (!this.offreFormGroup?.valid) return;
this.store.dispatch(new UpdateOffresAction(this.offreFormGroup?.value));
    
}
}
