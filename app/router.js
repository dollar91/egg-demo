'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  // 这里表示对于监听到的 chat 事件，将由 app/io/controller/chat.js 处理
  app.io.of('/').route('chat', app.io.controllers.chat);
  // app.io.route('chat', app.io.controller.chat.ping);
  // app.io.route('disconnect', app.io.controller.chat.disconnect);
  // app.io.of('/').route('chat', app.io.controller.chat.index);
  // app.io.of('/').route('message', app.io.controller.chat.message);
  // app.io.of('/').route('user:online', app.io.controller.chat.online);
  // app.io.route('chat', app.io.controller.chat.index);
  // app.io.route('disconnect', app.io.controller.chat.disconnect);
};
