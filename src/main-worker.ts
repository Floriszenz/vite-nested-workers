import SubWorker from "./sub-worker?worker";

const subWorker = new SubWorker();

self.onmessage = (event) => {
    if (event.data === "calculate") {
        subWorker.postMessage("calculate");
    }
}

subWorker.onmessage = (event) => {
    self.postMessage(event.data);
}
