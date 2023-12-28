"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCardType = void 0;
const fenextjs_interface_1 = require("fenextjs-interface");
const GetCardType = (n) => {
    const number = `${n}`;
    // visa
    let re = new RegExp("^4");
    if (number.match(re) != null)
        return fenextjs_interface_1.Card_Enum.VISA;
    // Mastercard
    // Updated for Mastercard 2017 BINs expansion
    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number))
        return fenextjs_interface_1.Card_Enum.MASTERCARD;
    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
        return fenextjs_interface_1.Card_Enum.AMEX;
    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
        return fenextjs_interface_1.Card_Enum.DISCOVER;
    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null)
        return fenextjs_interface_1.Card_Enum.DINERS;
    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re) != null)
        return fenextjs_interface_1.Card_Enum.DINERS_CARTE_BLANCHE;
    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null)
        return fenextjs_interface_1.Card_Enum.JCB;
    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null)
        return fenextjs_interface_1.Card_Enum.VISA_ELECTRON;
    return fenextjs_interface_1.Card_Enum.OTHER;
};
exports.GetCardType = GetCardType;
//# sourceMappingURL=index.js.map