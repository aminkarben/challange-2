function getInfoPenjualan(dataBuku) {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let penjualanTerbanyak = 0;
  let bukuTerlaris = "";
  let penulisStat = {};
  let penulisTerlaris = "";

  dataBuku.forEach((buku) => {
    let keuntunganPerBuku = (buku.hargaJual - buku.hargabeli) * buku.terjual;
    let modalPerBuku = (buku.terjual + buku.stok) * buku.hargabeli;

    totalKeuntungan += keuntunganPerBuku;
    totalModal += modalPerBuku;

    if (buku.terjual > penjualanTerbanyak) {
      penjualanTerbanyak = buku.terjual;
      bukuTerlaris = buku.judul;
    }

    if (penulisStat[buku.penulis]) {
      penulisStat[buku.penulis] += buku.terjual;
    } else {
      penulisStat[buku.penulis] = buku.terjual;
    }
  });

  for (let penulis in penulisStat) {
    if (
      !penulisTerlaris ||
      penulisStat[penulis] > penulisStat[penulisTerlaris]
    ) {
      penulisTerlaris = penulis;
    }
  }

  let presentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  return {
    totalKeuntungan: totalKeuntungan,
    totalModal: totalModal,
    presentaseKeuntungan: presentaseKeuntungan.toFixed(2) + "%",
    bukuTerlaris: bukuTerlaris,
    penulisTerlaris: penulisTerlaris,
  };
}

let dataBuku = [
  {
    judul: "Pulang Pergi",
    penulis: "Tere Liye",
    hargabeli: 60000,
    hargaJual: 86000,
    terjual: 150,
    stok: 17,
  },

  {
    judul: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargabeli: 75000,
    hargaJual: 103000,
    terjual: 171,
    stok: 20,
  },

  {
    judul: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargabeli: 67000,
    hargaJual: 99000,
    terjual: 213,
    stok: 5,
  },

  {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hinata",
    hargabeli: 55000,
    hargaJual: 68000,
    terjual: 20,
    stok: 56,
  },
];

console.log(getInfoPenjualan(dataBuku));
