import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpservService } from './httpserv.service';

@Injectable({
  providedIn: 'root'
})
export class PrefetchResolver implements Resolve<string> {

  constructor(private httpServ: HttpservService) {};

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return this.httpServ.funcResolve();
  }
}
