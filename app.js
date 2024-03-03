var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button");

var items = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function cartmodify() {
  let cart = 0;
  for (ind = 0; ind < items.length; ind++) {
    cart = cart + items[ind].quantity;
  }
  cartValue.innerHTML = cart;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = (e) => {
    items[i].quantity++;
    cartmodify();
  };
}

var dollarmodify = 0;
var centsmodify = 0;

function pricemodify() {
  let totalPriceInCents = 0;

  for (ind = 0; ind < items.length; ind++) {
    totalPriceInCents =
      totalPriceInCents +
      items[ind].quantity * (items[ind].dollars * 100 + items[ind].cents);
  }
  dollarmodify = Math.floor(totalPriceInCents / 100);
  centsmodify = totalPriceInCents % 100;
}

var whatsappLink =
  "https://api.whatsapp.com/send?phone=919899863664&text=WHAT%20ORDERED";


function whatsappmodify() {

  for (let ind = 0; ind < items.length; ind++) {

    if (items[ind].quantity != 0) {

      whatsappLink += "%0A" + items[ind].name + "%20" + items[ind].quantity;

    }
  }
  whatsappLink +=

    "%0A" + "Total%20Price:%20$" + dollarmodify + "%20" + centsmodify + "c";



}

cartButton.onclick = () => {

  pricemodify();
 
  whatsappmodify();

  window.open(whatsappLink, "");

  for (let ind = 0; ind < items.length; ind++) {
    if (items[ind].quantity != 0) {
      console.log(
        "Item name: " +
          items[ind].name +
          " - Quantity: " +
          items[ind].quantity
      );
    }
  }

  console.log(
    "The total amount is " + dollarmodify + "$ and " + centsmodify + " cents"
  );
};