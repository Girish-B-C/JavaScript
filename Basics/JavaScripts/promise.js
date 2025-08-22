function waitAndResolve() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000); // 2 seconds
  });
}

// Usage
waitAndResolve().then((result) => console.log(result));
// Output after 2 sec -> "done"
