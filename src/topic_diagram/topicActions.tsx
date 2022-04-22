export const createNewTopic = (txt: string, depth: number) => ({
    depth: depth,
    text: txt,
    timestamp: new Date()
});
