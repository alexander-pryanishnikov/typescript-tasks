import {observable} from "./observable";
import {event_loop} from "./event-loop";
import {async} from "./async/async"
import {promise} from "./promise"

async function main() {
	await event_loop()
	await async()
	await promise()
	await observable()
}

main()
