import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsState } from 'src/app/ngrx/offres.reducer';
import {map} from 'rxjs/operators';
export interface Employ {
  id:number;
  nom:string;
  prenom: string;
  genre: string;
  
}

@Component({
  selector: 'app-list-employs',
  templateUrl: './list-employs.component.html',
  styleUrls: ['./list-employs.component.css']
})
export class ListEmploysComponent implements OnInit {

  employs :Employ[]= [

    {
     "id": 1,
     "nom":"Mr Khelad",
     "prenom": "Amine",
     "genre": "H"
    },

    {
     "id": 2,
     "nom":"Mr Bouhadir",
     "prenom": "Ahmed",
     "genre": "H"
    },

    {
     "id": 3,
     "nom":"Mme Chala",
     "prenom": "Amel",
     "genre": "F"
    }
   
 ]
;
  
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    
  }

}
