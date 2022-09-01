import mongoose from "mongoose";
const db = () => {
    try {
        mongoose.connect(process.env.URL_MONGO);
        console.log('connect database success');
    } catch (error) {
        console.log('connect database failed');
    }
}
export default db;