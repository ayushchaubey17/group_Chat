
let mongoose = require('mongoose');
const Chat = require('./models/chat.js')

main().then((res)=>{console.log("success")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
    from : "neha",
    to : "priya",
    msg: "send me notes",
    created_At : new Date()
  },
  {
    from : "ram",
    to : "syam",
    msg: "send me book",
    created_At : new Date()
  },{
    from : "mohan",
    to : "sohan",
    msg: "send me money",
    created_At : new Date()
    
  }
];

Chat.insertMany(allChats);
  
  
  
  