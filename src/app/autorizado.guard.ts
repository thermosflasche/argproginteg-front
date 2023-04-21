import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const estaAut = () => {
  const ruta = inject(Router);
  if (localStorage.getItem("u")||"".startsWith("Bearer ")){
    return true;
  }
  return ruta.parseUrl('/login');
}
//export default class AutorizadoGuard implements CanActivate {
//  constructor(private ruta:Router){}
//  canActivate(
//    route: ActivatedRouteSnapshot,
//    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//    if (localStorage.getItem("u")||"".startsWith("Bearer ")){
//      return true;
//    } else {
//      this.ruta.navigate(["/login"]);
//      return false;
//    }
//  }
//  guardia = () => {
//    const ruta = inject(Router);
//    if (localStorage.getItem("u")||"".startsWith("Bearer ")){
//      return true;
//    } else {
//      ruta.navigate(["/login"]);
//      return false;
//    }
//  }
//}
