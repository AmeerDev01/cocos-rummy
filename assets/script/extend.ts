Number.prototype.formatAmountWithCommas = function (fractionDigits: number = 3): string {
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

Number.prototype.toFixedFix = function (fractionDigits: number = 3): number {
	const number = this as number;
	try {
		const parts = (number + '').split(".");
		const integerPart = parts[0];
		const decimalPart = parts[1] ? ("." + (parts[1].length > 2 ? parts[1].substring(0, fractionDigits) : parts[1])) : parts[1];
		const formattedAmount = +decimalPart === 0 ? integerPart : integerPart + (decimalPart || '');
		return +formattedAmount;
	} catch (e) {
		console.error(e)
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

window.addEventListener(
	"unhandledRejectedPromise",
	function browserRejectionHandler(event) {
		console.log(event)
			event && event.preventDefault();
	}
)

export { }