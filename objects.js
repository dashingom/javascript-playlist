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

class Admin extends User {
  deleteUser(user){
    users = users.filter(u => {
      return u.email != user.email;
    })
  }
}

userOne = new User('onkar.nawghare@gmail.com', 'Onkar Nawghare');
userTwo = new User('bgdhone@gmail.com', 'Bhagyashree');
admin = new Admin('guru@gmail.com', 'Guru');

users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);