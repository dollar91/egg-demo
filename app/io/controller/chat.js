// module.exports = app => {
//     class Controller extends app.Controller {
//       async ping() {
//         const message = this.ctx.args[0];
//         await this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
//       }
//       async disconnect() {
//         const message = this.ctx.args[0];
//         console.log(message);
//       }
//     }
//     return Controller
//   };
// 将收到的消息发送给客户端
module.exports = app => {
    return function* () {
      const self = this;
      const message = this.args[0];
      console.log('chat 控制器打印', message);
      this.socket.emit('res', `Hi! I've got your message: ${message}`);
    };
  };
  
/**
 * Created by bear on 2018/2/12.
 */
// module.exports = app => {
//     class chatController extends app.Controller {
//         async index() {
//         this.ctx.socket.emit('res', 'test');
//         }
//         async message() { //方法通过 客户端 this.emit（'message',{}）//触发
//         this.ctx.socket.emit('message', 'test');
//         const params = this.ctx.args[0];
//         // this.ctx.service.message.sendPeerMessage(params);
//         console.log(2,params);
//         }
//         async online() {// modelMessage.sendOfflineMessage(socket, data.userId);
//         }
//     }
//     return chatController;
// };