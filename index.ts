import {observable} from "./observable";
import {eventLoop} from "./event-loop";
import {async} from "./async/async"
import {promise} from "./promise"

async function main() {
	await eventLoop();
	await async();
	await promise();
	await observable();
}

main().then(process.exit());
