function reverseString(name) {
  let newName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    newName += name[i];
  }
  return newName;
}
let myName = reverseString("Zuhree");
console.log(myName);

