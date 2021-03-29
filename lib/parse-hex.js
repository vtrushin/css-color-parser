const isHex = char => (
	typeof char === 'string' && char.length === 1
		? !Number.isNaN(parseInt(char, 16))
		: false
)

/**
 * #RGB / #rgb
 * #RGBA / #rgba
 * #RRGGBBAA / #rrggbb
 * #RRGGBBAA / #rrggbbaa
 *
 * @param string {string} Hex code
 */
const parseHex = string => {
	if (typeof string !== 'string' || string.length < 3) {
		return null
	}

	const code = string.startsWith('#') ? string.slice(1) : string

	if (!Array.from(code).every(isHex)) {
		return null
	}

	let r, g, b, a

	if (code.length === 3 || code.length === 4) {
		r = code.slice(0, 1).repeat(2)
		g = code.slice(1, 2).repeat(2)
		b = code.slice(2, 3).repeat(2)

		if (code.length === 4) {
			a = code.slice(3, 4).repeat(2)
		}

	} else if (code.length === 6 || code.length === 8) {
		r = code.slice(0, 2)
		g = code.slice(2, 4)
		b = code.slice(4, 6)

		if (code.length === 8) {
			a = code.slice(6, 8)
		}

	} else {
		return null
	}

	return {
		r: parseInt(r, 16),
		g: parseInt(g, 16),
		b: parseInt(b, 16),
		a: a !== undefined ? parseInt(a, 16) / 255 : 1
	}
}
