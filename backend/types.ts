export interface User {
    name: string;
    lastname: string;
    username: string;
    numberPhone: string;
    email: string;
    uid: string;
    id: string;
}

export const defaultUser: User = {
    name: "",
    lastname: "",
    username: "",
    numberPhone: "",
    email: "",
    uid: "",
    id: ""
};