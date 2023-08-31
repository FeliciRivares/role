import { RestUserModule } from "./users/users.module";


export const REST_MODULE = () => [
    RestUserModule.forRoot()
]