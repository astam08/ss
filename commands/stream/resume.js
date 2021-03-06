module.exports = class Resume {
  static action(self, speak = true) {
    const voiceChannel = self.getVoiceChannel(false);
    if (voiceChannel && voiceChannel.connection && voiceChannel.connection.dispatcher) {
      if (voiceChannel.connection.dispatcher.paused) {
        voiceChannel.connection.dispatcher.resume();
      } else if (speak) {
        self.message.reply('DILANJUTKAN▶️');
      }
    } else if (speak) {
      self.message.reply('▶️');
    }
  }
};
