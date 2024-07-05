// export type LanguagePkg = {
//   moduleName2: {
//     demoTitle: LanguageItem,
//     subContent: LanguageItem
//   }
// }

/**国家和地区 */
export enum Country {
  /**中国 */
  CHINA = "China",
  /**印度 */
  INDIA = "India",
  /**印度尼西亚 */
  INDONESIA = "Indonesia",
  /**印度 */
  HINDI = "Hindi",
}

/**语言类型 */
export enum LanguageItemType {
  ZH = "zh",
  EN = "en",
  IDA = "ida",
  HI = "hi",
}

/**地区与默认语言包映射 */
export const defaultLanguageType = {
  [Country.CHINA]: {
    langName: "Chinese",
    language: LanguageItemType.ZH,
    phoneAreaNum: "86",
    shortName: "CH",
  },
  [Country.INDIA]: {
    langName: "English",
    language: LanguageItemType.EN,
    phoneAreaNum: "91",
    shortName: "IND",
  },
  [Country.INDONESIA]: {
    langName: "Indonesia",
    language: LanguageItemType.IDA,
    phoneAreaNum: "62",
    shortName: "ID",
  },
  [Country.HINDI]: {
    langName: "Hindi",
    language: LanguageItemType.HI,
    phoneAreaNum: "91",
    shortName: "HI",
  },
};

