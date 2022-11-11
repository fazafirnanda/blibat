const data = [
  {
    namaObat: "Sanmol 500 mg 4 Tablet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/782475_23-3-2020_14-28-1-1665778689.webp",
    harga: 2400,
    category: "Demam",
    id: 1,
  },
  {
    namaObat: "Sumagesic 600 mg 4 Tablet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/139389_10-6-2022_16-12-29-1665778861.webp",
    harga: 3100,
    category: "Demam",
    id: 2,
  },
  {
    namaObat: "Sanmol Forte 4 Tablet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/176340_10-6-2022_16-17-13-1665799638.webp",

    harga: 2700,
    category: "Demam",
    id: 3,
  },
  {
    namaObat: "Panadol Anak-Anak 120 mg 10 Tablet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/8889-1665778686.webp",

    harga: 17000,
    category: "Demam",
    id: 4,
  },
  {
    namaObat: "Dumin 250 mg Rectal Tube 4 ml",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/9791-1665780225.webp",
    harga: 30000,
    category: "Pusing",
    id: 5,
  },
  {
    namaObat: "Pyrexin 500 mg 10 Tablet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/139719_20-6-2019_10-31-49-1665782335.webp",
    harga: 4200,
    category: "Pusing",
    id: 6,
  },
  {
    namaObat: "Alphamol 600 mg 10 Kaplet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/700008_16-6-2019_22-36-47-1665760948.webp",
    harga: 6000,
    category: "Pusing",
    id: 7,
  },
  {
    namaObat: "Termorex Sirup 30 ml",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/453505_19-11-2019_21-54-25-1665798856.webp",
    harga: 10000,
    category: "Pusing",
    id: 8,
  },
  {
    namaObat: "Madu Mago 350 g",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/150614_30-7-2020_13-48-49-1665821819.webp",
    harga: 56000,
    category: "Maag",
    id: 9,
  },
  {
    namaObat: "Marinox Cal Mag Zinc Plus 50 Tablet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/17001-1665884891.webp",
    harga: 293000,
    category: "Maag",
    id: 10,
  },
  {
    namaObat: "Cimetidine 200 mg 10 Tablet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/672442_6-5-2019_9-11-17-1665787649.webp",
    harga: 7000,
    category: "Maag",
    id: 11,
  },
  {
    namaObat: "Pigeon Mag-Mag Step 1",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/13683-1665785619.webp",
    harga: 74000,
    category: "Maag",
    id: 12,
  },
  {
    namaObat: "Paramex Flu & Batuk PE 4 Tablet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/421685_13-7-2022_11-34-10-1665851421.webp",
    harga: 2900,
    category: "Batuk & Flu",
    id: 13,
  },
  {
    namaObat: "Panadol Flu & Batuk 10 Kaplet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/729801_22-11-2021_14-10-58-1665791638.webp",
    harga: 16000,
    category: "Batuk & Flu",
    id: 14,
  },
  {
    namaObat: "Bodrex Flu Dan Batuk Tidak Berdahak Pe 4 Kaplet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/9173-1665884751.webp",
    harga: 2900,
    category: "Batuk & Flu",
    id: 15,
  },
  {
    namaObat: "Mixagrip Flu Dan Batuk 4 Kaplet",
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/9967-1665780351.webp",
    harga: 3200,
    category: "Batuk & Flu",
    id: 16,
  },
];

