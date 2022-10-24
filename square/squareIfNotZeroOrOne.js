const squareIfNotZeroOrOne = (value) => {
    return value !== 0 ? (value !== 1 ? Math.pow(value, 2) : value) : value;
}

module.exports = squareIfNotZeroOrOne;
