'use strict';
const express = require('express');

const server = express();

server.all("/check", (req, res) => {
  res.send("Bot is running");
});

server.listen(3000, () => {
  console.log("Server is ready");
});


// Why can't I put this in its own file?????

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
