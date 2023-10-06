const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");


  p.innerText = text;
  if (e.results[0].isFinal) {
    
    if (text.includes("Hello")||
    text.includes("hello")||
    text.includes("Hii")||
    text.includes("hii")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Hi";
      texts.appendChild(p);
    }

    if (text.includes("Open Geeksforgeeks")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening geeks for geeks";
      texts.appendChild(p);
      window.open("https://www.geeksforgeeks.org/")
    }
    

    if (text.includes("Open Online Java compiler")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening compiler";
      texts.appendChild(p);
      window.open("https://www.tutorialspoint.com/compile_java_online.php")
    }

    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (
      text.includes("What's your name") ||
      text.includes("What is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Cifar";
      texts.appendChild(p);
    }
    if (text.includes("What's the weather")||
    text.includes("Show us the weather.")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText ="showing weather";
      texts.appendChild(p);
      window.open("https://www.accuweather.com/en/in/india-weather");
    }

    if (text.includes("Play music")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText ="Playing music";
      texts.appendChild(p);
      window.open("https://open.spotify.com/");
    }

    if (text.includes("Open YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText ="opening youtube";
      texts.appendChild(p);
      window.open("https://youtube.com/");
    }

    if (text.includes("Open Calculator")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText ="opening calculator";
      texts.appendChild(p);
      window.open("https://www.online-calculator.com/full-screen-calculator/");
    }

    if (text.includes("Book a railway ticket.")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText ="opening Railyatri";
      texts.appendChild(p);
      window.open("https://www.railyatri.in/train-ticket");
    }

    if (text.includes("What's the time?")||
    text.includes("What is the time")||
    text.includes("What time is it?")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText ="The time is";
      texts.appendChild(p);
      window.open("https://time.is/");
    }

    p = document.createElement("p");
  }
console.log(e);
})

recognition.addEventListener("end", ()=>{
  recognition.start();
});

recognition.start();