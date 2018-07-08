function User(email, name){
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function(){
  this.online = true;
  console.log(this.email, "has logged in");
}

User.prototype.logout = function(){
  this.online = false;
  console.log(this.email, "has logged out");
}

function Admin(...args){
  User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
  users = users.filter(user => {
    return user.email != u.email;
  })
}

userOne = new User('onkar.nawghare@gmail.com', 'Onkar Nawghare');
userTwo = new User('bgdhone@gmail.com', 'Bhagyashree');
admin = new Admin('guru@gmail.com', 'Guru');

var users = [userOne, userTwo, admin];

console.log(admin);