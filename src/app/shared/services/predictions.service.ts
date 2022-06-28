import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  private httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred while fetching the list of employees', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPrediction() {
  
    var modelData = {
      "prediction":"False"
    }
    var url1 = 'https://oahoaa5yg4.execute-api.us-west-1.amazonaws.com/dev/prediction'
    return this.httpClient
      .post(url1, modelData, this.httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getValidationData(){
    
    var url2 = 'https://s81urjag6k.execute-api.us-west-1.amazonaws.com/default/myfunct'
    var bucketName = 'seappbucket1'
    var validation = 'sagemaker/data_dictionary/validation/validation.csv'
    return this.httpClient.get(
      url2 + '?Bucket=' + bucketName + '&Key=' + validation
    )
      .pipe(
            map((response: any)=>{
              return response;
            }),
            catchError(this.handleError)
      );
  };

  getDataTypeFormattedForDownload(data) {

    let fData = data.slice();
    
    fData.forEach((obj, ind) => {
      if( obj instanceof Array ) {
        obj.forEach((val, vInd) => {
          obj[vInd] = this.getNumberFormat( val );
        });
      } else if( obj instanceof Object ) {
          for(let key in obj) {
            obj[key] = this.getNumberFormat( obj[key] );
          }
      } else {
          fData[ind] = this.getNumberFormat( obj );

      }
    });

    return fData;
  }

  getNumberFormat(str){
    let regex = new RegExp('^[-]{0,1}[0-9]+[.]{0,1}[0-9]*$');
    let fStr = str;
    if( regex.test(str) ) {
      if( !isNaN( parseFloat(str) ) ) {
        fStr = parseFloat(str);
      }
    }
    return fStr;
  }







}
