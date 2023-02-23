const user = { id: 1, name: "Gorib Aamir", job: "actor" };
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/* 
{ id: 1, name: 'Gorib Aamir', job: 'actor' }
{"id":1,"name":"Gorib Aamir","job":"actor"}
*/

const shop = {
  owner: "alia",
  Address: {
    street: "kochukhat voot er goli",
    city: "ranbir",
    country: "BD",
  },
  product: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObject = JSON.parse(shopJSON);
console.log(shopObject);
