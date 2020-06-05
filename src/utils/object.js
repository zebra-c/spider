export function fill(source, name, replacement) {
  if (!(name in source)) {
    return;
  }

  const original = source[name];
  const wrapped = replacement(original);

  // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
  // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
  // tslint:disable-next-line:strict-type-predicates
  if (typeof wrapped === "function") {
    try {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __sentry_original__: {
          enumerable: false,
          value: original,
        },
      });
    } catch (_Oo) {
      // This can throw if multiple fill happens on a global object like XMLHttpRequest
      // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
    }
  }

  source[name] = wrapped;
}
