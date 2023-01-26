export class User{
    email: string = '';
    password: string = '';
    logged : boolean = false;

    constructor(email: string, password : string){
        this.email = email;
        this.password = password;
        
    }

    loginUser(){
        this.logged = true;
    }

    logoutUser(){
        this.logged = false;
    }

}