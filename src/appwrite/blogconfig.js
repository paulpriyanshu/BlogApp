import config from "../config/config";
import { Client,Account,ID,Databases} from "appwrite";

export class Database{
    client=new Client;
    database;
    bucket;
    constructor(){
        this.client.setEndpoint(config.appwriteurl)
        this.client.setProject(config.projectid)
        this.database=new Databases(this.client)
        // this.collection=new Collection(this.client)
        this.bucket=new Bucket(this.client)
        
    }
    async createDatabase({title,slug,content,image,status,userID}){
        try{
            const db=await this.database.createDocument(config.dbid,config.collectionid,slug,{
                title,
                content,
                image,
                status,
                userID
            })
            if(db){
                return db
            }else{
                return null
            }

        }catch(err){

        }

    }
    async updateDocument(slug,{title,content,image,status,userID}){
        try{
            const db=await this.database.updateDocument(config.dbid,config.collectionid,slug,{
                title,
                content,
                image,
                status,
                userID
            })
            if(db){
                return db
            }else{
                return null
            }
        }catch(err){
            throw err
        }
    }

    async deldocument(slug){
       try{
        return await this.database.deleteDocument(config.dbid,config.collectionid,slug)
        return true
       }catch(err){
            throw err
            return false
       }
        

    }

    async getDocument(slug){
        try{
            const db=await this.database.getDocument(config.dbid,config.collectionid,slug)
            if(db){
                return db
            }else{
                return null
            }
        }catch(err){
            throw err
        }
    }

    async getAllDocuments(queries=[Query.equal("status","active")]){
        try{
            return await this.database.listDocuments(config.dbid,config.collectionid,queries)
        }catch(err){
            throw err
        }
    }
    async uploadDocuments(file){
        try{
            return await this.bucket.createFile(config.bucketid,ID.unique(),file)

        }catch(err){
            throw err
        }
    }
    async deletefiles(fileID){
        try{

            await this.bucket.deleteFile(
                config.bucketid,
                fileID
            )
            return true
        }catch(err){
            throw err
        }

    }

    async getfile(fileID){
        try{
            return this.getFilePreview(
                config.bucketid,
                fileID
            )
        }catch(err){
            throw err
        }
    }

}

const dbservices=new Database()

export default dbservices