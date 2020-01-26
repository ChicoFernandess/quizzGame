export default class User {
    constructor(username, password, xp, avatar,typeUser){
        this.username = username
        this.password = password
        this.xp = xp
        this.avatar = avatar
        this.typeUser = typeUser
    }
    static compare3(xp1, xp2) {    // recebe os valores de xp e compara 1 a 1
        if(xp1.xp > xp2.xp) 
            return -1;
        if(xp1.xp < xp2.xp)
            return 1;
       return 0;
   }
}

