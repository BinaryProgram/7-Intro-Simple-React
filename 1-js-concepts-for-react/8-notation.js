// dot vs bracket notation
const phone = {
  brand: "Samsung",
  model: "S25 ultra",
  price: 130000,
  specifications: {
    processor: "8gen 3",
    ram: "12gb",
    rom: "512gb",
    "display-size": 6.7,
    25: 'BlackFriday2025',
  },
};

// dot notation
const phoneRam = phone.specifications.ram;

// bracket notation
const DisplaySize = 'display-size';
const phoneDisplaySize = phone[DisplaySize];
const phoneDisplaySize2 = phone['display-size'];
const offer = phone.specifications[25];