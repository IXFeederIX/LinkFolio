const button = document.querySelector(".other")
const img = document.querySelector(".pic")
const body = document.body
const link = document.querySelectorAll(".link")

let click = false;

button.addEventListener("click", (e) => {
let el;

  if (!click) {
    body.classList.add("fade-in-image");


	
 let item2 = [
		 {Facebook: "https://www.facebook.com/0marriv08clips/"},
   {Github: "https://github.com/IXFeederIX/"},
  {Youtube: "https://youtube.com/@omarriv08?si=KX7UDXJDgGBSO8cY"},
  {Instagram: "https://www.instagram.com/omarriv08_clips/"},
   {Tiktok: "https://www.tiktok.com/@omarriv08_clips/"},
   {Discord: "https://discord.gg/J5wC5asjaA"}
		] 
   el = item2;
    setTimeout(() => {
      body.style.backgroundImage = "url('tree.jpg')";
      img.src = "pic2.jpg";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "none";
       body.classList.add("fade-in-image");
    }, 1000);

    click = true;
  } else {

let item = [
		 {Facebook: "https://www.facebook.com/omarriv08memes"},
   {Github: "https://github.com/IXFeederIX/"},
  {Youtube: "https://youtube.com/@omarriv08?si=KX7UDXJDgGBSO8cY"},
  {Instagram: "https://www.instagram.com/omarriv08_memes/"},
  {TikTok: "https://www.tiktok.com/@omarriv08_memes/"},
  {Discord: "https://discord.gg/J5wC5asjaA"}
		] 
    body.style.backgroundImage = "";
    img.src = "pic.jpg";

    click = false;
      el = item;
  }

   link.forEach((link, index) => {

    let key = Object.keys(el[index])[0]; 
    link.href = el[index][key];
  });


});
