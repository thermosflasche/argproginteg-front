import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

// Servicio que provee el valor que se observa su cambio mientras el sitio corre
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // `visible` es el objeto que se verá, empieza en false (invisible)
  private visible:BehaviorSubject<boolean> = new BehaviorSubject(false);

  // para empezar a ver el valor
  ver(): Observable<boolean>{
    return this.visible.asObservable();
  }

  // para alternar su valor
  alternar() {
    this.visible.next(!this.visible.value);
  }
}
