module.exports = {
  inbtn: [[{ text: 'Joylashgan shahringiz', callback_data: 'manzil' }]],
  kbbtn: [
    [
      { text: 'Toshkent', callback_data: 'toshkent' },
      { text: 'Jizzax', callback_data: 'jizzax' },
      { text: 'Sirdaryo', callback_data: 'guliston' },
    ],
    [
      { text: 'Andijon', callback_data: 'andijon' },
      { text: 'Namangan', callback_data: 'namangan' },
      { text: "Farg'ona", callback_data: 'fargona' },
    ],
    [
      { text: 'Samarqand', callback_data: 'samarqand' },
      { text: 'Qashqadaryo', callback_data: 'qarshi' },
      { text: 'Surxandaryo', callback_data: 'termiz' },
    ],
    [
      { text: 'Buxoro', callback_data: 'buxoro' },
      { text: 'Navoiy', callback_data: 'navoiy' },
      { text: 'Xorazm', callback_data: 'urganch' },
    ],
    [{ text: "Qoraqolpog'iston", callback_data: 'nukus' }],
  ],
  btn: {
    reply_markup: {
      one_time_keyboard: true,
      resize_keyboard: true,
      selective: true,
      keyboard: [['BUGUNGI', 'ERTANGI']],
    },
  },
};
