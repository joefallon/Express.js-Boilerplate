const config = {
    port:           3030,
    cookie_secret:  'keyboard cat secret',
    session_maxage: 24 * 60 * 60 * 1000, // 24 hours
    listen_ip:      '127.0.0.1'
};

export = config;