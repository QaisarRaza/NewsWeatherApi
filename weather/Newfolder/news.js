const api = [
    {
        id:1,
        title:"Web-Developer",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aspernatur placeat dignissimos aliquam quis Reiciendis odio quasillo atque vel corporis voluptatibus sequi numquam aliquid veniam doloremque cupiditate asperiores!",
        img:"./pic.jpg"
    },
    {
        id:2,
        title:"Android",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aspernatur placeat dignissimos aliquam quis Reiciendis odio quasillo atque vel corporis voluptatibus sequi numquam aliquid veniam doloremque cupiditate asperiores!",
        img:"./pic1.jpg"
    },
    {
        id:3,
        title:"SEO Expert",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aspernatur placeat dignissimos aliquam quis Reiciendis odio quasillo atque vel corporis voluptatibus sequi numquam aliquid veniam doloremque cupiditate asperiores!",
        img:"./pic6.jpg"
    },
    {
        id:4,
        title:"Game Developer",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aspernatur placeat dignissimos aliquam quis Reiciendis odio quasillo atque vel corporis voluptatibus sequi numquam aliquid veniam doloremque cupiditate asperiores!",
        img:"./pic3.jpg"
    },
    {
        id:5,
        title:"Networking",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aspernatur placeat dignissimos aliquam quis Reiciendis odio quasillo atque vel corporis voluptatibus sequi numquam aliquid veniam doloremque cupiditate asperiores!",
        img:"./pic5.jpg"
    },
    {
        id:6,
        title:"Social Media",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aspernatur placeat dignissimos aliquam quis Reiciendis odio quasillo atque vel corporis voluptatibus sequi numquam aliquid veniam doloremque cupiditate asperiores!",
        img:"./pic.jpg"
    },
    {
        id:7,
        title:"Youtuber",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aspernatur placeat dignissimos aliquam quis Reiciendis odio quasillo atque vel corporis voluptatibus sequi numquam aliquid veniam doloremque cupiditate asperiores!",
        img:"./pic6.jpg"
    },
    {
        id:8,
        title:"FrontEnd Developer",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aspernatur placeat dignissimos aliquam quis Reiciendis odio quasillo atque vel corporis voluptatibus sequi numquam aliquid veniam doloremque cupiditate asperiores!",
        img:"./pic2.jpg"
    },
    {
        id:8,
        title:"BackEnd Developer",
        detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aspernatur placeat dignissimos aliquam quis Reiciendis odio quasillo atque vel corporis voluptatibus sequi numquam aliquid veniam doloremque cupiditate asperiores!",
        img:"./pic5.jpg"
    },
]



function showData(api){
    let main = document.querySelector(".main");
    let tamplate= api.map((apiData)=>{
       return `
        <div class="card1">
        <img src=${apiData.img}></img>
        <h2>${apiData.title}</h2>
        <p>${apiData.detail}</p>
        <button>Search</button>
        </div>   
        `
    })
    main.innerHTML = tamplate.join("");
}
showData(api);



function allData(){
    let main = document.querySelector(".main");
   let tamplate = api.map((apiData)=>{
             return`
                <div class="card1">
                <img src=${apiData.img}></img>
                <h2>${apiData.title}</h2>
                <p>${apiData.detail}</p>
                <button>Search</button>
                </div>
                `
            })
            main.innerHTML =tamplate.join("");
}



function show(){
const main = document.querySelector(".main");
api.find((apiData)=>{
    if(apiData.id === 6){

        let tamplate=
        `
        <div class="card1">
        <img src=${apiData.img}></img>
        <h2>${apiData.title}</h2>
        <p>${apiData.detail}</p>
        <button>Search</button>
        </div>
        `
        main.innerHTML = tamplate;
    }
})
}

function web(){
    const main = document.querySelector(".main");
    const filteredServices = api.filter((apiData) => apiData.id === 8);
    let htmlTemplate = '';
    let tamplate = filteredServices.map((apiData)=>{
        return`
        <div class= "card1">
        <img src=${apiData.img} alt="Image Available Soon" />
        <h2>${apiData.title}</h2>
        <p>${apiData.detail}</p>
        <button>Search</button>
    </div> `
  })
  htmlTemplate += tamplate.join(""); 
main.innerHTML=tamplate;
}

function searchBar(p){
    const userInput = p.value;
    const filtered= api.filter((data) => data.title.toLowerCase().includes(userInput.toLowerCase()));
    showData(filtered);
}