// ADD CARD LIST
function card() {
  let getCardPusing = document.getElementById("pusing-container");
  let getCardDemam = document.getElementById("demam-container");
  let getCardMaag = document.getElementById("maag-container");
  let getCardBatuk = document.getElementById("batuk-container");
  for (let i = 0; i < data.length; i++) {
    // untuk melooping tampilan product didalam homepage
    if (data[i].category === "Demam") {
      getCardDemam.innerHTML += `<div class="w-1/4 flex flex-col bg-[#ddeedf] rounded-lg hover:scale-110 ease-in-out transition-all shadow-lg duration-300 justify-between">
      <div>
      <img src=${data[i].image} alt="" class="overflow-hidden rounded-t-lg">
      <p class="m-3 mb-1">${data[i].namaObat}</p>
      <p class="font-extralight mx-3 mb-1">${data[i].category}</p>
      <p class="mx-3">Rp ${data[i].harga}</p>
      </div>
      <div class="flex justify-center">
      <button onClick="addCart(${data[i].id})" class="bg-white text-black my-7 rounded-md px-12 py-2 hover:bg-[#282828] hover:text-white duration-300">Add Cart</button></div>
      </div>`;
    } else if (data[i].category === "Pusing") {
      getCardPusing.innerHTML += `
      <div class="w-1/4 flex flex-col bg-[#ddeedf] rounded-lg hover:scale-110 ease-in-out transition-all shadow-lg duration-300 justify-between">
      <div>
        <img src=${data[i].image} alt="" class="overflow-hidden rounded-t-lg">
        <p class="m-3 mb-1">${data[i].namaObat}</p>
        <p class="font-extralight mx-3 mb-1">${data[i].category}</p>
        <p class="mx-3">Rp ${data[i].harga}</p>
        </div>
        <div class="flex justify-center">
        <button onClick="addCart(${data[i].id})" class="bg-white text-black my-7  rounded-md px-12 py-2 hover:bg-[#282828] hover:text-white duration-300">Add Cart</button></div>
        </div>
      `;
    } else if (data[i].category === "Maag") {
      getCardMaag.innerHTML += `<div class="w-1/4 flex flex-col bg-[#ddeedf] rounded-lg hover:scale-110 ease-in-out transition-all shadow-lg duration-300 justify-between">
    <div>
    <img src=${data[i].image} alt="" class="overflow-hidden rounded-t-lg">
    <p class="m-3 mb-1">${data[i].namaObat}</p>
    <p class="font-extralight mx-3 mb-1">${data[i].category}</p>
    <p class="mx-3">Rp ${data[i].harga}</p>
    </div>
    <div class="flex justify-center">
    <button onClick="addCart(${data[i].id})" class="bg-white text-black my-7  rounded-md px-12 py-2 hover:bg-[#282828] hover:text-white duration-300">Add Cart</button></div> 
    </div>`;
    } else if (data[i].category === "Batuk & Flu") {
      getCardBatuk.innerHTML += `<div class="w-1/4 flex flex-col bg-[#ddeedf] rounded-lg hover:scale-110 ease-in-out transition-all shadow-lg duration-300 justify-between">
    <div>
    <img src=${data[i].image} alt="" class="overflow-hidden rounded-t-lg">
    <p class="m-3 mb-1">${data[i].namaObat}</p>
    <p class="font-extralight mx-3 mb-1">${data[i].category}</p>
    <p class="mx-3">Rp ${data[i].harga}</p>
    </div>
    <div class="flex justify-center">
    <button onClick="addCart(${data[i].id})" class="bg-white text-black my-7  rounded-md px-12 py-2 hover:bg-[#282828] hover:text-white duration-300 class=">Add Cart</button></div>
    </div>`;
    }
  }
}

card();
// cart
// let cartIcon = document.querySelector('')
// let cart = document.querySelector('')
// let closeCart = document.querySelector('')

// function addEvents() {
//     // REMOVE ITEM FROM CART
//     let deleteCart = document.querySelectorAll(".cart-remove");
//     deleteCart.forEach((button) => {
//       button.addEventListener("click", handleDelete);
//     });

//     // CHANGE QUANTITY ITEM
//     let countQuantity = document.querySelectorAll(".cart-quantity");
//     countQuantity.forEach((input) => {
//       input.addEventListener("change", handleCount);
//     });

//     // ADD ITEM TO CART
//     let getCart = document.querySelectorAll(".add-cart");
//     getCart.forEach((button) => {

//       button.addEventListener("click", handleAdd);
//     });

//     // BUYING ITEM
//     let buyCart = document.querySelector(".buy-cart");
//     buyCart.addEventListener("click", handleBuy);
//   }

let obatResult = [];
function addCart(id) {
  let product = data.find((element) => element.id === id);
  obatResult.push(product);
  listCart(product);
  // console.log(obatResult);
}

function listCart(dataObat) {
  // console.log(dataObat);
  // let clear = document.getElementById("container-list") = "";
  let produk = document.getElementById("cardProduk");
  //  produk.setAttribute("id", "cardProduk");

  // dataObat.forEach((element) => {
  produk.innerHTML += ` <div class="flex mt-4">
    <div class="w-10/12 gap-y-3">
    <h1 class="text-black text-xl font-extrabold">${dataObat.namaObat}</h1>
    <h2 class="text-black">IDR ${dataObat.harga}</h2>
    <input type="number" class="border-2 border-black w-10">
</div>
<div class="w-2/12 flex justify-center items-center">
    <img src="../src/trash3-fill.svg" alt="">
</div>
</div>
</div>
</div>`;
  // });
  // document.getElementById("totalPrice").innerHTML += ${dataObat.harga + dataObat.harga}
}
