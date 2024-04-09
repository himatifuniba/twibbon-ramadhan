const main = document.getElementById("root");

const externalHTML = `
<main>
    <h1>Happy Eid Al-Fitr✨</h1>
    <p>Sambut Hari Raya Idul Fitri dengan menggunakan Twibbon Hari Raya Idul Fitri Bersama HIMATIF UNIBA MADURA.</p>
    <p>Klik Pilih file unggah foto terbaik Anda dan atur foto Anda sesuai keinginan Anda, kemudian klik Download untuk mengunduh hasil twibbon.</p>
    <p><canvas id="c"></canvas></p>
    <p><strong>Ramaikan bersama!</strong> Informatika UNIBA MADURA bersama HIMATIF menyala abangkuuu 🔥🔥🔥🌾</p>
    <p><strong>NB: </strong> Kita memanfaatkan yang gratis agar bisa berkreatifitas dan memanfaatkan apa yang ada sesuai kebutuhan bukan gaya, contohnya web ini dihosting gratis menggunakan vercel 😉</p>
    <p style="color:red;" id="imgError"></p>
    <p>
    <input type="file" id="uploadBtn" style="display: none">
    <input type="file" id="uploadFile" accept="image/png, image/jpeg" hidden/>
    <label class="button black" for="uploadFile">PILIH FILE</label>
    <button class="button" id="download" data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Mengunduh...">DOWNLOAD</button>
    <button id="cancel" onclick="location.reload()" class="button red" data-loading-text="Menghapus...">Hapus</button>
    </p>
    <p><strong><em style="color:#38488f"><i class="fa-solid fa-share-from-square fa-beat-fade"></i> Bagikan</em></strong> Twibbon ini ke media sosial Anda.</p>
    <p class="result"></p>
    <p class="s" style="color:gray">Sudah kami proses : <span class="log"></span> orang telah membuat twibbon Hari Raya Idul Fitri 2024 bersama HIMATIF UNIBA MADURA.</p>
</main>`;
// shows the alert
main.innerHTML = externalHTML;
