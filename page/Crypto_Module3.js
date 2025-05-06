//! Crypto Module in Node.js- (inbuilt) use for deal with security

const crypto = require("crypto"); // first crypto module require/import

//$ 1. crypto.randomBytes(size)-
//^ Purpose- Generate cryptographically strong random data
//^ Usages- Useful for creating tokens or unique IDs.
//^ e.g- (A user clicks "Forgot Password" --> A random token is sent via email --> The token is verified during the reset process.)

//^ Usages- Generate secure API keys for third party integrations.
//^ e.g- (When creating a developer account on platform like Twitter, GitHub, a unique API key is generated.)

// const randomValue = crypto.randomBytes(8);           //@Note- The size must not be larger than 2**31 - 1.

//console.log(randomValue);                //o/p- <Buffer d9 75 26 e3 a1 7e e7 38>     here we got 8 no which is binary formate not human readable form , so we need to change in string
//console.log(randomValue.toString());     //o/p- �→�#r���   , we need to also pass some value like base64, binary ,ascii , most probably we use HexaDecimal

const randomValue = crypto.randomBytes(8).toString("hex");
console.log(randomValue); //o/p- 45cca6a2fbfb7841  (8*2=16 digit/character generate and every digit is form of hexadecimal(0-f))

//$ 2. crypto.createHash(algorithm)-
//^ Purpose- Creates a hash for a given input using algorithm like sha256.(most probably used) {others algo- SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA-3, MD5, MD4, MD2, RIPEMD-128, RIPEMD-160, RIPEMD-256, RIPEMD-320, BLAKE2, BLAKE3, WHirlpool, Tiger}
//^ Usage- Ensures data integrity (e.g verify file changes)

//^ e.g- Password Hashing(Login systems) - Hash user passwords before storing them in a database to enhance security.
//  (hashing Algorithm)-  Plan text--> Hash Function --> Hashed text
//^ A user's Password is hashed with sha256 and stored. During login, the entered password is hashed and compared.

//# It's alternative of bcrypt(third party library),but crypto.createHash is inbuilt library

// const hashValue=crypto.createHash("sha256");
// console.log(hashValue);                        //o/p- Hash {
//     _options: undefined,
//     [Symbol(kHandle)]: Hash {},
//     [Symbol(kState)]: { [Symbol(kFinalized)]: false }
//   }
//@ but this output we can't store in database

//$ we pass 3 things  -
//^ 1. kis algo k through hash kar na hai  2. update value m kis data ko change kar na hai wo value pass kar-ege  3. digest m value pass kar-ege jis formate me data ko pass kar-na hai like hex for getting data in hexadecimal format
const hashValue = crypto.createHash("sha256").update("Rock").digest("hex");
console.log(hashValue); // o/p- f302f0ea1db5df02bef4e6520435b493640eff8cf840ac709d6b5e5f746b3f76

const hashValue2 = crypto.createHash("sha256").update("Rock").digest("hex");
console.log(hashValue2); // o/p- f302f0ea1db5df02bef4e6520435b493640eff8cf840ac709d6b5e5f746b3f76

//#  so here we say update m jo value use kar-te h wo same hai, it means hash value also same. so ye ek ac-hha tar-ika hai jis-se checkout kar sk-te hai user n jo password li-kha hai verify kar-ne k li-ye weh shi hai ya nhi.
