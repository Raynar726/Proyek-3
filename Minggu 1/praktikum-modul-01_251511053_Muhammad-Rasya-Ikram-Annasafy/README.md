# Praktikum Modul 1 Muhammad Rasya Ikram Annasafy / 251511053 / D3 Teknik Informatika

## Ringkasan halaman
Halaman ini merupakan profil statis yang dibangun menggunakan HTML semantik dan CSS murni. Tujuannya adalah menampilkan informasi personal, daftar keterampilan, dan tautan kontak dengan antarmuka yang bersih, dapat diakses, dan responsif.

## Tiga keputusan teknis
1. Menggunakan CSS Custom Properties (variabel `:root`) untuk mengelola warna dasar dan jarak (spacing) agar konsisten dan mudah dikelola ulang.
2. Menerapkan pendekatan Mobile-First menggunakan Flexbox dengan arah `column` sebagai bawaan, lalu beralih ke `row` menggunakan media query `min-width: 768px` saat ruang layar memadai.
3. Mengubah elemen `<div>` menjadi elemen bermakna seperti `<main>`, `<section>`, dan `<nav>` untuk meningkatkan struktur semantik dan kejelasan dokumen bagi browser.

## Hasil pengujian empat viewport
Pengujian dilakukan pada ukuran 320px, 375px, 768px, dan 1024px melalui fitur Device Toolbar di browser. Hasilnya, tidak ditemukan overflow horizontal pada keempat ukuran tersebut. Susunan navigasi dan teks tetap terbaca dengan jelas, serta transisi kartu dari satu kolom ke deretan baris pada layar 768px berjalan dengan mulus tanpa memotong konten di dalamnya.

## Refleksi belajar
Melalui praktikum ini, saya menyadari betapa pentingnya menggunakan elemen HTML sesuai maknanya, bukan sekadar untuk mengatur tampilan visual. Kesalahan tata letak yang sempat terjadi mengajarkan saya bahwa browser akan merender Box Model secara kaku jika kita tidak mengatur batas elemen secara tegas menggunakan `box-sizing: border-box`. Bagian yang masih perlu saya tingkatkan ke depannya adalah memperkuat intuisi dalam menentukan titik breakpoint yang tepat berdasarkan isi konten, bukan sekadar menebak berdasarkan ukuran gawai tertentu.