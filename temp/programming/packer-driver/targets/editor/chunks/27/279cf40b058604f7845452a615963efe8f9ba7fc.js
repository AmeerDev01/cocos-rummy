System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, LanguageItemType, languagePkg;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd099EpRWtKzJQhkH2PMMGO", "languagePkg", undefined);

      // export type LanguagePkg = {
      //   moduleName2: {
      //     demoTitle: LanguageItem,
      //     subContent: LanguageItem
      //   }
      // }
      _export("LanguageItemType", LanguageItemType = /*#__PURE__*/function (LanguageItemType) {
        LanguageItemType["ZH"] = "zh";
        LanguageItemType["EN"] = "en";
        LanguageItemType["IDA"] = "ida";
        return LanguageItemType;
      }({}));

      languagePkg = {
        WebSocketModule: {
          WebSocketError: {
            zh: '网络连接失败',
            en: '',
            ida: 'Koneksi jaringan gagal'
          },
          WebSocketFreeze: {
            zh: '对不起，您的账户处于冻结状态，请联系客服解冻！',
            en: '',
            ida: 'Maaf , akun anda dalam kondisi terblokir ,silahkan menghubungi CS untuk membuka blokir !'
          },
          NetworkInstability: {
            zh: '您的网络不稳定',
            en: 'network instability',
            ida: 'Jaringan Anda tidak stabil'
          },
          ConfigGameFaild: {
            zh: '对不起，连接游戏失败',
            en: '',
            ida: 'Maaf , Koneksi game gagal'
          },
          socketConnectDateFail: {
            zh: '对不起，连接失败',
            en: '',
            ida: 'Maaf , Koneksi gagal'
          },
          socketConnectDisconnect: {
            zh: '网络已断开连接',
            en: 'Network disconnect',
            ida: 'Jaringan telah terputus'
          },
          socketConnectAuthFaild: {
            zh: '认证失败',
            en: 'Auth Faild',
            ida: 'Gagal sertifikasi'
          },
          socketRetryTimes: {
            zh: '连接断开，正在进行第{times}次重连...',
            en: '',
            ida: 'Koneksi terputus dan koneksi ulang ke {times} sedang berlangsung...'
          },
          GameInit: {
            zh: '游戏初始化中，请稍后',
            en: 'Game init',
            ida: 'Game berhasil dimuat...'
          },
          SocketDataError: {
            zh: '服务数据错误',
            en: '',
            ida: 'Kesalahan data layanan'
          },
          SocketMsgTimeOut: {
            zh: '对不起，网络超时',
            en: '',
            ida: 'Maaf, batas waktu jaringan habis'
          }
        },
        HallModule: {
          HallGameLoading: {
            zh: '对不起，加载游戏失败！{id}',
            en: '',
            ida: 'Maaf, Gagal menginstal game!{id}'
          },
          LoadFaild: {
            zh: '加载资源失败',
            en: 'Load resouce Faild',
            ida: 'Salah memuat sumber daya'
          },
          HallCopy: {
            zh: '复制成功',
            en: '',
            ida: 'Berhasil Salin'
          },
          GuestAutoLogin: {
            zh: '游客登录中',
            en: '',
            ida: 'pengunjung sedang log in'
          },
          AutoLoginFaild: {
            zh: '请手动登录',
            en: '',
            ida: 'Mohon Log in dengan manual'
          },
          captchaError: {
            zh: "验证码错误",
            en: '',
            ida: 'Galat captcha'
          },
          captchaEmptyError: {
            zh: "请输入验证码",
            en: '',
            ida: 'silakan masukkan kode verifikasi'
          },
          passwordEmptyError: {
            zh: "请输入密码",
            en: '',
            ida: 'Silakan masukkan sandi'
          },
          confirmPasswordEmptyError: {
            zh: "请输入确认密码",
            en: '',
            ida: 'Silakan masukkan kata sandi konfirmasi'
          },
          pwdRepetitionError: {
            zh: "两次输入的密码不一致",
            en: '',
            ida: 'Kata sandi yang dimasukkan tidak sama'
          },
          CantEditProfile: {
            zh: '对不起，请认证用户资料再操作',
            en: '',
            ida: 'Maaf , mohon verifikasi informasi anda sebelum melanjutkan'
          },
          HallShopAmount: {
            zh: '对不起，您充值的金额需在{gold1}~{gold2}之间',
            en: '',
            ida: 'Maaf , Jumlah deposit anda harus antara {gold1}~{gold2}'
          },
          HallWithdrawalNoEnough: {
            zh: '对不起，您的可提现金额不足',
            en: '',
            ida: 'Maaf, jumlah penarikan Anda tidak mencukupi'
          },
          HallWithdrawalglod: {
            zh: '对不起，提现金额应在{down}~{up}之间',
            en: '',
            ida: 'Maaf, jumlah penarikan harus antara {down}~{up}' // ida: 'Maaf , Jumlah yang anda masukkan tidak benar'

          },
          HallWithdrawalMessage: {
            zh: '请选择提现到账的银行信息',
            en: '',
            ida: 'Tolong memilih akun bank yang akan melakukan withdraw'
          },
          HallWithdrawalBank: {
            zh: '请选择有效的提现渠道',
            en: '',
            ida: 'Silahkan pilih saluran ekstraksi yang valid'
          },
          WithdrawalApply: {
            zh: '提现申请发送成功',
            en: '',
            ida: 'Permohonan penarikan berhasil dikirim'
          },
          SureDeleteMail: {
            zh: '您确定要删除此消息吗？',
            en: '',
            ida: 'Apakah anda yakin akan menghapus pesan ini ?'
          },
          TurntableCue: {
            zh: '对不起,该活动已结束!',
            en: '',
            ida: 'Maaf, acara ini telah berakhir!'
          }
        },
        BankModule: {
          BankPassword: {
            zh: '您的银行密码设置成功！',
            en: '',
            ida: 'Kata sandi bank anda berhasil di tukar !'
          },
          BankTransfer: {
            zh: '您的银行金币转移成功！',
            en: '',
            ida: 'Saldo bank anda berhasil di pindahkan !'
          }
        },
        BaseBoardModule: {
          BaseBoardBeat: {
            zh: '认证成功',
            en: '',
            ida: 'Pendaftaran berhasil !'
          },
          BaseBoardLogin: {
            zh: '抱歉，您的登录信息变更，已自动退出~',
            en: '',
            ida: 'Maaf , Data login anda berubah ,akun telah dikeluarkan secara otomatis'
          },
          BaseBoardExit: {
            zh: '对不起，退出失败',
            en: '',
            ida: 'Maaf , Gagal Keluar'
          },
          BaseBoardUpdate: {
            zh: '请更新App至最新版本',
            en: '',
            ida: 'Silahkan mengupgrade App ke versi paling baru'
          },
          operateDone: {
            zh: '操作完成',
            en: '',
            ida: 'Operasi selesai'
          },
          DataException: {
            zh: '数据加载异常',
            en: '',
            ida: 'Pengecualian pemuatan data'
          }
        },
        BindPhoneModule: {
          BindPhoneChange: {
            zh: '修改成功',
            en: '',
            ida: 'Operasi sukses'
          },
          DoneSuccess: {
            zh: '修改成功',
            en: '',
            ida: 'Pembaruan berhasil'
          },
          BindPhoneSend: {
            zh: '验证信息已经发送，请注意查收',
            en: '',
            ida: 'Info verifikasi telah di kirim ,silahkan di cek'
          },
          BindPhonesSendError: {
            zh: '验证信息发送失败',
            en: '',
            ida: 'Info verifikasi gagal di kirim'
          }
        },
        loginModule: {
          LoginRemind: {
            zh: '请登录',
            en: '',
            ida: 'Silakan log masuk'
          },
          LoginMark: {
            zh: '已自动登录',
            en: '',
            ida: 'Telah Log in secara otomatis'
          },
          LoginSuccess: {
            zh: '已自动登录账号',
            en: '',
            ida: 'Telah Log in secara otomatis'
          },
          LoginCode: {
            zh: '登录验证已经发送，请注意查收',
            en: '',
            ida: 'Info verifikasi telah di kirim ,silahkan di cek'
          }
        },
        MainPaneModule: {
          MainPanelCodeError: {
            zh: '不能输入自己的推荐码',
            en: '',
            ida: 'Tidak boleh memasukan kode referral sendiri'
          },
          MainPanelPromotion: {
            zh: '您输入的推荐人不存在',
            en: '',
            ida: 'Orang referral yang anda masukkan tidak berdaftar'
          },
          ShareSure: {
            zh: '绑定成功',
            en: '',
            ida: 'Pengikatan berhasil'
          },
          ShareCopy: {
            zh: '复制推广链接成功，快去邀请好友一起玩吧！',
            en: '',
            ida: 'Link berhasil di salin , cepat mengajak teman anda bermain !'
          },
          NoGiftData: {
            zh: '没有礼包数据!',
            en: '',
            ida: 'Tidak ada data paket hadiah!'
          },
          LoadUrlError: {
            zh: '此链接无法加载!',
            en: '',
            ida: 'Tautan ini tidak dapat dimuat!'
          }
        },
        PersonCenterModule: {
          PersonCenterEdit: {
            zh: '编辑成功',
            en: '',
            ida: 'Edit berhasil'
          },
          PersonCenterSumbit: {
            zh: '操作过于频繁，请稍等',
            en: '',
            ida: 'Operasi ini terlalu sering, harap tunggu'
          }
        },
        palyingModule: {
          GameExit: {
            zh: '您正在游戏中，请游戏结束后重试。',
            en: '',
            ida: 'Kamu sedang berada di permainan , silahkan dicoba setelah permainan selesai'
          },
          CrashBottomFailed: {
            zh: '下注不合法',
            en: 'Bet illegal',
            ida: 'Taruhan ilegal'
          },
          RechangeGlod: {
            zh: '对不起，您的金币不足，请充值!',
            en: '',
            ida: 'Maaf , saldo anda tidak cukup ,silakan melakukan deposit'
          },
          ExceedUpper: {
            zh: '对不起，您的金币改房间进入要求!',
            en: '',
            ida: 'Maaf , saldo anda tidak cukup ,silakan melakukan deposit'
          },
          ExceedUpper1: {
            zh: '对不起，您不符合进入条件，是否进入系统匹配房间!',
            en: '',
            ida: 'Maaf anda tidak memenuhi syarat untuk masuk , apakah masuk ke kamar yang sesuai sistem !'
          }
        },
        InitGameModule: {
          HoldOn: {
            zh: '请稍后...',
            en: 'Hold on please…',
            ida: 'Mohon bersabar'
          },
          GameBoardInit: {
            zh: '游戏初始化失败',
            en: 'game init failed',
            ida: 'Reset permainan gagal'
          },
          GameBoardInitAndGotoUrl: {
            zh: '游戏初始化失败，选择确认将重启',
            en: 'game init failed',
            ida: 'Inisialisasi game gagal, Pilih Konfirmasi untuk mem-boot ulang'
          },
          FetcherFaild: {
            zh: '数据加载失败',
            en: '',
            ida: 'Data gagal di muat'
          },
          BetFaild: {
            zh: '{0} 筹码下注失败',
            en: '',
            ida: '{0} Taruhan chip gagal'
          }
        },
        InputModule: {
          isNotEmpty: {
            zh: '输入的信息不能为空',
            en: '',
            ida: 'Data yang di masukkan tidak boleh kosong'
          },
          isAllNumber: {
            zh: '输入的内容必须是纯数字',
            en: '',
            ida: 'Silakan masukkan isi yang harus menjadi nomor murni'
          },
          isDecimal: {
            zh: '您输入的金额不合法',
            en: '',
            ida: 'Jumlah yang di masukkan tidak diperbolehkan'
          },
          isPhoneNumber: {
            zh: '输入的手机号码不合法(11~13位纯数字)',
            en: '',
            ida: 'Nomor handphone yang di masukkan tidak di perbolehkan (11 ~ 13 digit)'
          },
          isIDAPhoneNumber: {
            zh: '输入的手机号码不合法(8 + 10~12位纯数字)',
            en: '',
            ida: 'Nomor handphone yang di masukkan tidak di perbolehkan (8 + 10 ~ 12 digit)'
          },
          isSmsCode: {
            zh: '请输入正确的手机验证码',
            en: '',
            ida: 'Silahkan memasuki kode verifikasi dengan benar'
          },
          isChartLength: {
            zh: '请输入 {num1} ~ {num2} 位字符',
            en: '',
            ida: 'masukkan {num1} ~ {num2} aksara'
          },
          inputFaildCustomer1: {
            zh: '渠道号码必须以08开头',
            en: '',
            ida: 'Nomor saluran harus dimulai dengan 08'
          }
        },
        UpdateModule: {
          GameConfig: {
            zh: '请更新App至最新版本{version}',
            en: '',
            ida: 'Silahkan mengupgrade App ke versi paling baru {version}'
          },
          GameNotice: {
            zh: '对不起，系统维护中，请稍后再尝试登录',
            en: '',
            ida: 'Maaf, sistem sedang dalam pemeliharaan, silakan coba login lagi nanti'
          },
          VersionLabel: {
            zh: '本地版本:v{localVersion}, 线上版本:v{serverVersion}',
            en: '',
            ida: 'Versi lokal:v{localVersion}, Versi online:v{serverVersion}'
          },
          UpdateProgress: {
            zh: '正在更新中,请耐心等待({time}%)...',
            en: '',
            ida: 'Sedang update , silahkan menunggu ({time}%)...'
          },
          OnNeedToUpdate: {
            zh: '有最新的资源包({version})需要更新，点确认开始下载',
            en: '',
            ida: 'Ada paket sumber daya terbaru ({version}) yang perlu diperbarui, klik Konfirmasi untuk mulai mengunduh' // ida: 'Mendeteksi versi baru , apakah melakukan update?'

          },
          DetectCompleted: {
            zh: '检测完成，即将进入游戏>>',
            en: '',
            ida: 'Persiapan selesai , segera memasuki permainan>>'
          },
          DetectComplete: {
            zh: '检测完成，即将进入游戏',
            en: '',
            ida: 'Persiapan selesai , segera memasuki permainan'
          },
          UpdateFail: {
            zh: '更新失败',
            en: '',
            ida: 'Update gagal'
          },
          RestartProgram: {
            zh: '更新失败，是否要重启程序？',
            en: '',
            ida: 'Update gagal , apakah mau coba ulang?'
          },
          ClientCheck: {
            zh: '客户端开始检查>>',
            en: '',
            ida: 'Periksa Mula Klien >>'
          },
          CheckUpdatedPkg: {
            zh: '检查更新包...',
            en: '',
            ida: 'Periksa paket terbaru...'
          },
          isNative: {
            zh: '非native版本不检查更新，即将进入游戏',
            en: '',
            ida: 'Versi bukan asli tidak memeriksa pemutakhiran dan akan segera memasuki permainan'
          }
        },
        withdrawal: {
          withdrawalSuccess: {
            zh: '恭喜您绑定成功，获得{gold}金币奖励！',
            en: '',
            ida: 'Selamat berhasil mendaftar dan mendapatkan {gold} koin sebagai hadiah !'
          },
          flllowWaterNoLevel: {
            zh: '抱歉，你的投注额未达到提现标准！',
            en: '',
            ida: 'Maaf, taruhan Anda tidak memenuhi kriteria penarikan!'
          },
          GotoServiceModify: {
            zh: '请联系客服修改',
            en: '',
            ida: 'Silakan hubungi layanan pelanggan untuk memodifikasi'
          }
        }
      };

      _export("default", languagePkg);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=279cf40b058604f7845452a615963efe8f9ba7fc.js.map