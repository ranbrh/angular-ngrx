import {Action} from '@ngrx/store';
import { Employ } from '../model/employ.model';
import {Offre} from '../model/offre.model';

export enum OffresActionsTypes{
  /* Get All OFFRES*/
  GET_ALL_OFFRES="[Offres] Get All offres",
  GET_ALL_OFFRES_SUCCESS="[Offres] Get All offres Success",
  GET_ALL_OFFRES_ERROR="[Offres] Get All offres Error",

 /* Get Selected OFFRES*/
  GET_SELECTED_OFFRES="[Offres] Get Selected offres",
  GET_SELECTED_OFFRES_SUCCESS="[Offres] Get Selected offres Success",
  GET_SELECTED_OFFRES_ERROR="[Offres] Get Selected offres Error",

 /* search OFFRES*/
  SEARCH_OFFRES="[Offres]  Search offres",
  SEARCH_OFFRES_SUCCESS="[Offres]  Search offres Success",
  SEARCH_OFFRES_ERROR="[Offres]  Search offres Error",


  /* delete OFFRES*/
  DELETE_OFFRES="[Offres]  Delete offres",
  DELETE_OFFRES_SUCCESS="[Offre]  Delete offres Success",
  DELETE_OFFRES_ERROR="[Offre]  Delete offres Error",

  
  /* new Offres*/
  NEW_OFFRES="[Offres]  New offres",
  NEW_OFFRES_SUCCESS="[Offre]  New offres Success",
  NEW_OFFRES_ERROR="[Offre]  New offres Error",

  /* save OFFRES*/
  SAVE_OFFRES="[Offres]  Save offres",
  SAVE_OFFRES_SUCCESS="[Offre]  Save offres Success",
  SAVE_OFFRES_ERROR="[Offre]  Save offres Error",

  /* edit OFFRES*/
  EDIT_OFFRES="[Offres]  Edit offres",
  EDIT_OFFRES_SUCCESS="[Offre]  Edit offres Success",
  EDIT_OFFRES_ERROR="[Offre]  Edit offres Error",

  /* update Offres*/
  UPDATE_OFFRES="[Offre]  Update offres",
  UPDATE_OFFRES_SUCCESS="[Offre]  Update offres Success",
  UPDATE_OFFRES_ERROR="[Offre]  Update offres Error",

}
export enum EmploysActionsTypes{
/* all EMPLOYS*/
ALL_EMPLOYS="[Employs]  Employ offres",
ALL_EMPLOYS_SUCCESS="[Employ]  Employ offres Success",
ALL_EMPLOYS_ERROR="[Employs]  Employ offres Error",

}

export class GetAllOffresAction implements Action{
  type: OffresActionsTypes=OffresActionsTypes.GET_ALL_OFFRES;
  constructor(public payload:any) {
  }
}

export class GetAllOffresActionSuccess implements Action{
  type: OffresActionsTypes=OffresActionsTypes.GET_ALL_OFFRES_SUCCESS
  constructor(public payload:Offre[]) {
  }
}

export class GetAllOffresActionError implements Action{
  type: OffresActionsTypes=OffresActionsTypes.GET_ALL_OFFRES_ERROR;
  constructor(public payload:string) {
  }
}


export class GetAllEmploysAction implements Action{
  type: EmploysActionsTypes=EmploysActionsTypes.ALL_EMPLOYS;
  constructor(public payload:any) {
  }
}

export class GetAllEmploysActionSuccess implements Action{
  type: EmploysActionsTypes=EmploysActionsTypes.ALL_EMPLOYS_SUCCESS;
  constructor(public payload:Employ[]) {
  }
}

export class GetAllEmploysActionError implements Action{
  type: EmploysActionsTypes=EmploysActionsTypes.ALL_EMPLOYS_ERROR;
  constructor(public payload:string) {
  }
}

/* Get Selected Offres Actions*/

export class GetSelectedOffresAction implements Action{
  type: OffresActionsTypes=OffresActionsTypes.GET_SELECTED_OFFRES;
  constructor(public payload:any) {
  }
}

export class GetSelectedOffresActionSuccess implements Action{
  type: OffresActionsTypes=OffresActionsTypes.GET_SELECTED_OFFRES_SUCCESS;
  constructor(public payload:Offre[]) {
  }
}

export class GetSelectedOffresActionError implements Action{
  type: OffresActionsTypes=OffresActionsTypes.GET_SELECTED_OFFRES_ERROR;
  constructor(public payload:string) {
  }
}

