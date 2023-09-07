function GetAngkaTerbesarkedua(dataAngka) {
  if (dataAngka.length < 2) {
    return null;
  }
  const sorteddataAngka = dataAngka.slice().sort((a, b) => b - a);
  const terbesarPertama = sorteddataAngka[0];

  for (const i = 1; i < sorteddataAngka.length; i++) {
    if (sorteddataAngka[i] < terbesarPertama) {
      return sorteddataAngka[i];
    }
  }

  return null;
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(GetAngkaTerbesarkedua(dataAngka));
