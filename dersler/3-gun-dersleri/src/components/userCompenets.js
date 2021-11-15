import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/loging/logger.js";
import User from "../models/user.js";

import UserService from "../services/userService.js";

let logger1=  new BaseLogger()


let userService = new UserService(logger1)

let user1 = new User(1,"hakan","korkmaz","sakarya");

let user2 = new User(2,"alp","arto","Istanbul");



userService.add(user1)

userService.add(user2)

console.log(userService.list())

console.log(userService.getById(1))


let customer = { id: 1, firstName: "Hakan" }