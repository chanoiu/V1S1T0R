function generateToken(length = 32) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < length; i++) {
        const randomIndex  Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
    }

    return token;
}

// Example usage:
const token = generateToken();
console.log('Generated Token:', token);