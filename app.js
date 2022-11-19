const contentContainer = document.querySelector("content-container");
const adviceId = document.querySelector(".advice-id");
const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn");

const getNewQuote = async () => {
  await fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let slipData = data.slip;
      let id = slipData.id;
      let newQuote = slipData.advice;
      adviceId.innerHTML = `ADVICE #${id}`;
      quote.innerHTML = `“${newQuote}”`;
    });
};

btn.addEventListener("click", getNewQuote);
