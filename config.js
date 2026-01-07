// config.js
module.exports = {
    // Bot Settings
    PREFIX: process.env.BOT_PREFIX || '.',
    MODE: process.env.BOT_MODE || 'public', // 'self' or 'public'
    BOT_NAME: process.env.BOT_NAME || '𝑄𝑢𝑒𝑒𝑛 𝑑𝑎𝑛𝑖 𝑉8',
    VERSION: process.env.BOT_VERSION || '8.0.0',
    BOT_FOOTER: process.env.BOT_FOOTER || 'Muahhh',
    
    // Connection Settings
    MAX_RETRIES: parseInt(process.env.MAX_RETRIES) || 3,
    OTP_EXPIRY: parseInt(process.env.OTP_EXPIRY) || 300000,
    
    // Status Automation
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'true', // true / false
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'true', // true / false
    AUTO_RECORDING: process.env.AUTO_RECORDING || 'true', // true / false
    AUTO_LIKE_EMOJI: ['💋', '🍬', '🫆', '💗', '🎈', '🎉', '🥳', '❤️', '🧫', '🐭'],
    
    // Group Settings
    GROUP_INVITE_LINK: process.env.GROUP_INVITE_LINK || '',
    
    // File Paths
    ADMIN_LIST_PATH: process.env.ADMIN_LIST_PATH || './admin.json',
    SESSION_BASE_PATH: process.env.SESSION_BASE_PATH || './session',
    NUMBER_LIST_PATH: process.env.NUMBER_LIST_PATH || './numbers.json',
    
    // Media URLs
    RCD_IMAGE_PATH: process.env.RCD_IMAGE_PATH || '', // add your bot url
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || '', //add ur bot url
    
    // Newsletter Settings
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363377534493877@newsletter',
    NEWSLETTER_MESSAGE_ID: process.env.NEWSLETTER_MESSAGE_ID || '428',
    
    // Owner Settings
    OWNER_NUMBER: process.env.OWNER_NUMBER || '2348054671458', // ᴀᴅᴅ ʏᴏᴜʀ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ
    OWNER_NAME: process.env.OWNER_NAME || 'Dev Damini†', // ᴀᴅᴅ ʏᴏᴜʀ ᴏᴡɴᴇʀ ɴame
    
    // Channel Links
    CHANNEL_LINK: process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/0029VazHPYwBqbr9HjXrc50m',
    
    // GitHub Settings
    GITHUB_OWNER: process.env.GITHUB_OWNER || 'https://github.com/Nerdk-tech', //add your github username boss
    GITHUB_REPO: process.env.GITHUB_REPO || 'https://github.com/Nerdk-tech/QUEEN-DANI-V8', // add your github repo name
    GITHUB_TOKEN: process.env.GITHUB_TOKEN || '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', //add your github token
    
    // API Keys
    TIKTOK_API_KEY: process.env.TIKTOK_API_KEY || 'free_key@maher_apis',
    NASA_API_KEY: process.env.NASA_API_KEY || '8vhAFhlLCDlRLzt5P1iLu2OOMkxtmScpO5VmZEjZ',
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || '2d61a72574c11c4f36173b627f8cb177'
};