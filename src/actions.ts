import { Point } from "./types";

export const BEGIN_STROKE = 'BEGIN_STROKE';
export const UPDATE_STROKE = 'UPDATE_STROKE';
export const END_STROKE = 'END_STROKE';
export const SET_STOKE_COLOR = 'SET_STOKE_COLOR';


export type Action = 
| { type:typeof BEGIN_STROKE, payload:Point}
| { type:typeof UPDATE_STROKE, payload:Point}
| { type:typeof END_STROKE}
| { type:typeof SET_STOKE_COLOR, payload:string}


export const setStrokeColor = (color:string) => {
    return {type: SET_STOKE_COLOR, payload:color}
}

export const beginStroke = (x:number, y:number) => {
    return {type: BEGIN_STROKE, payload:{x, y}}
}

export const updateStroke = (x:number, y:number) => {
    return {type: UPDATE_STROKE, payload:{x, y}}
};



export const endStroke = (x:number, y:number) => {
    return {type: END_STROKE};
}
