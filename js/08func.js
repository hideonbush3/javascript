function computeLeapYear(year) {
    let result = "평년";
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        result = "윤년";
    }
    return result;
}
function showStarPyramid(floor) {
    let result = "";
    for (let j = 1; j <= floor; ++j) {
        // 층 반복문
        for (let i = 1; i <= j; ++i) {
            // 별 반복문
            result += "*";
        }
        result += "<br>";
    }
    document.write(result);
}
function showAMPM(time) {
    let result = `오전 ${time} 입니다.`;
    if (Number(time[0] + time[1]) >= 12) {
        result = `오후 ${time} 입니다.`;
    }
    return result;
}
function computeSungJuk(kor, eng, mat) {
    let tot = kor + eng + mat, avg = tot / 3, grd = "가";
    switch (parseInt(avg) / 10) {
        case 10:
        case 9:
            grd = "수";
            break;
        case 8:
            grd = "우";
            break;
        case 7:
            grd = "미";
            break;
        case 6:
            grd = "양";
            break;
    }
    return `국어: ${kor}점 영어: ${eng}점 수학: ${mat}점<br>
총점: ${tot}점 평균: ${avg}점 등급: ${grd}`;
}