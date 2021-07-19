import { IChild } from "./IChild";

export interface IPerson{
    firstName:string ;
    LastName:string;
    ID:string ;
    birthDate:string ;
    kind:string  ;
    HMO:string  ;
    Children:IChild[];
}