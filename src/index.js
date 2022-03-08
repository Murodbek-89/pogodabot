const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
require('dotenv').config();
const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });
const commads = require('./commads');
const cons = require('./cons');
const { inbtn, kbbtn, btn } = require('./button');
const { citys, icons, htmls } = require('./pogod');

const start = () => {
  bot.setMyCommands(commads);

  //===============FunctionPogoda====================>

  const getCity = (chatId, city) => {
    axios.get(citys(city)).then(
      (resp) => {
        const { name, main, weather, wind, clouds, sys } = resp.data;
        bot.sendPhoto(chatId, icons(weather[0].icon));
        bot.sendMessage(
          chatId,
          htmls(name, main, weather[0], wind, clouds, sys),
          {
            parse_mode: 'HTML',
          }
        );
      },
      (error) => {
        console.log('error', error);
        bot.sendMessage(chatId, `Ooops...Sizda nimadur xato ketdi`);
      }
    );
  };

  //===============City=========================>

  bot.onText(/\/city/, async (msg, match) => {
    const chatId = msg.chat.id;
    const city = match.input.split(' ')[1];
    if (city === undefined) {
      await bot.sendMessage(
        chatId,
        `Bunaqa shahar yo'q qaytadan urinib ko'ring!`
      );
      return;
    }
    getCity(chatId, city);
  });

  //================Start===================>

  bot.onText(/\/start/, async (msg) => {
    const sms = `<b>Xush kelibsiz,  ${cons.names(msg)} 😉</b>\n
    <b> Siz botimizdan o'zingiznig shahringizdagi ob-havo malumotini to'liq olishingiz mumkin.Bunig uchun kerakli tugmani bosing!</b>`;
    await bot.sendMessage(cons.chatId(msg), sms, {
      reply_markup: {
        inline_keyboard: inbtn,
      },
      parse_mode: 'HTML',
    });
  });

  //===============Callback 1==============>

  bot.on('callback_query', async (msg) => {
    if (msg.data === 'manzil') {
      await bot.sendMessage(
        cons.mess(msg),
        `<b>Agar bu yerda sizning shahringiz yo'q bo'lsa unda /city komandasidan kiyin shahringinzning nomini kiriting!</b>`,
        {
          reply_markup: {
            inline_keyboard: kbbtn,
          },
          parse_mode: 'HTML',
        }
      );
    }
  });

  //==============Callback 2===============>

  bot.on('callback_query', (msg) => {
    if (msg.data === 'toshkent') {
      getCity(cons.mess(msg), 'toshkent');
    }
    if (msg.data === 'jizzax') {
      getCity(cons.mess(msg), 'jizzax');
    }
    if (msg.data === 'guliston') {
      getCity(cons.mess(msg), 'guliston');
    }
    if (msg.data === 'andijon') {
      getCity(cons.mess(msg), 'andijon');
    }
    if (msg.data === 'namangan') {
      getCity(cons.mess(msg), 'namangan');
    }
    if (msg.data === 'fargona') {
      getCity(cons.mess(msg), 'fargona');
    }
    if (msg.data === 'samarqand') {
      getCity(cons.mess(msg), 'samarqand');
    }
    if (msg.data === 'qarshi') {
      getCity(cons.mess(msg), 'qarshi');
    }
    if (msg.data === 'termiz') {
      getCity(cons.mess(msg), 'termiz');
    }
    if (msg.data === 'buxoro') {
      getCity(cons.mess(msg), 'buxoro');
    }
    if (msg.data === 'navoiy') {
      getCity(cons.mess(msg), 'navoiy');
    }
    if (msg.data === 'urganch') {
      getCity(cons.mess(msg), 'urganch');
    }
    if (msg.data === 'nukus') {
      getCity(cons.mess(msg), 'nukus');
    }
  });

  //===================Love=================>

  bot.onText(/\/love/, async (msg) => {
    await bot.sendMessage(cons.chatId(msg), 'Sizga botimiz yoqdimi', {
      reply_markup: {
        force_reply: false,
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: [['XA', 'YUQ'], ['Javob bermaslik']],
      },
    });
    if (cons.text(msg) === 'YUQ') {
      await bot.sendSticker(
        cons.chatId(msg),
        'https://tlgrm.ru/_/stickers/ed3/a3f/ed3a3fa9-9c12-47eb-909a-e5de9a87df3f/12.webp'
      );
    }
    if (cons.text(msg) === 'XA') {
      await bot.sendSticker(
        cons.chatId(msg),
        'https://tlgrm.ru/_/stickers/ed3/a3f/ed3a3fa9-9c12-47eb-909a-e5de9a87df3f/10.webp'
      );
    }
    if (cons.text(msg) === 'Javob bermaslik') {
      await bot.sendMessage(cons.chatId(msg), 'Javob yuq', {
        reply_markup: {
          remove_keyboard: true,
        },
      });
    }
  });

  //==================Text=====================>

  bot.on('text', async (msg) => {
    if (cons.text(msg).toLowerCase().includes('qalesan')) {
      bot.sendMessage(
        cons.chatId(msg),
        "Men yaxshi, O'zingiz qalesiz " + cons.names(msg)
      );
    }
    if (cons.text(msg).toLowerCase().includes('salom')) {
      bot.sendMessage(cons.chatId(msg), 'Assalomu alaykum ' + cons.names(msg));
    }
    if (cons.text(msg).toLowerCase().includes('mazzang zormi')) {
      bot.sendMessage(
        cons.chatId(msg),
        "Menda zo'r, O'zingizniki zo'rmi " + cons.names(msg)
      );
    }
    if (cons.text(msg).toLowerCase().includes('nima gaplar')) {
      bot.sendMessage(cons.chatId(msg), 'Bida tinchlik ' + cons.names(msg));
    }
    if (cons.text(msg).toLowerCase().includes('isming nima')) {
      bot.sendMessage(
        cons.chatId(msg),
        'Meniki Bot, sizniki ' + cons.names(msg) + 'mi'
      );
    }
    if (cons.text(msg).toLowerCase().includes('ishlar qalay')) {
      bot.sendMessage(
        cons.chatId(msg),
        "Bizniki yaxshi o'zinggizniki yaxshimi " + cons.names(msg)
      );
    }
    if (cons.text(msg).toLowerCase().includes('bugungi obhavo')) {
      bot.sendMessage(
        cons.chatId(msg),
        `Bugungi ob-havoni bilish uchun /city so'zidan kiyin shahringizni nomini yozing! 
          ${cons.names(msg)}`
      );
    }
    if (cons.text(msg) === '') {
      bot.sendMessage(
        cons.chatId(msg),
        'Men sizni tushunmayapman ' + cons.names(msg)
      );
    }
  });

  //=================Commands===============>

  bot.onText(/\/info/, async (msg) => {
    await bot.sendMessage(
      cons.chatId(msg),
      '<b> Bizning botimizda siz ozingizga kerakli ob-havo malumotlarini olishingiz mumkin! undan tashqari botimiz bilan suxbat qilishingiz mumkin!</b>',
      {
        parse_mode: 'HTML',
      }
    );
  });
  bot.onText(/\/reklama/, async (msg) => {
    await bot.sendMessage(
      cons.chatId(msg),
      `<b> Siz ozingizning biznesingizni, guruhingizni, kanalingizni rivojlantirish uchun reklama berishingiz mumkin!!!</b>`,
      {
        parse_mode: 'HTML',
      }
    );
  });

  //====================Delete==============>
  bot.on('message', async (msg) => {
    arr = ['dalbayop', 'sikay', 'kut', 'axmoq', 'qutoq', 'pidaraz'];
    arr.forEach((item) => {
      if (cons.text(msg).toLowerCase().includes(item)) {
        bot.deleteMessage(cons.chatId(msg), msg.message_id);
        bot.sendMessage(
          cons.chatId(msg),
          `Bunaqa yomon gaplarni yozmang! ${cons.names(msg)}`
        );
      }
    });
  });

  console.log('Bot ishamoqda');
};

start();
