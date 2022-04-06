import { Topic } from "./types/Topic";

export const addTopic = (txt: string, depth: number): Topic => ({
    depth: depth,
    text: txt,
    timestamp: new Date(),
})