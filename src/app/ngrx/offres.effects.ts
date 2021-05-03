import {Injectable} from '@angular/core';
import {OffreService} from '../services/offre.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  DeleteOffresActionError,
  DeleteOffresActionSuccess,
  EditOffresAction,
  EditOffresActionError,
  EditOffresActionSuccess,
  GetAllOffresActionError,
  GetAllOffresActionSuccess, GetSelectedOffresActionError,
  GetSelectedOffresActionSuccess,
  NewOffresActionSuccess,
  OffresActions,
  OffresActionsTypes,
  SaveOffresActionError,
  SaveOffresActionSuccess,
  SearchOffresActionError,
  SearchOffresActionSuccess,
  UpdateOffresActionError,
  UpdateOffresActionSuccess
} from './offres.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class OffresEffects {
  constructor(private offreService:OffreService, private effectActions:Actions) {
  }

  getAllOffresEffect:Observable<OffresActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffresActionsTypes.GET_ALL_OFFRES),
      mergeMap((action:OffresActions)=>{
            return this.offreService.getOffres()
              .pipe(
                map((offres)=> new GetAllOffresActionSuccess(offres)),
                catchError((err)=>of(new GetAllOffresActionError(err.message)))
              )
      })
    )
  );

  /* Get Selected Offres*/
  getSelectedOffresEffect:Observable<OffresActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffresActionsTypes.GET_SELECTED_OFFRES),
      mergeMap((action:OffresActions)=>{
        return this.offreService.getSelectedOffres()
          .pipe(
            map((offres)=> new GetSelectedOffresActionSuccess(offres)),
            catchError((err)=>of(new GetSelectedOffresActionError(err.message)))
          )
      })
    )
  );
  /* search Offres*/
  searchOffresEffect:Observable<OffresActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffresActionsTypes.SEARCH_OFFRES),
      mergeMap((action:OffresActions)=>{
        return this.offreService.searchOffres(action.payload)
          .pipe(
            map((offres)=> new SearchOffresActionSuccess(offres)),
            catchError((err)=>of(new SearchOffresActionError(err.message)))
          )
      })
    )
  );

  /* delete Offres*/
  deleteOffresEffect:Observable<OffresActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffresActionsTypes.DELETE_OFFRES),
      mergeMap((action:OffresActions)=>{
        return this.offreService.delete(action.payload.id)
          .pipe(
            map(()=> new DeleteOffresActionSuccess(action.payload)),
            catchError((err)=>of(new DeleteOffresActionError(err.message)))
          )
      })
    )
  );

  /* new Offres*/
  newOffresEffect:Observable<OffresActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffresActionsTypes.NEW_OFFRES),
      map((action:OffresActions)=>{
        return  new NewOffresActionSuccess({});
      })
    )
  );


  /* save Offres*/
  saveOffresEffect:Observable<OffresActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffresActionsTypes.SAVE_OFFRES),
      mergeMap((action:OffresActions)=>{
        return this.offreService.save(action.payload)
          .pipe(
            map((offre)=> new SaveOffresActionSuccess(offre)),
            catchError((err)=>of(new SaveOffresActionError(err.message)))
          )
      })
    )
  );

  /* edit Offres*/
  editOffresEffect:Observable<OffresActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffresActionsTypes.EDIT_OFFRES),
      mergeMap((action:OffresActions)=>{
        return this.offreService.getOffreById(action.payload)
          .pipe(
            map((offre)=> new EditOffresActionSuccess(offre)),
            catchError((err)=>of(new EditOffresActionError(err.message)))
          )
      })
    )
  );

  /* edit Offres*/
  updateOffresEffect:Observable<OffresActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffresActionsTypes.UPDATE_OFFRES),
      mergeMap((action:OffresActions)=>{
        return this.offreService.update(action.payload)
          .pipe(
            map((offre)=> new UpdateOffresActionSuccess(offre)),
            catchError((err)=>of(new UpdateOffresActionError(err.message)))
          )
      })
    )
  );

}
