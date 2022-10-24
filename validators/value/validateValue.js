const validateValue = (val) => {
    return val > 0 ? (val < 100 ? true : false) : false;
}
module.exports = validateValue;
