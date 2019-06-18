const parseHex = require('./parse-hex');

it('Short', () => {
	expect(
		parseHex('#abc')
	).toEqual(
		{ r: 170, g: 187, b: 204, a: 1 }
	)
});

it('Short w/ alpha', () => {
	expect(
		parseHex('#567a')
	).toEqual(
		{ r: 85, g: 102, b: 119, a: 0.67 }
	)
});

it('Long', () => {
	expect(
		parseHex('#f48024')
	).toEqual(
		{ r: 244, g: 128, b: 36, a: 1 }
	)
});

it('Long w/ alpha', () => {
	expect(
		parseHex('#5fba7dc2')
	).toEqual(
		{ r: 95, g: 186, b: 125, a: 0.76 }
	)
});

it('Wrong', () => {
	expect(
		parseHex('#5')
	).toEqual(
		null
	)
});
