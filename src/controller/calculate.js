exports.calculate = total => {
    return ({
        basic: total.total * 0.55,
        education: total.total * 0.1
    })
};
