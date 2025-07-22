/** ------ Criptografia ------ */

import crypto from "crypto";

// Criar hashs - createHash()
const hash = crypto.createHash("sha256");
hash.update("password12345");
console.log(hash.digest("hex"));

// Hashes aleatórios
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString("hex"));
});