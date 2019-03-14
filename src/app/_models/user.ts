export class User{
    public username: String;
    public password: String;
    public email: String;
    public type: String;

    constructor(username: String, password:String, email : String, type:String  ){
           this.username=username;
           this.password=password;
           this.email=email;
           this.type=type;
    }
    
}