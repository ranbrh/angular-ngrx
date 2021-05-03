import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductsState, ProductsStateEnum} from '../../ngrx/offres.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  productsState$:Observable<ProductsState>|null=null;
  readonly ProductsStateEnum= ProductsStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.productsState$=this.store.pipe(
      map((state)=>  state.catalogState)
    );
  }
}
