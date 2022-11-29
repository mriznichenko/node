/* Level 1.2. RegEx */



// todo add more cases
const validMails = [
    "firstpart@secondpart.field",
    "firstpart@secondpart.ab",
    "firstpart@secondpart.abcd",
    "firstpart@secondpart.abcde",
    "a1@b.&’*/^-!$_%=+?.c",
    "a1@1.&’*/^-!$_%=+?.c",
    "a1@.&’*/^-!$_%=+?.c",
    "a1@&’.*/^-!$_%?=+.c",
    "a1@b.c",
    "a12a@b.c",

    "firstpart@secondpart.end",
    "fi@secondpart.end",
    "first-part@.se=cond%p.art.end",
    "first.part@se=cond%part.r",
];

const invalidMails = [
    "firstpart@secondpart.abcdef",
    "firstpartfirstpartfirstpart@secondpart.end",
    "a1@b>>&33.c",
    "f@secondart.end",
    ".fi@secondpart.end",
    "+fi@secondpart.end",
    "first-part@.se=cond@part.end",
    "-firstpart@.se=cond%.enddeded",
    "firs_tpart@.se.en",
    "firstpart@.se.enddeded"
];

const validPhones = [
    "+38 (099) 567 8901",
    "0995678901",
    "  - 0995678901",
    "099 567 8901",
    "099 567 89 01",
    "099-567-89-01",
    "(099)5678901",
    "099 5 6 7-8 9 - 0 1",
    "+38 099 5 6 7 8 9  01",
    "(09-9) 567-890-1",
    "(0-9-9)5678901",
    "+38(0-9-9)5678901",
    "--  (099) 567 890-1"
]

const invalidPhones = [
    "+38 (099) 567 8901 0",
    "+38 099 a0000000",
    "+38 (0989) 567 8901",
    "+48 (099) 567 8901",
    "38 (099) 567 8901",
    "0 9 9 5 6 --- 7 8 9 ---0 1" // invalid only because too long
]

const validPasswords = [
    "C00l_Pass",
    "SupperPas1"
]
const invalidPasswords = [
    "Cool_pass",
    "C00l",
    "Without_Numbers",
    "without_numbers"
]

let Validator = {
    validateEmail: function (email) {
        const mailRgx = /[a-z0-9]{1}[a-z0-9+-.]{1,19}?@[\w.!$%&’*+/=?^-]{1,15}\.[a-z0-9]{1,5}/i;
        return email === (email.match(mailRgx) ?? [])[0];
    },
    validatePhone: function (number) {
        const phoneRgx = /^(\+[ -]*3[ -]*8[ -]*){0,1}( |-)*?\(?(\d( |-)*?){3}\)?( |-)*(\d( |-)*){7}$/
        return number.length < 25 && number === (number.match(phoneRgx) ?? [])[0];

    },
    validatePassword: function (password) {
        const passRgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_]{8,}$/g;
        return (password.match(passRgx) ?? [])[0] === password;
    }
};


/**
 * 
 * @param {Array.<string>} validCases 
 * @param {Array.<string>} invalidCases 
 * @param {Validator~requestCallback} callback 
 * @returns {string} contains the testing result message(includes field function name)
 */
function testValidatorFunction(validCases, invalidCases, callback, printAllCasesAnyway) {
    let validFails = validCases.filter(e => callback(e) === false);
    let invalidFails = invalidCases.filter(e => callback(e) === true);

    let oneCaseTest = (i, expectedValue) => `${callback(i) === expectedValue ? "✔️" : "❌"} ${i}`;
    let allTestsPassed = invalidFails.length == 0 && validFails.length == 0;
    let fooName = callback.name + "()";

    let frame = "\n" + "-".repeat(fooName.length + 3);
    console.log(frame + "\n" + (allTestsPassed ? "✔️" : "❌") + " " + fooName + frame)

    if (!allTestsPassed || printAllCasesAnyway) {
        console.log("\nvalid cases (✔️ if true):");
        for (let i of validCases) {
            console.log(oneCaseTest(i, true));
        }

        console.log("\ninvalid cases (✔️ if false):");
        for (let i of invalidCases) {
            console.log(oneCaseTest(i, false));
        }
    }

}

testValidatorFunction(validMails, invalidMails, Validator.validateEmail, true)
testValidatorFunction(validPhones, invalidPhones, Validator.validatePhone, true)
testValidatorFunction(validPasswords, invalidPasswords, Validator.validatePassword, true)

