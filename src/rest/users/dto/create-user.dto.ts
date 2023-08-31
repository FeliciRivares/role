import { DtoProperty, DtoPropertyOptional } from "src/shared"

export class CreateUserDto {
    @DtoPropertyOptional()
    email: string

    @DtoPropertyOptional()
    password: string 
}

