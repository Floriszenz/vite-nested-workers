self.onmessage = (event) => {
    if (event.data === "calculate") {
        setTimeout(() => {
            self.postMessage(42);
        }, 2000);
    }
}
