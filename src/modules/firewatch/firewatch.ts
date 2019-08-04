import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

const eventStore: Map<string, ReplaySubject<any>> = new Map();

export function fire(eventName: string, payload?: object): void {
  const subject = getSubject(eventName);
  subject.next(payload);
  subject.complete();
}

export function watch(eventName: string): Promise<any> {
  return getSubject(eventName).pipe(take(1)).toPromise();
}

function getSubject(eventName: string): ReplaySubject<any> {
  const subject = eventStore.get(eventName) || new ReplaySubject(1);

  eventStore.has(eventName) || eventStore.set(eventName, subject);

  return subject;
}
