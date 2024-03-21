import mongoose from "mongoose";

class DB {
    constructor(uri) {
        this.uri = uri
    }

    async connect() {
        try {
            const conn = await mongoose.connect(this.uri, {
                dbName: process.env.DB_NAME
            })
            console.log(`DB Connected ${conn.connection.host}`);
        } catch (error) {
            console.log("DB Error", error);
            process.exit(1)
        }
    }
}


export default DB;