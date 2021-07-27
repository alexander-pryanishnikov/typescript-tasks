import * as fs from 'fs';
import {User} from "./model/User";

export async function async() {
	let user: User = new User();

	try {
		user.message = await fs.readFileSync('fact.txt', 'utf8');
	} catch (error) {
		console.log(new Error("Файл не найден"))
	}
	user.name = "Alexander";
	user.age = 33;

	await user.print();

}





