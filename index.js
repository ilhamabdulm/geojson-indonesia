const provinsiJSON = require("./geojson/gadm41_IDN_1.json");
const kotaJSON = require("./geojson/gadm41_IDN_2.json");
const kecamatanJSON = require("./geojson/gadm41_IDN_3.json");
const kelurahanJSON = require("./geojson/gadm41_IDN_4.json");

function getProvinsiJson() {
  return provinsiJSON;
}

function getKotaJson() {
  return kotaJSON;
}

function getKecamatanJson() {
  return kecamatanJSON;
}

function getKelurahanJson() {
  return kelurahanJSON;
}

const allGeoJson = {
  0: {
    data: getProvinsiJson(),
    name: "NAME_1",
  },
  1: {
    data: getKotaJson(),
    name: "NAME_2",
  },
  2: {
    data: getKecamatanJson(),
    name: "NAME_3",
  },
  3: {
    data: getKelurahanJson(),
    name: "NAME_4",
  },
};

const jsonWithoutProvince = {
  0: {
    data: getKotaJson(),
    name: "NAME_2",
  },
  1: {
    data: getKecamatanJson(),
    name: "NAME_3",
  },
  2: {
    data: getKelurahanJson(),
    name: "NAME_4",
  },
};

// console.log(getProvinsiJson());

module.exports = {
  getProvinsiJson,
  getKotaJson,
  getKecamatanJson,
  getKelurahanJson,
  jsonWithoutProvince,
  allGeoJson,
};
