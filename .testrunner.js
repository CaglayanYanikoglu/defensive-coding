const attackNumber = process.argv[2];
if (!attackNumber) {
  console.error(
    "Oops. You need one more argument - the number of the attack you want to test\n"
  );
  process.exit(1);
}
const { random } = Math;

const secret1 = "secret" + random().toFixed(6).substring(2);
const secret2 = "secret" + random().toFixed(6).substring(2);

import { makeAuthzManager } from "./authz.js";

async function run() {
  let attacker;
  try {
    attacker = await import(`./attacks/attack${attackNumber}.js`);
  } catch (e) {
    process.exit(1);
  }

  const au = makeAuthzManager();

  au.setSecrets([secret1, secret2]);
  attacker.attack(au);
}
run();
