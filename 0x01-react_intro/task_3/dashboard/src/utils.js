const getFullYear = () => {
    return new Date().getFullYear()
};

const getFooterCopy = (isIndex) => isIndex ? "Holberton School" : "Holberton School main dashboard";

const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by EOD";
};

module.exports = {
    getFullYear,
    getFooterCopy,
    getLatestNotification,
};
