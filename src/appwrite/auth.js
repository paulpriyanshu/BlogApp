import config from "../config/config";
import { Client,Account,ID } from "appwrite";

export class AuthService{

    client=new Client();
    

    constructor(){
        this.client.setEndpoint(config.appwriteurl)
        this.client.setProject(config.projectid)
        this.account=new Account(this.client)
    
    }

    async createAccount({email,password,name}){
        try{
            const user=await this.account.create(ID.unique(),email,password,name)
            if(user){
                return this.login({email,password})
            }else{
                return user
            }

        }catch(err){
            throw err
        }

    }

    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password)

        }catch(err){
            throw err
        }
        return null
    }

    async logout(){
        try{
            return await this.account.deleteSessions()

        }catch(err){
            throw err
        }

    }
    async checkcurrentuser(){
        try{
            const currentuser=await this.account.get()
            console.log(currentuser)
        }catch(err){
            throw err
        }
        return null
        
    }

    // async forgetpw(){

    // }

    
    
}
const authService = new AuthService()

export default authService

