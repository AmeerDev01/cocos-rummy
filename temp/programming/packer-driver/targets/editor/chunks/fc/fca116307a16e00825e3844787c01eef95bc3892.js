System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f503w5AyBG1ZLIlR60jCQ6", "copyToClipboard", undefined);

      _export("default", (str, cb) => {
        var input = str + '';
        const el = document.createElement('textarea');
        el.value = input;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS

        const selection = getSelection();
        var originalRange = null;

        if (selection.rangeCount > 0) {
          originalRange = selection.getRangeAt(0);
        }

        document.body.appendChild(el);
        el.select();
        el.selectionStart = 0;
        el.selectionEnd = input.length;
        var success = false;

        try {
          success = document.execCommand('copy');
        } catch (err) {}

        document.body.removeChild(el);

        if (originalRange) {
          selection.removeAllRanges();
          selection.addRange(originalRange);
        }

        cb && cb(success);

        if (success) {
          console.log("复制成功");
        } else {
          console.log("复制失败");
        }

        return success;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fca116307a16e00825e3844787c01eef95bc3892.js.map