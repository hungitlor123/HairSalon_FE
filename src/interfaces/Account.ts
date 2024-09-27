export interface IAccount {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    roleId: string,
    accessToken: string,
    success : boolean,
}

export interface IRegister {
    email : string,
    firstName : string,
    lastName : string,
    password : string, 
    confirmPassword: string 
}