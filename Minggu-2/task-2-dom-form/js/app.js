"use strict";

const peserta = [
  { id: 1, nama: "Alya", prodi: "Teknik Informatika" },
  { id: 2, nama: "Bima", prodi: "Sistem Informasi" },
];

const form = document.querySelector("#form-peserta");
const namaInput = document.querySelector("#nama");
const prodiInput = document.querySelector("#prodi");
const filterInput = document.querySelector("#filter-prodi");
const daftar = document.querySelector("#daftar-peserta");
const status = document.querySelector("#status");
const errorNama = document.querySelector("#error-nama");
const errorProdi = document.querySelector("#error-prodi");

function validasiPeserta(calon) {
  const isValidNama = calon.nama.trim().length >= 3;
  const isValidProdi = calon.prodi !== "";

  return {
    valid: isValidNama && isValidProdi,
    errorNama: isValidNama ? "" : "Nama minimal 3 karakter.",
    errorProdi: isValidProdi ? "" : "Program studi wajib dipilih.",
  };
}

function buatKartuPeserta(item) {
  const article = document.createElement("article");
  article.classList.add("kartu");

  const h2 = document.createElement("h2");
  h2.textContent = item.nama;

  const p = document.createElement("p");
  p.textContent = item.prodi;

  article.append(h2, p);
  return article;
}

function renderPeserta(data) {
  daftar.replaceChildren();

  if (data.length === 0) {
    status.textContent = "Tidak ada peserta yang sesuai.";
    return;
  }

  status.textContent = "";
  data.forEach((item) => {
    daftar.append(buatKartuPeserta(item));
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.preventDefault();

  const calon = {
    nama: namaInput.value,
    prodi: prodiInput.value,
  };
  const hasilValidasi = validasiPeserta(calon);

  errorNama.textContent = hasilValidasi.errorNama;
  errorProdi.textContent = hasilValidasi.errorProdi;

  namaInput.setAttribute("aria-invalid", String(!hasilValidasi.valid));
  prodiInput.setAttribute("aria-invalid", String(!hasilValidasi.valid));

  if (hasilValidasi.valid) {
    peserta.push({ id: Date.now(), ...calon });
    form.reset();
    renderPeserta(peserta);
  }
});

filterInput.addEventListener("change", () => {
  const pilihan = filterInput.value;
  if (pilihan === "semua") {
    renderPeserta(peserta);
  } else {
    // Saring data tanpa menimpa array aslinya
    const hasilFilter = peserta.filter((item) => item.prodi === pilihan);
    renderPeserta(hasilFilter);
  }
});

renderPeserta(peserta);
