export interface User {
    username: string;
    role: 'admin' | 'user' | 'guest';
    firstName: string;
    lastName: string;
    middleName: string;
    avatar: string;
    createdOn: string;
    updatedOn: string;
    lastEntry: string;
    isActive: boolean;
    id: string;
}

export class LoadUsers {
    static readonly type = '[App] Load Users';
}