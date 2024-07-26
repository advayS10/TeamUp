import conf from '../conf/conf'
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class AppwriteService {
    client = new Client()
    databases
    bucket

    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId)
        
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createEvent({sport, location, date, total_players, time, user_id, user_name, players_joined}){
        try {
            const event_id = ID.unique
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                event_id,
                {
                    sport,
                    location,
                    date,
                    total_players,
                    time,
                    user_id,
                    user_name,
                    players_joined
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createEvent :: error", error)
        }
    }

    async updateEvent(event_id, {sport, location, date, total_players, time, user_id, user_name, players_joined}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                event_id,
                {
                    sport,
                    location,
                    date,
                    total_players,
                    time,
                    user_id,
                    user_name,
                    players_joined
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updateEvent :: error", error)
        }
    }
    
    async getEvent(event_id){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                event_id
            )
        } catch (error) {
            console.log("Appwrite Service :: getEvent :: error", error)
        }
    }

    async getEvents(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            )
        } catch (error) {
            console.log("Appwrite Service :: getEvents :: error", error)
            return false
        }
    }
    
}