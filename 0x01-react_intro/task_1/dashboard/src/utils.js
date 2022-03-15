// Gets current year and returns it
const getFullYear = () => {
    return new Date().getFullYear()
};

const getFooterCopy = (isIndex) => isIndex ? "Holberton School" : "Holberton School main dashboard";


module.exports = {
    getFullYear,
    getFooterCopy,
};
