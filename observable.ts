import {of, scheduled, asyncScheduler, Observable} from "rxjs";

// async
export function observable() {

	const asyncSecret: Observable<any> = scheduled(of("secret"), asyncScheduler);

	console.log("Before calling the secret$ subscribe method");

	asyncSecret.subscribe(console.log);

	console.log("After calling the secret$ subscribe method");
}

