class User3 {
    _userid = '';   // protected 속성으로 선언
    #passwd = '';   // private 속성으로 선언
    _name = '';
    _email = '';
    constructor(userid, passwd, name, email) {
        this._userid = userid;
        this.#passwd = passwd;
        this._name = name;
        this._email = email;
    }
}

