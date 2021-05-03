import {Component, Input, OnInit} from '@angular/core';

import {Offre} from '../../../../model/offre.model';
import {Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { DeleteOffresAction } from 'src/app/ngrx/offres.actions';
@Component({
  selector: 'app-prdouct-item',
  templateUrl: './offre-item.component.html',
  styleUrls: ['./offre-item.component.css']
})
export class OffreItemComponent implements OnInit {
    @Input() product:Offre|null=null;
  constructor(private store:Store<any>,private router : Router ) { }

  ngOnInit(): void {
  }

  onDelete(product : Offre){
    this.store.dispatch(new DeleteOffresAction(product));
  }

  onEdit(product : Offre){
   this.router.navigateByUrl("editOffre/"+product.id);
  }
}
