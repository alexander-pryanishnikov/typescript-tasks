export function eventLoop(): void {

	console.log('A');

	// Уйдет в очередь, поэтому выполнится последним(не смотря на то, что у него 0 сек. задержки)
	setTimeout(function exec() {

		console.log('B');

	}, 0);

	runLoop(3);
	console.log('C');

}

function runLoop(seconds: number): void {

	const start: number = Date.now();
	let now = start;

	// Блокирует поток и проходит без очереди
	while (now - start < seconds * 1000) {

		now = Date.now();

	}
}