const languagePkg = {
  WebSocketModule: {
    WebSocketError: {
      zh: "网络连接失败",
      en: "Network Connection Failure",
      ida: "Koneksi jaringan gagal",
      hi: "नेटवर्क कनेक्शन विफलता",
    },
    WebSocketFreeze: {
      zh: "对不起，您的账户处于冻结状态，请联系客服解冻！",
      en: "Sorry, your account is frozen, please contact customer service to unfreeze it!",
      ida: "Maaf , akun anda dalam kondisi terblokir ,silahkan menghubungi CS untuk membuka blokir !",
      hi: "क्षमा करें, आपका खाता जमे हुए है, कृपया इसे अनफ्रीज करने के लिए ग्राहक सेवा से संपर्क करें!",
    },
    NetworkInstability: {
      zh: "您的网络不稳定",
      en: "network instability",
      ida: "Jaringan Anda tidak stabil",
      hi: "आपका नेटवर्क अस्थिर है",
    },
    ConfigGameFaild: {
      zh: "对不起，连接游戏失败",
      en: "Sorry, connection to the game failed.",
      ida: "Maaf , Koneksi game gagal",
      hi: "क्षमा करें, खेल से कनेक्शन विफल रहा।",
    },
    socketConnectDateFail: {
      zh: "对不起，连接失败",
      en: "Sorry, connection failed.",
      ida: "Maaf , Koneksi gagal",
      hi: "क्षमा करें, कनेक्शन विफल रहा।",
    },
    socketConnectDisconnect: {
      zh: "网络已断开连接",
      en: "Network disconnect",
      ida: "Jaringan telah terputus",
      hi: "नेटवर्क डिस्कनेक्ट",
    },
    socketConnectAuthFaild: {
      zh: "认证失败",
      en: "Auth Faild",
      ida: "Gagal sertifikasi",
      hi: "प्रमाणीकरण विफल",
    },
    socketRetryTimes: {
      zh: "连接断开，正在进行第{times}次重连...",
      en: "Network interrupted, reconnecting {times} time",
      ida: "Koneksi terputus dan koneksi ulang ke {times} sedang berlangsung...",
      hi: "नेटवर्क बाधित, {times} बार पुन: कनेक्ट हो रहा है",
    },
    GameInit: {
      zh: "游戏初始化中，请稍后",
      en: "Game start",
      ida: "Game berhasil dimuat...",
      hi: "खेल शुरू",
    },
    SocketDataError: {
      zh: "服务数据错误",
      en: "Service data error",
      ida: "Kesalahan data layanan",
      hi: "सेवा डेटा त्रुटि",
    },
    SocketMsgTimeOut: {
      zh: "对不起，服务器网络超时",
      en: "Sorry, server network timeout.",
      ida: "Maaf, waktu jaringan server habis",
      hi: "क्षमा करें, सर्वर नेटवर्क टाइमआउट।",
    },
    ErrorGeneral: {
      zh: "对不起，出错了",
      en: "Sorry, something went wrong.",
      ida: "Maaf, ada yang tidak beres",
      hi: "क्षमा करें, कुछ गलत हो गया।",
    },
  },
  HallModule: {
    HallGameLoading: {
      zh: "对不起，加载游戏失败！{id}",
      en: "Sorry, loading the game failed! {id}",
      ida: "Maaf, Gagal menginstal game!{id}",
      hi: "क्षमा करें, खेल लोड करने में विफल! {id}",
    },
    LoadFaild: {
      zh: "加载资源失败",
      en: "Load resouce Faild",
      ida: "Salah memuat sumber daya",
      hi: "संसाधन लोड विफल",
    },
    HallCopy: {
      zh: "复制成功",
      en: "Copy Success",
      ida: "Berhasil Salin",
      hi: "कॉपी सफल",
    },
    GuestAutoLogin: {
      zh: "游客登录中",
      en: "Visitor Login",
      ida: "pengunjung sedang log in",
      hi: "अतिथि लॉगिन",
    },
    AutoLoginFaild: {
      zh: "请手动登录",
      en: "Please login manually",
      ida: "Mohon Log in dengan manual",
      hi: "कृपया मैन्युअल रूप से लॉगिन करें",
    },
    captchaError: {
      zh: "验证码错误",
      en: "CAPTCHA error",
      ida: "Galat captcha",
      hi: "कैप्चा त्रुटि",
    },
    captchaEmptyError: {
      zh: "请输入验证码",
      en: "Enter the verification code",
      ida: "silakan masukkan kode verifikasi",
      hi: "कृपया सत्यापन कोड दर्ज करें",
    },
    passwordEmptyError: {
      zh: "请输入密码",
      en: "Please enter your password",
      ida: "Silakan masukkan sandi",
      hi: "कृपया अपना पासवर्ड दर्ज करें",
    },
    confirmPasswordEmptyError: {
      zh: "请输入确认密码",
      en: "Please enter the confirmation password",
      ida: "Silakan masukkan kata sandi konfirmasi",
      hi: "कृपया पुष्टि पासवर्ड दर्ज करें",
    },
    pwdRepetitionError: {
      zh: "两次输入的密码不一致",
      en: "Inconsistent passwords entered twice",
      ida: "Kata sandi yang dimasukkan tidak sama",
      hi: "दो बार दर्ज किए गए पासवर्ड असंगत हैं",
    },
    CantEditProfile: {
      zh: "对不起，请认证用户资料再操作",
      en: "Sorry, please verify your user profile before proceeding",
      ida: "Maaf , mohon verifikasi informasi anda sebelum melanjutkan",
      hi: "क्षमा करें, कृपया आगे बढ़ने से पहले अपनी उपयोगकर्ता प्रोफ़ाइल सत्यापित करें",
    },
    HallWithdrawalNoEnough: {
      zh: "对不起，您的可提现金额不足",
      en: "Sorry, your withdrawal amount is insufficient",
      ida: "Maaf, jumlah penarikan Anda tidak mencukupi",
      hi: "क्षमा करें, आपकी निकासी राशि अपर्याप्त है",
    },
    HallWithdrawalglod: {
      zh: "对不起，提现金额应在{down}~{up}之间",
      en: "Sorry, the withdrawal amount should be between {down}~{up}",
      ida: "Maaf, jumlah penarikan harus antara {down}~{up}",
      hi: "क्षमा करें, निकासी राशि {down}~{up} के बीच होनी चाहिए",
      // ida: 'Maaf , Jumlah yang anda masukkan tidak benar'
    },
    HallShopAmount: {
      zh: "对不起，充值金额需在{down}~{up}之间",
      en: "Sorry, the recharge amount should be between {down}~{up}",
      ida: "Maaf, jumlah isi ulang harus antara {down}~{up}",
      hi: "क्षमा करें, रिचार्ज राशि {down}~{up} के बीच होनी चाहिए",
    },
    HallWithdrawalMessage: {
      zh: "请选择提现到账的银行信息",
      en: "Please select the withdrawal bank information",
      ida: "Tolong memilih akun bank yang akan melakukan withdraw",
      hi: "कृपया निकासी बैंक जानकारी का चयन करें",
    },
    HallWithdrawalBank: {
      zh: "请选择有效的提现渠道",
      en: "Please choose a valid withdrawal channel",
      ida: "Silahkan pilih saluran ekstraksi yang valid",
      hi: "कृपया एक मान्य निकासी चैनल चुनें",
    },
    WithdrawalApply: {
      zh: "提现申请发送成功",
      en: "Withdrawal request sent successfully",
      ida: "Permohonan penarikan berhasil dikirim",
      hi: "निकासी अनुरोध सफलतापूर्वक भेजा गया",
    },
    SureDeleteMail: {
      zh: "您确定要删除此消息吗？",
      en: "Are you sure you want to delete this message?",
      ida: "Apakah anda yakin akan menghapus pesan ini ?",
      hi: "क्या आप वाकई इस संदेश को हटाना चाहते हैं?",
    },
    TurntableCue: {
      zh: "对不起,该活动已结束!",
      en: "Sorry, this event has ended!",
      ida: "Maaf, acara ini telah berakhir!",
      hi: "क्षमा करें, यह घटना समाप्त हो गई है!",
    },
    UnfinishedGames: {
      zh: "您还有未完成的游戏，请继续",
      en: "You still have unfinished games, continue.",
      ida: "Anda masih memiliki permainan yang belumselesai, lanjutkan",
      hi: "आपके पास अभी भी अधूरे खेल हैं, जारी रखें।",
    },
    GameDownLoadDone: {
      zh: "游戏{gameName}下载完成，请轻击开始",
      en: "Game has been downloaded, please tap to start.",
      ida: "Game telah diunduh, ketuk untuk memulai",
      hi: "खेल डाउनलोड हो गया है, कृपया शुरू करने के लिए टैप करें।",
    },
  },
  BankModule: {
    BankPassword: {
      zh: "您的银行密码设置成功！",
      en: "Your bank password has been set successfully!",
      ida: "Kata sandi bank anda berhasil di tukar !",
      hi: "आपका बैंक पासवर्ड सफलतापूर्वक सेट कर दिया गया है!",
    },
    BankTransfer: {
      zh: "您的银行金币转移成功！",
      en: "Your bank gold transfer was successful!",
      ida: "Saldo bank anda berhasil di pindahkan !",
      hi: "आपका बैंक गोल्ड ट्रांसफर सफल रहा!",
    },
  },
  BaseBoardModule: {
    BaseBoardBeat: {
      zh: "认证成功",
      en: "Certification Success",
      ida: "Pendaftaran berhasil !",
      hi: "प्रमाणीकरण सफल",
    },
    BaseBoardLogin: {
      zh: "抱歉，您的登录信息变更，已自动退出~",
      en: "Sorry, your login information has changed and you have been automatically logged out~",
      ida: "Maaf , Data login anda berubah ,akun telah dikeluarkan secara otomatis",
      hi: "क्षमा करें, आपकी लॉगिन जानकारी बदल गई है और आपको स्वचालित रूप से लॉगआउट कर दिया गया है~",
    },
    BaseBoardExit: {
      zh: "对不起，退出失败",
      en: "Sorry. Exit failed.",
      ida: "Maaf , Gagal Keluar",
      hi: "क्षमा करें। बाहर निकलने में विफल।",
    },
    BaseBoardUpdate: {
      zh: "请更新App至最新版本",
      en: "Please update the app to the latest version",
      ida: "Silahkan mengupgrade App ke versi paling baru",
      hi: "कृपया ऐप को नवीनतम संस्करण में अपडेट करें",
    },
    operateDone: {
      zh: "操作完成",
      en: "Operation completed",
      ida: "Operasi selesai",
      hi: "संचालन पूरा हुआ",
    },
    DataException: {
      zh: "数据加载异常",
      en: "Data loading exception",
      ida: "Pengecualian pemuatan data",
      hi: "डेटा लोडिंग अपवाद",
    },
  },
  BindPhoneModule: {
    BindPhoneChange: {
      zh: "操作成功",
      en: "Successful operation",
      ida: "Operasi sukses",
      hi: "सफल संचालन",
    },
    DoneSuccess: {
      zh: "修改成功",
      en: "Successful update",
      ida: "Pembaruan berhasil",
      hi: "सफलतापूर्वक अपडेट किया गया",
    },
    BindPhoneSend: {
      zh: "验证信息已经发送，请注意查收",
      en: "Verification information has been sent, please pay attention to check",
      ida: "Info verifikasi telah di kirim ,silahkan di cek",
      hi: "सत्यापन जानकारी भेज दी गई है, कृपया जांच करने पर ध्यान दें",
    },
    BindPhonesSendError: {
      zh: "验证信息发送失败",
      en: "Failed to send authentication message",
      ida: "Info verifikasi gagal di kirim",
      hi: "प्रमाणीकरण संदेश भेजने में विफल",
    },
  },
  loginModule: {
    LoginRemind: {
      zh: "请登录",
      en: "sign in",
      ida: "Silakan log masuk",
      hi: "साइन इन करें",
    },
    LoginMark: {
      zh: "已自动登录",
      en: "logged in automatically",
      ida: "Telah Log in secara otomatis",
      hi: "स्वचालित रूप से लॉग इन किया गया",
    },
    LoginSuccess: {
      zh: "已自动登录账号",
      en: "Automatically logged in account",
      ida: "Telah Log in secara otomatis",
      hi: "स्वचालित रूप से लॉग इन किया गया खाता",
    },
    LoginCode: {
      zh: "登录验证已经发送，请注意查收",
      en: "Login verification has been sent, please check",
      ida: "Info verifikasi telah di kirim ,silahkan di cek",
      hi: "लॉगिन सत्यापन भेजा गया है, कृपया जांचें",
    },
  },
  MainPaneModule: {
    MainPanelCodeError: {
      zh: "不能输入自己的推荐码",
      en: "Cannot enter your own referral code",
      ida: "Tidak boleh memasukan kode referral sendiri",
      hi: "अपना रेफरल कोड दर्ज नहीं कर सकते",
    },
    MainPanelPromotion: {
      zh: "您输入的推荐人不存在",
      en: "The referrer you have entered does not exist",
      ida: "Orang referral yang anda masukkan tidak berdaftar",
      hi: "आपके द्वारा दर्ज किया गया रेफरर मौजूद नहीं है",
    },
    ShareSure: {
      zh: "绑定成功",
      en: "Binding successful",
      ida: "Pengikatan berhasil",
      hi: "बाइंडिंग सफल",
    },
    ShareCopy: {
      zh: "复制推广链接成功，快去邀请好友一起玩吧！",
      en: "Copy the promotion link successfully, go ahead and invite your friends to play with you!",
      ida: "Link berhasil di salin , cepat mengajak teman anda bermain !",
      hi: "प्रचार लिंक को सफलतापूर्वक कॉपी करें, आगे बढ़ें और अपने दोस्तों को आपके साथ खेलने के लिए आमंत्रित करें!",
    },
    NoGiftData: {
      zh: "没有礼包数据!",
      en: "No package data!",
      ida: "Tidak ada data paket hadiah!",
      hi: "कोई पैकेज डेटा नहीं!",
    },
    LoadUrlError: {
      zh: "此链接无法加载!",
      en: "This link does not load!",
      ida: "Tautan ini tidak dapat dimuat!",
      hi: "यह लिंक लोड नहीं होता!",
    },
  },
  PersonCenterModule: {
    PersonCenterEdit: {
      zh: "编辑成功",
      en: "Edit Success",
      ida: "Edit berhasil",
      hi: "संपादन सफल",
    },
    PersonCenterSumbit: {
      zh: "操作过于频繁，请稍等",
      en: "Operation is too frequent, please wait",
      ida: "Operasi ini terlalu sering, harap tunggu",
      hi: "संचालन बहुत बार-बार है, कृपया प्रतीक्षा करें",
    },
  },
  palyingModule: {
    GameExit: {
      zh: "您正在游戏中，请游戏结束后重试。",
      en: "You are in the middle of a game, please try again after the game.",
      ida: "Kamu sedang berada di permainan , silahkan dicoba setelah permainan selesai",
      hi: "आप खेल के बीच में हैं, कृपया खेल के बाद पुनः प्रयास करें।",
    },
    CrashBottomFailed: {
      zh: "下注不合法",
      en: "Bet illegal",
      ida: "Taruhan ilegal",
      hi: "सट्टा अवैध है",
    },
    RechangeGlod: {
      zh: "对不起，您的金币不足，请充值!",
      en: "Sorry, your gold coin is insufficient, please recharge!",
      ida: "Maaf , saldo anda tidak cukup ,silakan melakukan deposit",
      hi: "क्षमा करें, आपका सोने का सिक्का अपर्याप्त है, कृपया रिचार्ज करें!",
    },
    ExceedUpper: {
      zh: "对不起，您的金币改房间进入要求!",
      en: "Sorry for your gold coin change room entry requirements!",
      ida: "Maaf , saldo anda tidak cukup ,silakan melakukan deposit",
      hi: "क्षमा करें, आपके सोने के सिक्के के कमरे में प्रवेश की आवश्यकताएं बदल गई हैं!",
    },
    ExceedUpper1: {
      zh: "对不起，您不符合进入条件，是否进入系统匹配房间!",
      en: "Sorry, you do not meet the entry conditions, whether to enter the system matching room!",
      ida: "Maaf anda tidak memenuhi syarat untuk masuk , apakah masuk ke kamar yang sesuai sistem !",
      hi: "क्षमा करें, आप प्रवेश की शर्तों को पूरा नहीं करते हैं, क्या आप सिस्टम मिलान कक्ष में प्रवेश करना चाहते हैं!",
    },
  },
  InitGameModule: {
    HoldOn: {
      zh: "请稍后...",
      en: "Hold on please…",
      ida: "Mohon bersabar",
      hi: "कृपया प्रतीक्षा करें...",
    },
    GameBoardInit: {
      zh: "游戏初始化失败",
      en: "game init failed",
      ida: "Reset permainan gagal",
      hi: "खेल प्रारंभ विफल",
    },
    GameBoardInitAndGotoUrl: {
      zh: "游戏初始化失败，选择确认将重启",
      en: "game init failed",
      ida: "Inisialisasi game gagal, Pilih Konfirmasi untuk mem-boot ulang",
      hi: "खेल प्रारंभ विफल, पुनः आरंभ करने के लिए पुष्टि चुनें",
    },
    FetcherFaild: {
      zh: "数据加载失败",
      en: "Data loading failure",
      ida: "Data gagal di muat",
      hi: "डेटा लोडिंग विफलता",
    },
    BetFaild: {
      zh: "{0} 筹码下注失败",
      en: "{0} Chip bet failed",
      ida: "{0} Taruhan chip gagal",
      hi: "{0} चिप सट्टा विफल",
    },
  },
  InputModule: {
    isNotEmpty: {
      zh: "输入的信息不能为空",
      en: "The information entered cannot be empty",
      ida: "Data yang di masukkan tidak boleh kosong",
      hi: "दर्ज की गई जानकारी खाली नहीं हो सकती",
    },
    isAllNumber: {
      zh: "输入的内容必须是纯数字",
      en: "The input must be purely numeric",
      ida: "Silakan masukkan isi yang harus menjadi nomor murni",
      hi: "इनपुट पूरी तरह से संख्यात्मक होना चाहिए",
    },
    isDecimal: {
      zh: "您输入的金额不合法",
      en: "The amount you have entered is not legal",
      ida: "Jumlah yang di masukkan tidak diperbolehkan",
      hi: "आपके द्वारा दर्ज की गई राशि कानूनी नहीं है",
    },
    isPhoneNumber: {
      zh: "输入的手机号码不合法(11~13位纯数字)",
      en: "Input mobile phone number is not legal (11~13 digits pure numbers)",
      ida: "Nomor handphone yang di masukkan tidak di perbolehkan (11 ~ 13 digit)",
      hi: "दर्ज किया गया मोबाइल फोन नंबर कानूनी नहीं है (11~13 अंक शुद्ध संख्याएं)",
    },
    isIDAPhoneNumber: {
      zh: "输入的手机号码不合法(8 + 10~12位纯数字)",
      en: "Input mobile phone number is not legal (8 + 10~12 pure digits)",
      ida: "Nomor handphone yang di masukkan tidak di perbolehkan (8 + 10 ~ 12 digit)",
      hi: "दर्ज किया गया मोबाइल फोन नंबर कानूनी नहीं है (8 + 10~12 शुद्ध अंक)",
    },
    // isIDPhoneNumber: {
    //   zh: '输入的手机号码不合法(6/7/8/9 + 9位纯数字)',
    //   en: 'Input mobile phone number is not legal (6/7/8/9 + 9 pure digits)',
    //   ida: 'Nomor handphone yang di masukkan tidak di perbolehkan (6/7/8/9 + 9 digit)'
    // },
    isIDPhoneNumber: {
      zh: "输入的手机号码不合法(10位纯数字)",
      en: "Input mobile phone number is not legal (10 pure digits)",
      ida: "Nomor handphone yang di masukkan tidak di perbolehkan (10 digit)",
      hi: "दर्ज किया गया मोबाइल फोन नंबर कानूनी नहीं है (10 शुद्ध अंक)",
    },
    isBankCardNumber: {
      zh: "您输入的银行卡号不合法",
      en: "The bank card number you entered is illegal",
      ida: "Nomor kartu bank yang Anda masukkan ilegal",
      hi: "आपके द्वारा दर्ज किया गया बैंक कार्ड नंबर अवैध है",
    },
    isSmsCode: {
      zh: "请输入正确的手机验证码",
      en: "Please enter the correct mobile phone verification code",
      ida: "Silahkan memasuki kode verifikasi dengan benar",
      hi: "कृपया सही मोबाइल फोन सत्यापन कोड दर्ज करें",
    },
    isCharLength: {
      zh: "请输入 {num1} ~ {num2} 位字符",
      en: "Please enter {num1} ~ {num2} bits",
      ida: "masukkan {num1} ~ {num2} aksara",
      hi: "कृपया {num1} ~ {num2} बिट्स दर्ज करें",
    },
    inputFaildCustomer1: {
      zh: "渠道号码必须以08开头",
      en: "The channel number must start with 08",
      ida: "Nomor saluran harus dimulai dengan 08",
      hi: "चैनल नंबर 08 से शुरू होना चाहिए",
    },
  },
  UpdateModule: {
    GameConfig: {
      zh: "请更新App至最新版本{version}",
      en: "Please update the app to the latest version {version}",
      ida: "Silahkan mengupgrade App ke versi paling baru {version}",
      hi: "कृपया ऐप को नवीनतम संस्करण {version} में अपडेट करें",
    },
    GameNotice: {
      zh: "对不起，系统维护中，请稍后再尝试登录",
      en: "Sorry, the system is under maintenance, please try to log in again later",
      ida: "Maaf, sistem sedang dalam pemeliharaan, silakan coba login lagi nanti",
      hi: "क्षमा करें, सिस्टम रखरखाव में है, कृपया बाद में फिर से लॉगिन करने का प्रयास करें",
    },
    VersionLabel: {
      zh: "本地版本:v{localVersion}, 线上版本:v{serverVersion}",
      en: "Local version: v{localVersion}, Online version: v{serverVersion}",
      ida: "Versi lokal:v{localVersion}, Versi online:v{serverVersion}",
      hi: "स्थानीय संस्करण: v{localVersion}, ऑनलाइन संस्करण: v{serverVersion}",
    },
    UpdateProgress: {
      zh: "正在更新中,请耐心等待({time}%)...",
      en: "Updating now, please be patient ({time}%)...",
      ida: "Sedang update , silahkan menunggu ({time}%)...",
      hi: "अभी अपडेट हो रहा है, कृपया धैर्य रखें ({time}%)...",
    },
    OnNeedToUpdate: {
      zh: "有最新的资源包({version})需要更新，点确认开始下载",
      en: "There are new packages ({version}) that need to be updated, click OK to start the download",
      ida: "Ada paket sumber daya terbaru ({version}) yang perlu diperbarui, klik Konfirmasi untuk mulai mengunduh",
      hi: "नए पैकेज ({version}) हैं जिन्हें अपडेट करने की आवश्यकता है, डाउनलोड शुरू करने के लिए ओके पर क्लिक करें",
    },
    DetectCompleted: {
      zh: "检测完成，即将进入游戏>>",
      en: "Detection complete, about to enter the game>>",
      ida: "Persiapan selesai , segera memasuki permainan>>",
      hi: "पता लगाना पूरा हुआ, खेल में प्रवेश करने वाला है>>",
    },
    DetectComplete: {
      zh: "检测完成，即将进入游戏",
      en: "Detection complete, about to enter the game",
      ida: "Persiapan selesai , segera memasuki permainan",
      hi: "पता लगाना पूरा हुआ, खेल में प्रवेश करने वाला है",
    },
    UpdateFail: {
      zh: "更新失败",
      en: "Update failed",
      ida: "Update gagal",
      hi: "अपडेट विफल",
    },
    RestartProgram: {
      zh: "更新失败，是否要重启程序？",
      en: "Update failed, should I restart the programme?",
      ida: "Update gagal , apakah mau coba ulang?",
      hi: "अपडेट विफल, क्या मुझे प्रोग्राम को पुनरारंभ करना चाहिए?",
    },
    ClientCheck: {
      zh: "客户端开始检查>>",
      en: "Client starts checking >>",
      ida: "Periksa Mula Klien >>",
      hi: "क्लाइंट जांच शुरू करता है >>",
    },
    CheckUpdatedPkg: {
      zh: "检查更新包...",
      en: "Check for updated packages...",
      ida: "Periksa paket terbaru...",
      hi: "अपडेट किए गए पैकेज की जांच करें...",
    },
    isNative: {
      zh: "非native版本不检查更新，即将进入游戏",
      en: "Non-native versions do not check for updates and are about to enter the game",
      ida: "Versi bukan asli tidak memeriksa pemutakhiran dan akan segera memasuki permainan",
      hi: "गैर-देशी संस्करण अपडेट की जांच नहीं करते हैं और खेल में प्रवेश करने वाले हैं",
    },
  },
  withdrawal: {
    withdrawalSuccess: {
      zh: "恭喜您绑定成功，获得{gold}金币奖励！",
      en: "Congratulations, your binding is successful and you have been rewarded with {gold} gold!",
      ida: "Selamat berhasil mendaftar dan mendapatkan {gold} koin sebagai hadiah !",
      hi: "बधाई हो, आपका बाइंडिंग सफल है और आपको {gold} सोने का इनाम मिला है!",
    },
    flllowWaterNoLevel: {
      zh: "抱歉，你的投注额未达到提现标准！",
      en: "Sorry,Your wagering did not meet the withdrawal audit!",
      ida: "Maaf, taruhan Anda tidak memenuhi kriteria penarikan!",
      hi: "क्षमा करें, आपका दांव निकासी ऑडिट को पूरा नहीं करता!",
    },
    GotoServiceModify: {
      zh: "请联系客服修改",
      en: "Please contact customer service to modify",
      ida: "Silakan hubungi layanan pelanggan untuk memodifikasi",
      hi: "कृपया संशोधित करने के लिए ग्राहक सेवा से संपर्क करें",
    },
    ElapsedTime: {
      zh: "{minutes}分{second}秒",
      en: "{minutes} minutes {second} second",
      ida: "{minutes} menit {second} detlk",
      hi: "{minutes} मिनट {second} सेकंड",
    },
    OrderShowStr: {
      zh: '"-","处理中","已完成","失败","待支付"',
      en: '"-","Process","Success","Failed","Unpaid"',
      ida: '"-","Proses","Berhasil","Gagal","Untuk dibayar"',
      hi: '"-","प्रक्रिया","सफलता","विफल","अवैतनिक"',
    },
  },
};

export default languagePkg;
