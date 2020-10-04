import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any){
    let errorMessage: string
    if (error instanceof HttpHeaderResponse){
      const body = error
      
      errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
   

    }else{
      errorMessage = error.message ? error.message : error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)
  }
}