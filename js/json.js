//API
//Application Programming Interface
//JSON 
//JavaScript Object Notation


const user = { id: 11, name: " Gorib Amir", job: 'actor' };
const stgingified = JSON.stringify(user)

//console.log(user);
//console.log(stgingified);

const shop = {
    name: 'Alia Store',
    address: 'Ranibir road',
    product: ['laptop', 'Mobile', 'pepsi'],
    IsExppesive: false
};
const shopStgingified = JSON.stringify(shop);
console.log(shopStgingified);
const converted = JSON.parse(shopStgingified);
console.log(converted);