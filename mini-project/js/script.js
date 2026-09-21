const button = document.getElementById("btn-tema");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

const btnUp = document.getElementById("btn-up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
});

btnUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    const isOpen = answer.classList.contains("show");

    faqButtons.forEach(function (semuaTombol) {
      semuaTombol.nextElementSibling.classList.remove("show");
      semuaTombol.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      answer.classList.add("show");
      this.setAttribute("aria-expended", "true");
    }
  });
});

const btnMenu = document.getElementById("btn-menu");
const navMenu = document.querySelector("nav");

btnMenu.addEventListener("click", function () {
  const isMenuOpen = navMenu.classList.toggle("nav-active");
  if (isMenuOpen) {
    this.setAttribute("aria-expanded", "true");
  } else {
    this.setAttribute("aria-expanded", "false");
  }
});

const dataMateri = [
  {
    judul: "Hiragana",
    deskripsi: "Membaca dan menulis 46 huruf dasar untuk pemula.",
    kategori: "huruf",
  },
  {
    judul: "Katakana",
    deskripsi:
      "Mempelajari huruf untuk kata serapan asing dan nama non-Jepang.",
    kategori: "huruf",
  },
  {
    judul: "Kanji",
    deskripsi:
    "Karakter logogram asal Tiongkok yang digunakan dalam sistem penulisan bahasa Jepang.",
    kategori: "huruf"
  },
  {
    judul: "Grammar",
    deskripsi:
      "Memahami struktur kalimat dan pola tata bahasa dasar ujian JLPT.",
    kategori: "tatabahasa",
  },
  {
    judul: "Choukai",
    deskripsi: "Kemampuan atau latihan mendengarkan (listening) dalam bahasa Jepang.",
    kategori: "ginou"
  },
  {
    judul: "Dokkai",
    deskripsi: "Kemampuan atau latihan membaca dan memahami teks (reading) bahasa Jepang.",
    kategori: "ginou"
  },
  {
    judul: "Kaiwa",
    deskripsi: "Kemampuan atau latihan berbicara dan bercakap-cakap (speaking) dalam bahasa Jepang.",
    kategori: "ginou"
  },
  {
    judul: "Sakbun",
    deskripsi: "Kemampuan atau latihan menulis esai/karangan (writing) dalam bahasa Jepang.",
    kategori: "ginou"
  }
];

const wadahMateri = document.getElementById("materi-list");

function renderMateri(dataYangMauDicetak) {
  wadahMateri.innerHTML = "";

  dataYangMauDicetak.forEach(function (item) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const judulEl = document.createElement("h3");
    judulEl.textContent = item.judul;

    const deskripsiEl = document.createElement("p");
    deskripsiEl.textContent = item.deskripsi;

    cardDiv.appendChild(judulEl);
    cardDiv.appendChild(deskripsiEl);

    wadahMateri.appendChild(cardDiv);
  });
}
renderMateri(dataMateri);

const tombolFilter = document.querySelectorAll('.btn-filter');
tombolFilter.forEach(function(tombol) {
  tombol.addEventListener('click', function() {
    const kategoriPilihan = this.getAttribute('data-kategori');

    let dataHasilFilter = [];

    if (kategoriPilihan === 'semua') {
      dataHasilFilter = dataMateri;
    } else {
      dataHasilFilter = dataMateri.filter(function(item) {
        return item.kategori === kategoriPilihan;
      });
    }
    renderMateri(dataHasilFilter);
  });
});

const formKontak = document.getElementById('form-kontak');
const pesanNotif = document.getElementById('pesan-notif');

formKontak.addEventListener('submit', function(event) {
  event.preventDefault();

  const nilaiNama = document.getElementById('nama').value;
  const nilaiEmail = document.getElementById('email').value;
  const nilaiPesan = document.getElementById('textarea').value;

  if (nilaiNama.trim() === '' || nilaiEmail.trim() === '' || nilaiPesan.trim() === '') {
    pesanNotif.textContent = 'Data belum lengkap, silahkan isi semua kolom';
    pesanNotif.style.color = 'red';
    pesanNotif.style.display = 'block';
  } else {
    pesanNotif.textContent = 'Pesan berhasil dikirim! Terima kasih, ' + nilaiNama;
    pesanNotif.style.color = 'green';
    pesanNotif.style.display = 'block';

    formKontak.reset();
  }
});