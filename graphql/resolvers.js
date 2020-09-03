const bcrypt = require('bcryptjs')
const { UserInputError } = require('apollo-server')

const { User } = require('../models')

module.exports = {
    Query: {
        getUsers: async () => {
            try {
                const users = await User.findAll()

                return users;
            } catch(err) {
                console.log(err)
            }
        },
    },
    Mutation: {
        register: async (_, args) => {
            let { username, email, password, confirmPassword } = args;
            let errors = {}
            try {
                if (email.trim() === '') errors.email = 'email must not be empty'
                if (username.trim() === '') errors.username = 'username must not be empty'
                if (password.trim() === '') errors.password = 'password must not be empty'
                if (confirmPassword.trim() === '') errors.confirmPassword = 'confirmPassword must not be empty'
                if (password !== confirmPassword) errors.confirmPassword = 'passwords must match'
                
                // const userByUsername = await User.findOne({ where: { username }})
                // const userByEmail = await User.findOne({ where: { email }})
                // if (userByUsername) errors.username = 'Username is taken'
                // if (userByEmail) errors.email = 'Email is taken'

                if(Object.keys(errors).length > 0) {
                    throw errors;
                }

                // TODO: Hash password
                password = await bcrypt.hash(password, 6)

                // TODO: Create user
                const user = await User.create({
                    username, email, password
                })
                
                // TODO: Return user
                return user
            } catch(err) {
                console.log(err);
                if (err.name === 'SequelizeUniqueConstraintError') {
                    err.errors.forEach((e) => (errors[e.path] = `${e.path} is already taken`))
                } else if (err.name === 'SequelizeValidationError') {
                    err.errors.forEach((e) => errors[e.path] = e.message)
                }
                throw new UserInputError('Bad input', { errors });
            }
        }
    }
};
