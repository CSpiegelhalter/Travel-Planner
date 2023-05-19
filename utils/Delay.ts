/**
 * An async delay function. Call and await it to have a delay
 * @param time The time, in milliseconds (ex. 5000 = 5 seconds), that we will delay before continuing code execution
 */
export const delay = (time: number) => new Promise(res => setTimeout(res, time));