/* Search Offres Actions*/

export class SearchOffresAction implements Action{
  type: OffresActionsTypes=OffresActionsTypes.SEARCH_OFFRES;
  constructor(public payload:any) {
  }
}

export class SearchOffresActionSuccess implements Action{
  type: OffresActionsTypes=OffresActionsTypes.SEARCH_OFFRES_SUCCESS;
  constructor(public payload:Offre[]) {
  }
}

export class SearchOffresActionError implements Action{
  type: OffresActionsTypes=OffresActionsTypes.SEARCH_OFFRES_ERROR;
  constructor(public payload:any) {
  }
}

/* Delete Offres Actions*/

export class DeleteOffresAction implements Action{
  type: OffresActionsTypes=OffresActionsTypes.DELETE_OFFRES;
  constructor(public payload:Offre) {
  }
}

export class DeleteOffresActionSuccess implements Action{
  type: OffresActionsTypes=OffresActionsTypes.DELETE_OFFRES_SUCCESS;
  constructor(public payload:Offre) {
  }
}

export class DeleteOffresActionError implements Action{
  type: OffresActionsTypes=OffresActionsTypes.DELETE_OFFRES_ERROR;
  constructor(public payload:any) {
  }
}

/* new Offres Actions*/

export class NewOffresAction implements Action{
  type: OffresActionsTypes=OffresActionsTypes.NEW_OFFRES;
  constructor(public payload:any) {
  }
}

export class NewOffresActionSuccess implements Action{
  type: OffresActionsTypes=OffresActionsTypes.NEW_OFFRES_SUCCESS;
  constructor(public payload:any) {
  }
}

export class NewOffresActionError implements Action{
  type: OffresActionsTypes=OffresActionsTypes.NEW_OFFRES_ERROR;
  constructor(public payload:any) {
  }
}

/* save Offres Actions*/

export class SaveOffresAction implements Action{
  type: OffresActionsTypes=OffresActionsTypes.SAVE_OFFRES;
  constructor(public payload:Offre) {
  }
}

export class SaveOffresActionSuccess implements Action{
  type: OffresActionsTypes=OffresActionsTypes.SAVE_OFFRES_SUCCESS;
  constructor(public payload:Offre) {
  }
}

export class SaveOffresActionError implements Action{
  type: OffresActionsTypes=OffresActionsTypes.SAVE_OFFRES_ERROR;
  constructor(public payload:any) {
  }
}


/* Edit Offres Actions*/

export class EditOffresAction implements Action{
  type: OffresActionsTypes=OffresActionsTypes.EDIT_OFFRES;
  constructor(public payload:number) {
  }
}

export class EditOffresActionSuccess implements Action{
  type: OffresActionsTypes=OffresActionsTypes.EDIT_OFFRES_SUCCESS;
  constructor(public payload:Offre) {
  }
}

export class EditOffresActionError implements Action{
  type: OffresActionsTypes=OffresActionsTypes.EDIT_OFFRES_ERROR;
  constructor(public payload:any) {
  }
}
/* update Offres Actions*/

export class UpdateOffresAction implements Action{
  type: OffresActionsTypes=OffresActionsTypes.UPDATE_OFFRES;
  constructor(public payload:Offre) {
  }
}

export class UpdateOffresActionSuccess implements Action{
  type: OffresActionsTypes=OffresActionsTypes.UPDATE_OFFRES_SUCCESS;
  constructor(public payload:Offre) {
  }
}

export class UpdateOffresActionError implements Action{
  type: OffresActionsTypes=OffresActionsTypes.UPDATE_OFFRES_ERROR;
  constructor(public payload:any) {
  }
}

export type OffresActions=
    GetAllOffresAction | GetAllOffresActionSuccess | GetAllOffresActionError
    | SearchOffresAction | SearchOffresActionSuccess | SearchOffresActionError
    | DeleteOffresAction | DeleteOffresActionSuccess | DeleteOffresActionError
    | EditOffresAction | EditOffresActionSuccess | EditOffresActionError
    | NewOffresAction | NewOffresActionSuccess | NewOffresActionError
    | SaveOffresAction | SaveOffresActionSuccess | SaveOffresActionError
    | UpdateOffresAction | UpdateOffresActionSuccess | UpdateOffresActionError
   
    ;

    
    export type EmploysActions=
    | GetAllEmploysAction | GetAllEmploysActionSuccess | GetAllEmploysActionError
    ;