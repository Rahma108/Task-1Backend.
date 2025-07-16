
// Users Enter the Data of 10 Peoples 
// (Id , FirstName , LastName , age , city )
const fs =require("fs")

const enterPerson = (id , firstName , lastName , age , city)=>{
// تحميل و تحوبل 
// Add 
// تحويل تخزين 

const allData= loadInfo()
const duplicatedData = allData.filter((obj)=>{
   return obj.id ==id
})
if(duplicatedData.length ==0){
allData.push({
    //Add
    id:id,
    fname : firstName ,
    lname :lastName ,
    age:age ,
    city :city

})
savaData(allData)  
}else{
  console.log("ERROR duplicated Data")
}
};

//////////////////////////////////////////////////////////
 //2- User can View the data of all people Or view the data of a specific person..
const readData = (id)=>{
        const allData= loadInfo()
     // ببحث 
        const personNeeded = allData.find((obj)=>{
        return obj.id ==id 

    })
     // console.log(itemNeeded)
     if(personNeeded){   // true...
        console.log(personNeeded)
    }else{
        console.log("Id Needed Not Found.")
    }

}
const readAllData = ()=>{
    const allData= loadInfo()
     // ببحث 
    const personNeeded = allData.map((ele)=> {
        return ele
    })
    console.log(personNeeded)
}
/////////////////////////////////////////////////////////
//3 - The user can delete all people Or delete a specific person ..
const deletedPerson= (id)=>{
        const allData = loadInfo()

        const dataToKeep = allData.filter((obj)=>{
                return obj.id !== id
        })
    console.log(dataToKeep)
    console.log("You Have SuccessFully deleted an item")
    savaData(dataToKeep)
    }
/////////////////////////////////////////////////
// 4- the user can view full name (first name + last name ) and city

const listData = ()=>{
    const allData= loadInfo()
    // ببحث 
       allData.forEach((obj)=>{
        console.log( obj.fname + " " + obj.lname ,obj.city)
       })
}
//////////////////////////////////////////////////////////
// تحميل و تحوبل 
const loadInfo = ()=>{
    try{
        const dataJson = fs.readFileSync("people10.json").toString()
        return JSON.parse(dataJson)

    }catch{
        return []
    }
}
///////////////////////////////////////////////////
const savaData =(allData)=>{
// تحويل تخزين 
 const allDataJson =JSON.stringify(allData)
 fs.writeFileSync("people10.json" , allDataJson)

}

module.exports ={
    enterPerson,
    readData ,
    readAllData , 
    deletedPerson , 
    listData

}