// Using terminal, create a code with Node.js: -
// 1- The user enters the data of 10 people (id,first name,last name, age and city)
// 2- The user can view the data of all people or view the data of a specific person
// 3- The user can delete all people or delete a specific person
// 4- the user can view full name (first name + last name) and the city of each person
///////////////////////////////////////////////////////////////////////////
const dataPeople = require("./dataPeople.js")
const yargs =require("yargs")

/////////////////////////////////////////////
// enter Users ....................
yargs.command({
    command :"add" ,
    describe :"Enter User",
    builder : {
        id:{
            
                describe: "This is the  ID desc in enter command",
                demandOption: true,
                type: "string",
            },
        fname: {
                describe: "This is the First Name desc in add command",
                demandOption: true,
                type: "string",
            },
        lname: {
                describe: "This is the Last Name desc in add command",
                demandOption: true,
                type: "string",
        },
    },
    handler:(x)=>{
         console.log("You have Already add item");
        dataPeople.enterPerson(x.id , x.fname , x.lname , x.age , x.city)
    }
})

//////////////////////////////////////////////////////////////
// view the data of a specific person
yargs.command({
        command:"read" ,
        describe:"To read person",
        builder:{
        id:{
            describe :"This is id dec id command" ,
            demandOption : true ,
            type:"string"
        }

    },
        handler :(x)=>{
        dataPeople.readData(x.id)  // read
    }
})

///////////////////////////////////////////////
// View the data of all people
yargs.command({
        command:"readAll" ,
        describe:"To read all people",

        handler :(x)=>{
            dataPeople.readAllData(x.id , x.fname , x.lname , x.age , x.city)  // read
    }
})


/////////////////////////////////////////////////////////////////////
// 3- The user can delete all people or delete a specific person
yargs.command({
    command: "delete",
    describe: "To delete item",

    handler: (x) => {
        dataPeople.deletedPerson( x.id ); // Data deleted ..
    },
});



////////////////////////////////////////////
// 4- the user can view full name (first name + last name) and the city of each person
yargs.command({
      command:"list" ,
      describe:"To list Data",
      handler :(x)=>{
        dataPeople.listData()  // list Data..

      }
})


////////////////////////////////////////////
yargs.parse()

