import type { Enum } from "./Enum";

export type Task = {
    id: number,
    title: string,
    description: string,
    status: Enum,
    isTemp?: boolean,
}