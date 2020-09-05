'use strict';
const bcrypt = require('bcryptjs')
const { User } = require('../models')

module.exports = {
  up: async (queryInterface, _) => {
    // Create user
    const password = await bcrypt.hash('123456', 6)
    await User.create({
        username: 'john',
        email: 'john@email.com',
        imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
        password
    })
    await User.create({
      username: 'jane',
      email: 'jane@email.com',
      imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2190&q=80',
      password
    })
    await User.create({
      username: 'boss',
      email: 'boss@email.com',
      imageUrl: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
      password
    })
    // return queryInterface.bulkInsert('Users', [
    //   {
    //     username: 'john',
    //     email: 'john@email.com',
    //     password: bcrypt.hashSync('123456', 6),
    //     createdAt: new Date('2018-07-03 13:00:50'),
    //     updatedAt: new Date('2018-07-03 13:00:50'),
    //   },
    //   {
    //     username: 'jane',
    //     email: 'jane@email.com',
    //     password: bcrypt.hashSync('123456', 6),
    //     createdAt: new Date('2019-07-03 13:00:50'),
    //     updatedAt: new Date('2019-07-03 13:00:50'),
    //   },
    //   {
    //     username: 'user',
    //     email: 'user@email.com',
    //     password: bcrypt.hashSync('123456', 6),
    //     createdAt: new Date('2020-07-03 13:00:50'),
    //     updatedAt: new Date('2020-07-03 13:00:50'),
    //   },
    // ])
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
