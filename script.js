let userList=[] 
const= 
const apiEP= "https://randomuser.me/api/?results=20";
const fetchUser = async (url)=>{
    try {
        
    // promise using fecth to fetch data from any server, fetch()
//     fetch(url).then((dt)=>{
//    console.log(dt)
//     return dt.json()
//     }).then((data=>{
//         console.log(data)
//         userList =data.results
//         console.log(userList)
//     }
//         ))
// Aysns / Await
const dt = await fetch(url)
    const data = await dt.json()
    userList =data.results;
    display(userList)
} catch(error){
    console.log(error);
}

}
fetch(apiEP);
const display=(users)=>{
    let str=""
    users.map((item, i)=>{
        str=+
        <div class="card flex-grow-1" style="width: 18rem">
                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">${item.name.title} ${item.name.first} ${item.name.last}  </h5>
                    
                    <div class="card-text">
                      <ul class="list-unstyled">
                        <li>${item.phone} <i class="fa-solid fa-mobile-screen"></i></li>
                        <li>${item.email} <i class="fa-solid fa-envelope-circle-check"></i></li>
                        <li>${item.add} <i class="fa-solid fa-address-book"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
    })
    HTMLDataListElement.innerHTMl =str;
    console.log(users.length);
    document.getElementById("count")
    innerText =users.length;
}


const handleOnGenderSeelect =(e)=>
{
    const g= e.value;
    const url =`${apiEP}&gender=${g}`
    fetchUser(url)
}
const func =()=> {
    const {value} =e.target
}
document.getElementById("search").addEventListener(
    "keyup", (e)=>
    {
const {value} =e.target;
const filteredArg =userList.filter((usr)=>
{
    const fullName =`${usr.name.first} ${usr.name.last}`.toLowerCase();
    if(fullName.includes(value.toLowerCase())){
        return true
    }
})
    }

    
)