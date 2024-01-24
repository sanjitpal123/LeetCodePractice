/**
 * Reverse integer
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    if (x < 0) {
        let Astring = x.toString();
        let sliced = Astring.slice(1);
        let reversed = '-' + sliced.split('').reverse().join('');
        let result = parseInt(reversed, 10);

        return result < INT_MIN ? 0 : result;
    } else {
        let reversed = parseInt(String(x).split('').reverse().join(''), 10);

        return reversed > INT_MAX ? 0 : reversed;
    }
};
