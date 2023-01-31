class SungJuk2 {
  // 값만 다루는 클래스 : VO 또는 DTO
  #name = "";
  #kor = 0;
  #eng = 0;
  #mat = 0;
  #tot = 0;
  #avg = 0.0;
  #grd = "";
  constructor(name, kor, eng, mat) {
    this.#name = name;
    this.#kor = kor;
    this.#eng = eng;
    this.#mat = mat;
  }
  set name(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  set kor(kor) {
    this.#kor = kor;
  }
  get kor() {
    return this.#kor;
  }
  set eng(eng) {
    this.#eng = eng;
  }
  get eng() {
    return this.#eng;
  }
  set mat(mat) {
    this.#mat = mat;
  }
  get mat() {
    return this.#mat;
  }
  set tot(tot) {
    this.#tot = tot;
  }
  get tot() {
    return this.#tot;
  }
  set avg(avg) {
    this.#avg = avg;
  }
  get avg() {
    return this.#avg;
  }
  set grd(grd) {
    this.#grd = grd;
  }
  get grd() {
    return this.#grd;
  }

  // SungJuk의 부모 클래스인 Object의 메서드 toString()을 오버라이딩 할거임
  toString() {
    return `이름: ${this.#name}<br>
국어: ${this.#kor}점 영어: ${this.#eng}점 수학: ${this.#mat}점<br>
총점: ${this.#tot}점 평균: ${this.#avg}점 등급: ${this.#grd}<br><br>`;
  }
}

class SungJukService2 {
  // 기능만 다루는 클래스 : Service 또는 DAO 또는 Util
  static computeSungJuk(sj) {
    // static 메서드는 객체 생성없이 바로 호출해서 사용가능
    sj.tot = sj.kor + sj.eng + sj.mat;
    sj.avg = sj.tot / 3;
    switch (parseInt(sj.avg / 10)) {
      case 10:
      case 9:
        sj.grd = "수";
        break;
      case 8:
        sj.grd = "우";
        break;
      case 7:
        sj.grd = "미";
        break;
      case 6:
        sj.grd = "양";
        break;
      default:
        sj.grd = "가";
        break;
    }
  }
}
