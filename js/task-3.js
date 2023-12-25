const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(username, newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    let amount = this.playTime + hours;
    console.log(profile);
  },
  getInfo() {
    return `${Username} has ${amount} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
