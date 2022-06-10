const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
const fs = require("fs/promises");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let totalEmosi = null;
    const arrGabunganReview = (await promiseTheaterIXX()).concat(
      await promiseTheaterVGC()
    );
    for (let i = 0; i < arrGabunganReview.length; i++) {
      if (arrGabunganReview[i].hasil === emosi) {
        totalEmosi = totalEmosi + 1;
      }
    }
    return totalEmosi;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
