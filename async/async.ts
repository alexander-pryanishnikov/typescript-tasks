import * as fs from 'fs'
import {User} from "./model/User";


let user: User = new User();

user.message = fs.readFileSync('fact.json', 'utf8');
user.name = "Alexander";
user.age = 33;

user.print()





