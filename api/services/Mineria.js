var R = require("r-script");

module.exports = {
    holaMundo: (data) => {
        var out = R("assets/RScripts/ex-sync.R")
            .data(data, 20)
            .callSync();

        console.log(out);

        return out;
    }

};