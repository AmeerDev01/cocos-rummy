import { Node } from 'cc'

Number.prototype.formatAmountWithCommas = function (fractionDigits: number = 2): string {
	const amount = this as number;
	// const parts = amount.toFixed(2).split(".");
	const parts = (amount + '').split(".");
	const integerPart = parts[0];
	// const decimalPart = parts[1]
	const decimalPart = parts[1] ? ("." + (parts[1].length > 2 ? parts[1].substring(0, fractionDigits) : parts[1])) : parts[1];
	const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	const formattedAmount = +decimalPart === 0 ? formattedIntegerPart : formattedIntegerPart + (decimalPart || '');
	return formattedAmount;
}

Number.prototype.toFixedFix = function (fractionDigits: number = 2): number {
	const number = this as number;
	try {
		const parts = (number + '').split(".");
		const integerPart = parts[0];
		const decimalPart = parts[1] ? ("." + (parts[1].length > 2 ? parts[1].substring(0, fractionDigits) : parts[1])) : parts[1];
		const formattedAmount = +decimalPart === 0 ? integerPart : integerPart + (decimalPart || '');
		return +formattedAmount;
	} catch (e) {
		console.trace(e)
		return number
	}
}

Number.prototype.formatAmountWithLetter = function (): string {
	let num = this as number;
	if (!num) return "0";
	const units = ['', 'K', 'M'];
	let unitIndex = 0;

	// 将数字按照1000为基数迭代缩小
	while (num >= 1000 && unitIndex < units.length - 1) {
		num /= 1000;
		unitIndex++;
	}
	if (Number.isInteger(num)) {
		return num + units[unitIndex];
	} else {
		// 使用toFixed保留一位小数，并转换成字符串格式
		return Number(num.toFixedFix()) + units[unitIndex];
	}
}

Number.prototype.formatAmountWithLetter2 = function (isInteger: boolean): string {
	const amount = this as number;
	const parts = amount.toFixed(0).split(".");
	let inputString = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(/,(?=[^,]*$)/g, 'K').replace(/,(?=[^,]*$)/, "M").replace(/,(?=[^,]*$)/, 'B');
	const sp = inputString.split('K')
	if (!isInteger && inputString.indexOf('K') !== -1) {
		return sp[0] + "K"
	}
	if (inputString.indexOf('K') !== -1) {
		return sp[0] + "K" + (+sp[1] ? sp[1] : '');
	}
	return inputString
}

String.prototype.format = function (...value): string {
	if (value.length == 0)
		return this;
	let str = this;
	for (var i = 0; i < value.length; i++) {
		var re = new RegExp('\\{' + i + '\\}', 'gm');
		str = this.replace(re, value[i]);
	}
	return str;
}

Node.prototype.getDeepChildByName = function (nodeName: string): Node | undefined {
	const l = (this as Node).children.length;
	for (let i = 0; i < l; i++) {
		if ((this as Node).children[i].name === nodeName) {
			return (this as Node).children[i]
		} else {
			if ((this as Node).children[i].children.length) {
				const result = (this as Node).children[i].getDeepChildByName(nodeName)
				if (result) {
					return result
				}
			} else {
				continue
			}
		}
	}
}

//除法函数，用来得到精确的除法结果
Number.prototype.div = function (arg1, arg2): number {
	var t1 = 0, t2 = 0, r1, r2;
	try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
	try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
	r1 = Number(arg1.toString().replace(".", ""))
	r2 = Number(arg2.toString().replace(".", ""))
	return (r1 / r2) * Math.pow(10, t2 - t1);
}

//乘法函数，用来得到精确的乘法结果
Number.prototype.mul = function (arg1, arg2): number {
	var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
	try { m += s1.split(".")[1].length } catch (e) { }
	try { m += s2.split(".")[1].length } catch (e) { }
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

//加法函数，用来得到精确的加法结果
Number.prototype.add = function (arg1, arg2): number {
	var r1, r2, m;
	try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
	try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
	m = Math.pow(10, Math.max(r1, r2))
	return (arg1 * m + arg2 * m) / m
}

//减法函数，用来得到精确的减法结果
Number.prototype.sub = function (arg1, arg2): number {
	var r1, r2, m, n;
	try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
	try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
	m = Math.pow(10, Math.max(r1, r2));
	//last modify by deeka
	//动态控制精度长度
	n = (r1 >= r2) ? r1 : r2;
	return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}

window.addEventListener(
	"unhandledRejectedPromise",
	function browserRejectionHandler(event) {
		console.log(event)
		event && event.preventDefault();
	}
)

export { }