// share

let shareData = {
  title: "Ramadhan Kareem 2024 with HIMATIF UNIBA MADURA!",
  text: "Menyambut Bulan Suci Ramadhan Bersama HIMATIF UNIBA MADURA, Marhaban Ya Ramadhan🙏😇",
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
