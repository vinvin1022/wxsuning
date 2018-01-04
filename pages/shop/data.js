const catagery = [
  { id: 1, name: "折扣", icon: "", isSelect: true },
  { id: 2,name: "碳酸饮料", icon: "", isSelect: false },
  { id: 3, name: "矿泉水", icon: "", isSelect: false },
  { id: 4, name: "茶饮品|奶茶", icon: "", isSelect: false },
  { id: 5, name: "辣条|豆干", icon: "", isSelect: false },
  { id: 6, name: "牛奶饮品", icon: "", isSelect: false },
  { id: 7, name: "运动饮料", icon: "", isSelect: false },
  { id: 8, name: "方便面", icon: "", isSelect: false },
  { id: 9, name: "捧花书品", icon: "", isSelect: false }
];
const products = [
  { id: 7, cid: 2, title: "红牛7", price: "4.5", imgurl: "/images/151091011702575541.png",like:2},
  { id: 8, cid: 2, title: "佳得乐8", price: "51.5", imgurl: "/images/149509134514834638.png", like: 2},
  { id: 1, cid: 1, title: "可口可乐1", price: "3.5", imgurl: "/images/149509134514834638.png", like: 2 },
  { id: 2, cid: 1, title: "红牛2", price: "41.5", imgurl: "/images/149509116613823720.png", like: 2 },
  { id: 3, cid: 1, title: "佳得乐3", price: "5.5", imgurl: "/images/149509134514834638.png", like: 2  },
  { id: 10, cid: 3, title: "酸酸乳10", price: "1.5", imgurl: "/images/149509134514834638.png", like: 2 },
  { id: 11, cid: 3, title: "酸酸乳11", price: "10.5", imgurl: "/images/149509134514834638.png", like: 2  },
  { id: 4, cid: 1, title: "脉动4", price: "6.5", imgurl: "/images/149509138688947866.png" },
  { id: 5, cid: 1, title: "酸酸乳5", price: "52.5", imgurl: "/images/149509134514834638.png" },
  { id: 6, cid: 2, title: "可口可乐6", price: "3.5", imgurl: "/images/149509134514834638.png" },
  { id: 9, cid: 3, title: "脉动9", price: "62.5", imgurl: "/images/149509138688947866.png" },
  { id: 12, cid: 3, title: "酸酸乳12", price: "10.5", imgurl: "/images/149509134514834638.png" },
  { id: 13, cid: 1, title: "脉动13", price: "6.5", imgurl: "/images/149509138688947866.png" },
  { id: 14, cid: 1, title: "酸酸乳14", price: "52.5", imgurl: "/images/149509134514834638.png" },
  { id: 15, cid: 2, title: "可口可乐15", price: "3.5", imgurl: "/images/149509134514834638.png" },
  { id: 16, cid: 3, title: "脉动16", price: "62.5", imgurl: "/images/149509138688947866.png" },

  { id: 17, cid: 4, title: "红牛7", price: "4.5", imgurl: "/images/151091011702575541.png" },
  { id: 18, cid: 4, title: "佳得乐8", price: "51.5", imgurl: "/images/149509134514834638.png" },
  { id: 19, cid: 5, title: "可口可乐1", price: "3.5", imgurl: "/images/149509134514834638.png" },
  { id: 20, cid: 6, title: "红牛2", price: "41.5", imgurl: "/images/149509116613823720.png" },
  { id: 21, cid: 7, title: "佳得乐3", price: "5.5", imgurl: "/images/149509134514834638.png" },
  { id: 22, cid: 8, title: "酸酸乳10", price: "1.5", imgurl: "/images/149509134514834638.png" },
  { id: 23, cid: 8, title: "酸酸乳11", price: "10.5", imgurl: "/images/149509134514834638.png" },
  { id: 24, cid: 8, title: "脉动4", price: "6.5", imgurl: "/images/149509138688947866.png" },
  { id: 25, cid: 8, title: "酸酸乳5", price: "52.5", imgurl: "/images/149509134514834638.png" },
  { id: 26, cid: 8, title: "可口可乐6", price: "3.5", imgurl: "/images/149509134514834638.png" },
  { id: 27, cid: 8, title: "脉动9", price: "62.5", imgurl: "/images/149509138688947866.png" },
  { id: 28, cid: 7, title: "酸酸乳12", price: "10.5", imgurl: "/images/149509134514834638.png" },
  { id: 29, cid: 6, title: "脉动13", price: "6.5", imgurl: "/images/149509138688947866.png" },
  { id: 30, cid: 5, title: "酸酸乳14", price: "52.5", imgurl: "/images/149509134514834638.png" },
  { id: 31, cid: 4, title: "可口可乐15", price: "3.5", imgurl: "/images/149509134514834638.png" },
  { id: 32, cid: 5, title: "脉动16", price: "62.5", imgurl: "/images/149509138688947866.png" }

]

module.exports = {
  catagery: catagery,
  products: products
};