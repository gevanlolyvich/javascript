import { doSomething } from "./util1.js";

async function promiseWithAsyncAwait() {
    try {
        console.log('start');

        const result = await doSomething();
        console.log(result);

        console.log('end');   
    } catch (error) {
        console.log(error.message);
    }
}

promiseWithAsyncAwait();