import {Offre} from '../model/offre.model';
import {OffresActions, OffresActionsTypes} from './offres.actions';
import {Action} from '@ngrx/store';

export enum ProductsStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  NEW = "NEW",
  EDIT="EDIT",
  UPDATED="UPDATED"
}
export interface ProductsState{
    products:Offre[],
    errorMessage:string,
    dataState:ProductsStateEnum
    currentProduct : Offre | null
}

const initState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL,
  currentProduct : null,
}

export function productsReducer(state=initState, action:Action):ProductsState {
  switch (action.type) {
    case OffresActionsTypes.GET_ALL_OFFRES:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case OffresActionsTypes.GET_ALL_OFFRES_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<OffresActions>action).payload}
    case OffresActionsTypes.GET_ALL_OFFRES_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    /* Get Selected Products*/
    case OffresActionsTypes.GET_SELECTED_OFFRES:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case OffresActionsTypes.GET_SELECTED_OFFRES_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<OffresActions>action).payload}
    case OffresActionsTypes.GET_SELECTED_OFFRES_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    /* Search Products*/
    case OffresActionsTypes.SEARCH_OFFRES:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case OffresActionsTypes.SEARCH_OFFRES_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<OffresActions>action).payload}
    case OffresActionsTypes.SEARCH_OFFRES_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    
      /* Delete Products*/
    case OffresActionsTypes.DELETE_OFFRES:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case OffresActionsTypes.DELETE_OFFRES_SUCCESS:
      let p : Offre = (<OffresActions>action).payload
      let index=state.products.indexOf(p);
      let productslist =[...state.products];
      productslist.splice(index,1);
      return {...state, dataState:ProductsStateEnum.LOADED, products:productslist}
    case OffresActionsTypes.DELETE_OFFRES_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    
      /* New Products*/
    case OffresActionsTypes.NEW_OFFRES:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case OffresActionsTypes.NEW_OFFRES_SUCCESS:
      return {...state, dataState:ProductsStateEnum.NEW}
    case OffresActionsTypes.NEW_OFFRES_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    
      /* save Products*/
    case OffresActionsTypes.SAVE_OFFRES:
      return {...state, dataState:ProductsStateEnum.LOADING }
       case OffresActionsTypes.SAVE_OFFRES_SUCCESS:
        let pros: Offre[]=[...state.products];
        pros.push((<OffresActions>action).payload); 
      return {...state, dataState:ProductsStateEnum.LOADED, products:pros}
    case OffresActionsTypes.SAVE_OFFRES_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    

       /* Edit Products*/
    case OffresActionsTypes.EDIT_OFFRES:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case OffresActionsTypes.EDIT_OFFRES_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED,currentProduct:(<OffresActions>action).payload }
    case OffresActionsTypes.EDIT_OFFRES_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    
       /* UPDATE Products*/
    case OffresActionsTypes.UPDATE_OFFRES:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case OffresActionsTypes.UPDATE_OFFRES_SUCCESS:
      let updtaedprod : Offre = (<OffresActions>action).payload;
      let listproducts = state.products.map(p=>(p.id==updtaedprod.id)?updtaedprod:p);
      return {...state, dataState:ProductsStateEnum.UPDATED,products : listproducts }
    case OffresActionsTypes.UPDATE_OFFRES_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    
      default : return {...state}
  }
}
