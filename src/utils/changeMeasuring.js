export const measurements = {
	CELCIUS: "CELCIUS",
	FAHRENHEIT: "FAHRENHEIT",
};

export function kmToMile(num) {
	return Math.round(num / 1.60934);
};

export function mileToKm(num) {
	return Math.round(num * 1.60934);
};

export function roundData(num) {
	return num.toFixed();
};

