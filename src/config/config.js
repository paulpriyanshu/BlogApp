const config={
     appwriteurl:String(import.meta.VITE_APPWRITE_URL),
     projectid:String(import.meta.VITE_APPWRITE_PROJECT_ID),
     dbid:String(import.meta.VITE_APPWRITE_DATABASE_ID),
     collectionid:String(import.meta.VITE_APPWRITE_COLLECTION_ID),
     bucketid:String(import.meta.VITE_APPWRITE_BUCKET_ID)

}

export default config