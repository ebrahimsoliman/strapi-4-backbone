'use strict';

/**
 * A set of functions called "actions" for `zoom-sign`
 */

module.exports = {
  zoomsign: async (ctx,
                   next) => {
    try {
      const crypto = require('crypto') // crypto comes with Node.js

      function generateSignature(apiKey,
                                 apiSecret,
                                 meetingNumber,
                                 role) {
        console.log()
        // Prevent time sync issue between client signature generation and zoom
        const timestamp = new Date().getTime() - 30000
        const msg       = Buffer.from(apiKey + meetingNumber + timestamp + role)
                                .toString('base64')
        const hash      = crypto.createHmac('sha256',
                                            apiSecret)
                                .update(msg)
                                .digest('base64')
        const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`)
                                .toString('base64')

        return signature
      }


      ctx.body = generateSignature("f0r8F-zARRyMbNTJGUxNkg",
                                   "0OwZyoL6ICzaZ3WCKFNlHyArewsYmY17WqBl",
                                   94569876993,
                                   1);
      console.log(ctx.body)
    }
    catch (err) {
      ctx.body = err;
    }
  }
};
