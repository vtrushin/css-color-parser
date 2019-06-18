const toInt = str => parseInt(str, 16);

const isHex = char => (
	(char >= '0' && char <= '9')
	|| (char >= 'a' && char <= 'f')
	|| (char >= 'A' && char <= 'F')
);

/**
 * #RGB / #rgb
 * #RGBA / #rgba
 * #RRGGBBAA / #rrggbb
 * #RRGGBBAA / #rrggbbaa
 *
 * @param string {string} Hex code
 */
const parseHex = string => {
	if (!string.startsWith('#')) {
		return null;
	}

	const code = string.slice(1);

	if (!Array.from(code).every(isHex)) {
		return null;
	}

	let r, g, b, a = 1;

	if (code.length === 3 || code.length === 4) {
		r = toInt(code.slice(0, 1).repeat(2));
		g = toInt(code.slice(1, 2).repeat(2));
		b = toInt(code.slice(2, 3).repeat(2));

		if (code.length === 4) {
			a = Number((toInt(code.slice(3, 4).repeat(2)) / 255).toFixed(2))
		}

	} else if (code.length === 6 || code.length === 8) {
		r = toInt(code.slice(0, 2));
		g = toInt(code.slice(2, 4));
		b = toInt(code.slice(4, 6));

		if (code.length === 8) {
			a = Number((toInt(code.slice(6, 8)) / 255).toFixed(2));
		}

	} else {
		return null;

	}

	return { r, g, b, a };
};

module.exports = parseHex;
