import mongoose from "mongoose";

class DB {
    constructor(uri) {
        this.uri = uri
    }

    async connect() {
        try {
            await mongoose.connect(this.uri)
            console.log("DB Connected");
        } catch (error) {
            console.log("DB Error", error);
        }
    }
}


export default DB;