import dotenv from "dotenv";

dotenv.config({
    path: new URL("../"+process.env.NODE_ENV, import.meta.url)
});

const variables= {
    EXPRESS_HOST: process.env.EXPRESS_HOST,
    EXPRESS_PORT: process.env.EXPRESS_PORT,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: process.env.MYSQL_PORT, 
    MYSQL_DB: process.env.MYSQL_DB,   
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    TOKEN_SECRETO: process.env.TOKEN_SECRETO
};

export {variables}