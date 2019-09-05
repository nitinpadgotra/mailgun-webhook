{
    "commonConfig";
    {
    }
    "local";
    {
        "host";
        'localhost',
            "port";
        3000,
            "protocol";
        'http',
            "siteUrl";
        'localhost:3000',
            "apiUrl";
        'localhost:3005',
            "mailGunApiKey";
        '4167c382-ebd1bf09',
            "db";
        {
            "port";
            27017,
                "options";
            {
                "useNewUrlParser";
                true;
            }
            "name";
            'mailgun_webhooks',
                "url";
            'mongodb://localhost:27017/mailgun_webhooks',
                "host";
            'localhost',
                "auth";
            false,
                "username";
            '',
                "password";
            '';
        }
    }
    /**
     * Configuration for staging server
     */
    "staging";
    { }
    /**
     * Configuration for production server
     */
    "production";
    { }
}
//# sourceMappingURL=app.js.map