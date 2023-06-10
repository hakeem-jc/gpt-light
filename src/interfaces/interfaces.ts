export enum ChatType {
    USER = "user",
    BOT = "assistant",
}

export interface Message {
    role: string;
    content: string;
}