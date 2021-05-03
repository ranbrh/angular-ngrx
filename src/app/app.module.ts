import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { OffresComponent } from './components/products/offres.component';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {productsReducer} from './ngrx/offres.reducer';
import {OffresEffects} from './ngrx/offres.effects';
import { ProductsListComponent } from './components/products/products-list/products-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewOffreComponent } from './components/products/new-offre/new-offre.component';
import { EditOffreComponent } from './components/products/edit-offre/edit-offre.component';
import { OffreItemComponent } from './components/products/products-list/offre-item/offre-item.component';
import { OffresNavBarComponent } from './components/products/offres-nav-bar/offres-nav-bar.component';
import { ListEmploysComponent } from './components/products/list-employs/list-employs.component';
import { ApropoNousComponent } from './components/products/apropo-nous/apropo-nous.component';
import { ContarezNousComponent } from './components/products/contarez-nous/contarez-nous.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    OffresNavBarComponent,
    ProductsListComponent,
    OffreItemComponent,
    
    NewOffreComponent,
    
    EditOffreComponent,
    
    ListEmploysComponent,
    
    ApropoNousComponent,
    
    ContarezNousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({catalogState:productsReducer}),
    EffectsModule.forRoot([OffresEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
  

})
export class AppModule { }
