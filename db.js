const mongoose = require('mongoose');
require('dotenv').config('./env')
const db = process.env.MONGOURL;
const connectDb = async () => {
	console.log(db);
	try {
		await mongoose.connect(db, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log('MongodbConnected');
	} catch (error) {
		console.log(error.message);
		//Exit process
		process.exit(1);
	}
};
module.exports = connectDb;