import { AbstractControl } from "@angular/forms";

export class IdValidators{
public static isValidIsraeliID(control: AbstractControl): {[key:string]: any} | null {
    if(control.value == undefined )
    return null
    var id = control.value.trim();

   // if (id.length > 9 || id.length < 5 || !!id) return null;

    // Pad string with zeros up to 9 digits
    id = id.padStart(9,'0')

    let  a = Array
      .from(id, Number)
      .reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }) % 10 === 0;
      if(a ==true){
        return null
      }
      return {'id': 'true'}
  }
}
