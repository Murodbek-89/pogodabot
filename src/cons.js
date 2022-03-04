const cons = {
  chatId(msg) {
    return msg.from.id;
  },
  text(msg) {
    return msg.text;
  },
  names(msg) {
    return msg.from.first_name;
  },
};

module.exports = cons;
