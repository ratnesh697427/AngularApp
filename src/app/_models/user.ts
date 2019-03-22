export class User{
    public userId : number;
    public name : String;
    public username: String;
    public password: String;
    public email: String;
    public status: String;

    constructor(userId:number, name:String, email : String,username: String, password:String, status:String  ){
           this.userId=userId;
           this.name=name;
           this.username=username;
           this.password=password;
           this.email=email;
           this.status=status;
    }

}
