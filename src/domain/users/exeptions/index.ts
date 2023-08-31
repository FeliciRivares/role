import { ExceptionKeys } from "src/shared/enums";
import { DomainException } from "src/shared/exceptions";


export class UserAlreadyExistsException extends DomainException {
	constructor(description = 'User already exists') {
		super({ description, key: ExceptionKeys.UserAlreadyExists })
	}
}