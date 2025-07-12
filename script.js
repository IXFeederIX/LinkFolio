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
  {Instagram: "https://www.instagram.com/omarriv_clips/"},
   {Tiktok: "https://www.tiktok.com/@omarriv08_streaming/"},
   {Discord: "https://discord.gg/as2XZNEf9K"},
	{Twitter: "https://twitter.com/omarriv08"}	
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
  {Discord: "https://discord.gg/as2XZNEf9K"},
	{Twitter: "https://twitter.com/omarriv08"}
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

const links = document.querySelector('.links'); // Select your 'links' element
const infoContainer = document.querySelector('.info-container'); // Select your info container

if (links && infoContainer) { // Check if both elements exist
  links.addEventListener('mouseover', (e) => {
    infoContainer.style.display = 'flex';
  });

  links.addEventListener('mouseout', (e) => {
    infoContainer.style.display = 'none'; // Hide on mouseout
  });

} else {
  console.error("One or both of the required elements were not found.");
}
