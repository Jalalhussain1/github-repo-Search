const url = "https://api.github.com/users";
const serachInputEl = document.getElementById("searchInput");
const searchButtonEl = document.getElementById("searchBtn");
const profileContainerEl = document.getElementById("profileContainer");

const generateProfile = (profile) => {
    return(
        `<div class="box">
        <div class="top">
            <div class="left">
                <div class="image">
                    <img alt="img" src="${profile.avatar_url}"/>
                </div>
                <div class="self">
                    <h1>${profile.name}</h1>
                    <h1>@${profile.login}</h1>
                </div>
            </div>
    </div>
    <div class="status">
        <div class="status-item">
            <h1>Followers</h1>
            <p>${profile.followers}</p>
        </div>
        <div class="status-item">
            <h1>Following</h1>
            <p>${profile.following}</p>
        </div>
    </div>
</div>`  
    )
}

const fetchProfile = async () => {

      const username = serachInputEl.value;


    try {
        const res = await fetch(`${url}/${username}`);
        const data = await res.json();
    profileContainerEl.innerHTML = generateProfile(data);


        console.log("data", data);
    } catch (error){
       console.log({error});
    }
};
searchButtonEl.addEventListener("click", fetchProfile);