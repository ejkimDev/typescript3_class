class Person8 {
  static CITY = 'Seoul';   // 공통적으로 사용하고 싶은 데이터가 있다면 static 사용
  public static hello(){   // 메소드
    console.log('안녕하세요.');
  }
}

const p8 = new Person8();  // object 반환
// p8.hello();    // Error 발생 : 함수에 static을 붙이면 object는 함수를 메서드라고 생각하지 않는다.

Person8.hello();  // 클래스의 인스턴스 없이 호출이 가능
Person8.CITY;
