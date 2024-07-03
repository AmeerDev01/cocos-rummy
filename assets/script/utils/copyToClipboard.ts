export default (str: string, cb?: Function) => {

  var input = str + '';
  const el = document.createElement('textarea');
  el.value = input;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  el.style.fontSize = '12pt'; // Prevent zooming on iOS

  const selection = getSelection()!;
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
  }
  catch (err) {

  }

  document.body.removeChild(el);

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  cb && cb(success);
  if (success) {
    console.log("复制成功");
  }
  else {
    console.log("复制失败");
  }
  return success;
}