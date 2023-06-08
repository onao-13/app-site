/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.mds.yandex.net',
                port: ''
            }
        ]
    }
}

const path = require('path');
module.exports = {
    sassOptions: {
        includePath: [path.join(__dirname, 'styles')],    
    },
};

module.exports = nextConfig
