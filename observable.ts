import {of, scheduled, asyncScheduler, Observable} from "rxjs";

export function observable() {
	const asyncSecret$: Observable<any> = scheduled(of("secret"), asyncScheduler); // async

	console.log("Before calling the secret$ subscribe method");

	asyncSecret$.subscribe(console.log);

	console.log("After calling the secret$ subscribe method");
}

