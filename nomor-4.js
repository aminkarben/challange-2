const dataPenjualanPakAldi = [
  {
    namaProduk: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },

  {
    namaProduk: "Sepatu Warrior Tristan Black Brown High - Original ",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneakers",
    totalTerjual: 37,
  },

  {
    namaProduk: "Sepatu Warrior Tristan Maroon High - Original ",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneakers",
    totalTerjual: 90,
  },

  {
    namaProduk: "Sepatu Warrior Rainbow Tosca Corduroy - [BINB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneakers",
    totalTerjual: 90,
  },
];

function HitngTotalPenjualan(dataPenjualan) {
  let totalPenjualan = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    totalPenjualan += dataPenjualan[i].totalTerjual;
  }

  return totalPenjualan;
}

console.log(HitngTotalPenjualan(dataPenjualanPakAldi));
