let currentIndex = 0;

const memories = [
    {
type: "image",
        image: "1.jpg",
        text: "Hello Ishaaaa, you remember this picture? OUR FIRST PICTURE TOGETHER! Yarr this was the most lovely day, me you and hamari baate. I love the way tu mujhe hug krti hai, tu hai to mujhe fir aur kya chahiye. Kisi ka na madad na dua chahiye, tu hai to mujhe fir aur kya chahiye...💕",
        audio: "song1.mp3"
    },
    {
	type: "image",
        image: "2.jpeg",
        text: "Meri Freshers thi, but still you came. It was a very big hustle to get you in freshers, but I never let you down. And finally we enjoyed freshers party, I still miss us on that day, par abhi to bhot saari cheeze krni hai, sem 2 and your sem 4 is going to be love love and love for us.",
        audio: "song2.mp3"
    },
    {
	type: "image",
        image: "3.jpeg",
        text: "When I asked you tu saree me kitni sundar lagti hogi, you said (pehnkar dikhau?) aur literally you look so beautiful, seriously kab tu mujhe irl saree me milegi, you are just over the world Isha. Nazar na lage bas",
        audio: "song3.mp3"
    },

{
    type: "image",
    image: "4.jpeg",
    text: "This is the day jab maine tere liye jhumke jeete the, we were so happy we that winning. Maine tujhe wo jhumke pehnaye, we kissed, held our hands together, clicked photos. I just love you so much ❤️",
    audio: "song4.mp3"
},

{
    type: "image",
    image: "5.jpeg",
    text: "It was the Official Ethnic Day! Look we are so close, just perfecttt. I am this close to your heart and I will never go away, I promise you ISHA. Enna sona, rab ne banaya tennu....",
    audio: "song5.mp3"
},

 {
        type: "final",
        text: `And this not the end, we have a lots of unending memories, and a lot will add up in future! Mujhe maaf kardio, mai tujhse jitna kalesh karta hun. I realised mujhe ye sab kyun hora tha, mai pehle jaisa wahi hun abh, jaise pyaar krta tha. Mai tujhse jaldi milra hun. Ye baat sochkar bhi mujhe itna acha lagta hai. I will be able to spend time with you irl. Isha maine galtiya kari, par is pyaar ke liye please mujhe maaf krde, let's just go back to where we were, jaha unconditionally we loved and never gave a damn about anyone else. Tu kahi nhi jayegi te mai vi ni jaawanga. I Promise to my little Nannuuu, ishiii-tishii, espressoooo. I love you Darling, always and forever!

Also agli baar se aur ache se banaunga, fever hogya tha to haath kaapre hai type krne mai, par tere liye mai kuch bhi kar skta hu, I love you Isha. I m yours forever.

Love,
(Isha’s Property 💍)`
    }

];

const img = document.getElementById("memoryImage");
const text = document.getElementById("memoryText");
const audio = document.getElementById("memoryAudio");

function loadMemory() {
    const current = memories[currentIndex];

    audio.pause();
    audio.currentTime = 0;

    // IMAGE SLIDES
    if (current.type === "image") {
        img.style.display = "block";
        img.src = current.image;
        text.style.display = "none";
    }

    // FINAL PARAGRAPH (AUTO SHOW)
    if (current.type === "final") {
        img.style.display = "none";
        text.innerText = current.text;
        text.style.display = "block";
    }
}

function showMemory() {
    text.innerText = memories[currentIndex].text;
    text.style.display = "block";

    audio.src = memories[currentIndex].audio;
    audio.play();
}

function nextMemory() {
    currentIndex = (currentIndex + 1) % memories.length;
    loadMemory();
}

function prevMemory() {
    currentIndex = (currentIndex - 1 + memories.length) % memories.length;
    loadMemory();
}

loadMemory();
