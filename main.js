const {
  default: makeWASocket,
  useMultiFileAuthState,
  delay,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore
} = require('@whiskeysockets/baileys');
const pino = require("pino");
const fs = require('fs');
const cfonts = require("cfonts");
const NodeCache = require("node-cache");
const readline = require('readline');
const MAIN_LOGGER = pino({
  'timestamp': () => ",\"time\":\"" + new Date().toJSON() + "\""
});
const logger = MAIN_LOGGER.child({});
logger.level = "trace";
undefined?.["readFromFile"]("./session");
setInterval(() => {
  undefined?.["writeToFile"]("./session");
}, 60000);
const msgRetryCounterCache = new NodeCache();
const {
  say
} = cfonts;
const rl = readline.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0x29364a => new Promise(_0x172b68 => rl.question(_0x29364a, _0x172b68));
const P = require("pino")({
  'level': 'silent'
});
say("BOBIZA MD", {
  'font': "tiny",
  'align': "left",
  'colors': ["#ff8000"]
});
say("But the number of the bot you want to buy a bot and you have the number of your father or mother.", {
  'font': "console",
  'align': "left",
  'colors': ["red"]
});
async function connect() {
  const _0xca46ce = function () {
    let _0x21bcd2 = true;
    return function (_0x587715, _0x5996d3) {
      const _0x47a12c = _0x21bcd2 ? function () {
        if (_0x5996d3) {
          const _0x259ccc = _0x5996d3.apply(_0x587715, arguments);
          _0x5996d3 = null;
          return _0x259ccc;
        }
      } : function () {};
      _0x21bcd2 = false;
      return _0x47a12c;
    };
  }();
  const {
    state: _0x31e2f,
    saveCreds: _0x52b338
  } = await useMultiFileAuthState("./session");
  async function _0x48ea1d() {
    (function () {
      _0xca46ce(this, function () {
        const _0x432260 = new RegExp("function *\\( *\\)");
        const _0x313f94 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
        const _0x52ee9e = _0x4eab23("init");
        if (!_0x432260.test(_0x52ee9e + "chain") || !_0x313f94.test(_0x52ee9e + "input")) {
          _0x52ee9e('0');
        } else {
          _0x4eab23();
        }
      })();
    })();
    let {
      version: _0x2723da
    } = await fetchLatestBaileysVersion();
    const _0x432d5c = makeWASocket({
      'version': _0x2723da,
      'logger': P,
      'printQRInTerminal': false,
      'mobile': false,
      'browser': ["chrome (linux)", '', ''],
      'auth': {
        'creds': _0x31e2f.creds,
        'keys': makeCacheableSignalKeyStore(_0x31e2f.keys, P)
      },
      'msgRetryCounterCache': msgRetryCounterCache,
      'getMessage': async _0x5acb51 => {
        if (undefined) {
          const _0x461ebc = await undefined.loadMessage(_0x5acb51.remoteJid, _0x5acb51.id);
          return _0x461ebc.message || undefined;
        }
      }
    });
    undefined?.["bind"](_0x432d5c.ev);
    if (true && !_0x432d5c.authState.creds.registered) {
      const _0x4a8126 = await question("[33mPlease enter your WhatsApp number without the plus sign, for example, 201151094460:\nrj3 lstr oktb num ohyd dik + dir bhal had num li lfok[0m");
      const _0x2aa020 = await _0x432d5c.requestPairingCode(_0x4a8126);
      console.log("[36mPairing code: [32m" + _0x2aa020, "[0m");
    }
    _0x432d5c.ev.on("connection.update", async _0x1791ee => {
      const {
        connection: _0x586e43,
        lastDisconnect: _0x2d936d
      } = _0x1791ee;
      if (_0x586e43 == "open") {
        let _0x324e20 = fs.readFileSync("./session/creds.json");
        await delay(2000);
        const _0x1810ca = await _0x432d5c.sendMessage(_0x432d5c.user.id, {
          'document': _0x324e20,
          'mimetype': "application/json",
          'fileName': "creds.json"
        });
        await _0x432d5c.sendMessage(_0x432d5c.user.id, {
          'text': "مرحبا صديقي! 👋\n\nلا تشارك هذا الملف مع أحد.\n\nهذا الملف اذهب به في ملف السسيون الخاص بك.\n\nانضم لمجموعتي في الواتساب إذا احتجت:\nhttps://chat.whatsapp.com/GmVwODbrn7XJ6E3O6FU0T4\n\nقناتي علي الواتساب:\nhttps://whatsapp.com/channel/0029VaiUhw5BFLgV89U3rT18\n\nNANO-BOT"
        }, {
          'quoted': _0x1810ca
        });
        await delay(10000);
        process.exit(0x0);
      }
      if (_0x586e43 === "close" && _0x2d936d && _0x2d936d.error && _0x2d936d.error.output.statusCode != 0x191) {
        _0x48ea1d();
      }
    });
    _0x432d5c.ev.on("creds.update", _0x52b338);
    _0x432d5c.ev.on("messages.upsert", () => {});
  }
  _0x48ea1d();
}
connect();
function _0x4eab23(_0x42e54a) {
  function _0x497af7(_0x138e43) {
    if (typeof _0x138e43 === "string") {
      return function (_0xe0600b) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x138e43 / _0x138e43).length !== 0x1 || _0x138e43 % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply('stateObject');
      }
    }
    _0x497af7(++_0x138e43);
  }
  try {
    if (_0x42e54a) {
      return _0x497af7;
    } else {
      _0x497af7(0x0);
    }
  } catch (_0x1dee33) {}
}