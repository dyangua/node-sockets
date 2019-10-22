import {Usuario} from "./usuario";

export class UserList {
    private list: Usuario[] = [];

    constructor() {

    }

    public add(user: Usuario) {
        this.list.push(user);
        console.log(this.list)
        return user
    }

    public updateUser(id: string, name: string) {
        for (let user of this.list) {
            if (user.id === id) {
                user.name = name
                break;
            }
        }
        console.log('========== UPDATE USER ============');
        console.log(this.list);
    }

    public getUser(id: string) {
        return this.list.find(user => user.id === id);
    }

    public getUserRoom(room: string) {
        return this.list.filter(user => user.room === room);
    }

    public deleteUser(id: string) {
        const tempUser = this.getUser(id);
        this.list.filter(user => user.id !== id);
        return tempUser;
    }

}