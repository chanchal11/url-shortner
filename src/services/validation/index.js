const validateShortcodeByClient = (shortcode) => {
    return /^[0-9a-zA-Z_]{4,}/.test(shortcode); 
}   

const validateShortcodeByUs = (shortcode) => {
    return /^[0-9a-zA-Z_]{6,}/.test(shortcode); 
}

const validateURL = (url) => {
    // impement this in future
    return true;
}

module.exports = { validateShortcodeByClient, validateShortcodeByUs, validateURL };