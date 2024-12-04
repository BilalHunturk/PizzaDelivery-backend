require('dotenv').config();
const bcrypt = require('bcryptjs');

const passwordSecretKey = process.env.PASSWORD_SECRET_KEY
const SALT_ROUNDS = 10;

const hashPasword = async (password) => {
    try {
        // Hash the password with the defined salt rounds
        const passwordWithSecretKey = password + passwordSecretKey;
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const res = await bcrypt.hash(passwordWithSecretKey, salt);
        return res;
    } catch (err) {
        return next(err);
    }

}

async function verifyPassword(inputPassword, storedHash) {

    // Concatenate input password with the secret key
    const passwordWithSecretKey = inputPassword + passwordSecretKey;

    // Compare the concatenated password with the stored hash
    return await bcrypt.compareSync(passwordWithSecretKey, storedHash);
}

module.exports = {hashPasword , verifyPassword}