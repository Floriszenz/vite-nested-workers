import MainWorker from "./main-worker?worker";
import "./style.css";

const app = document.querySelector<HTMLDivElement>('#app')!;
const mainWorker = new MainWorker();

mainWorker.onmessage = (event) => {
    app.innerHTML = `
        <h1>Hello Vite!</h1>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
        <p>Result: ${event.data}</p>
    `
}

mainWorker.postMessage("calculate");
