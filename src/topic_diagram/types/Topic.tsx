export interface Topic {
    depth: number;
    text: string;
    timestamp: Date;
    children?: Topic[]
}