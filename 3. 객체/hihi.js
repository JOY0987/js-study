const user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (const key in user) {
    // 키
    console.log( key );  // name, age, isAdmin
    // 키에 해당하는 값
    console.log( user[key ); // John, 30, true
  }
