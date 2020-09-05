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
        password
    })
    await User.create({
      username: 'jane',
      email: 'jane@email.com',
      password
    })
    await User.create({
      username: 'user',
      email: 'user@email.com',
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
