export default function time(target, key, descriptor) {
  const origFn = descriptor.value.bind(target);

  descriptor.value = function(...args) {
    console.time(key);
    let value = origFn(...args);
    console.timeEnd(key);
    return value;
  };
}
