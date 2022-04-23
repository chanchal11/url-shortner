const app = require('./src/app');
const db = require('./src/data');

async function connectDb(){
    console.log('checking db connection ...');
    try {
        await db.authenticate();
        console.log('db connected.');
    } catch (error) {
        console.log('db not connected.');
        console.log(error.message);
        process.exit(1);
    }
}

async function main(){
    await connectDb();
    app.listen(process.env.PORT || 8080, () => {
        console.log(`API Server started on ${process.env.PORT || 8080}`);
    });
}

main();