// share

let shareData = {
  title: `*Happy Eid Al-Fitr!*`,
  text: `Senja ramadhan beranjak pergi, berganti fajar Syawal di pagi hari. Membawa cahaya kedamaian diujung ramadhan, menebar berkah di hari kemenangan.
  Marilah kita saling bermaaf-maafan, agar langkah kita menuju kebahagiaan.
  Minal aidzin wal faidzin, mohon maaf lahir dan batin🙏😇
  `,
  url: "https://himatif-twibbon.vercel.app",
};

const btn = document.querySelector("em");
const resultPara = document.querySelector(".result");

btn.addEventListener("click", () => {
  navigator
    .share(shareData)
    .then(() => (resultPara.textContent = "Twibbon berhasil dibagikan"))
    .catch((e) => (resultPara.textContent = "Kesalahan: " + e));
});
