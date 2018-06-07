class User {
  constructor(email, name) {
    this.name = name;
    this.email = email;
  }
  login(){
    console.log(this.email, "logged in");
    return this;
  }
  logout(){
    console.log(this.email, "logged out");
    return this;
  }
}

userOne = new User('onkar.nawghare@gmail.com', 'Onkar Nawghare');
userTwo = new User('bgdhone@gmail.com', 'Bhagyashree');

console.log(userOne);
userOne.login().logout();
console.log(userTwo);
userTwo.logout().login();