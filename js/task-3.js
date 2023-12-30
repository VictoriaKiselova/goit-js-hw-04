const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    if (newName) {
      this.username = newName;
      // console.log(this.username);
    }
  },

  updatePlayTime(hours) {
    if (hours) {
      this.amount = this.playTime + hours;
      // console.log(this.amount);
    }
  },

  getInfo() {
    if (this.amount) {
      return `${this.username} has ${this.amount} active hours!`;
    } else {
      return `${this.username} has ${this.playTime} active hours!`;
    }
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
