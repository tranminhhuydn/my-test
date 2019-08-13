module.exports = {
    mysql: {
        host: process.env.MYSQL_ADDON_HOST,
        user: process.env.MYSQL_ADDON_USER,
        password: process.env.MYSQL_ADDON_PASSWORD,
        database: process.env.MYSQL_ADDON_DB,
        // 最大连接数，默认为10
        connectionLimit: 10
    }
};
