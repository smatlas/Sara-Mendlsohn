import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {
  ConvertToCSV(obj: any, headerList: string[]) {
    const objectArray = Object.values(obj);
    let array = typeof objectArray != 'object' ? JSON.parse(objectArray) : objectArray;

    let str = '';
    let row = '';
    for (let index in headerList) {
      row += headerList[index] + ', ';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    let data = '';
    row = ''
    for (let i = 0; i < objectArray.length; i++) {
      data = data + objectArray[i] + ',';
    }

    let key = data.substring(data.indexOf('['), data.length - 3)
    key = key.substring(2)
    key = key.replace(',', ' ')
    key = key.replace(',', ' ')
    while (key.indexOf('"') != -1)
      key = key.replace('"', ' ')
    data = data.substring(0, data.indexOf('['))
    str += data + key
    return str;
  }


  downloadFile(data: any, filename = data.firstName + ' ' + data.LastName) {
    let csvData = this.ConvertToCSV(data, [
      'firstName', 'LastName', 'ID', 'birthDate', 'kind', 'HMO', 'Children']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], {
      type: 'text/csv;charset=utf-8;'
    });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);

    navigator.userAgent.indexOf('Chrome') == -1;

    //if Safari open in new window to save file with random filename.

    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
}
