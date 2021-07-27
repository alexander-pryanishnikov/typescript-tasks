import * as fs from 'fs';
import fetch from 'node-fetch';


export class User {
	name: string;
	age: number;
	email: string;
	message: string;

	async print() {
		try {
			const response = await fetch(`http://numbersapi.com/${Math.floor(Math.random() * 100)}`);
			if(response.status !== 200) throw new Error();
			await fs.writeFileSync('fact.json', await response.text());
		} catch (error) {
			console.log(error);
		}

		console.log(`name: ${this.name} \nage: ${this.age} \nemail: ${this.email} \nmessage: ${this.message}`);
	}

}