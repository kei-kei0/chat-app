'use strict';

const { Message } = require('../models')

module.exports = {
  up: async () => {
      await Message.create({
        from: 'john',
        to: 'jane',
        content: 'Hi jane, whats up?',
      })
      await Message.create({
        from: 'jane',
        to: 'john',
        content: 'Good',
      })
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Messages', null, {});
  }
};
