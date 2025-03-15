import { Observable } from 'rxjs';

//TODO: "subscriber" permite emitir valores a quien este subcrito
export const getNumbers = new Observable(subscriber => {
    //Emitimos valores:
    subscriber.next(1); //Se emite 1ro
    subscriber.next(2); //Se emite 2do
    subscriber.next(3); //Se emite 3ro
    setTimeout(() => {
        subscriber.next(4); //Se emite 4to
        subscriber.complete(); //Finaliza, el Observable se completa y finaliza
    }, 1000);
});