const staticProducts = [
  // Appliances
  { id: 1, title: "Dyson Air Purifier", price: 214.59, image: "https://cdn.dsmcdn.com/mnresize/600/600/ty184/product/media/images/20231113/4/121372449/541770291/1/1_org_zoom.jpg", category: "appliances" },
  { id: 2, title: "Smart Vacuum Cleaner", price: 445.42, image: "vacuum1.jpg", category: "appliances" },
  { id: 3, title: "Samsung Microwave Oven", price: 407.75, image: "https://images.samsung.com/is/image/samsung/p6pim/in/mw4000st-kw/gallery/in-mw4000st-kw-feature-426996094?$720_576_PNG$", category: "appliances" },
  { id: 10, title: "Dyson Air Purifier", price: 194.60, image: "https://cdn.dsmcdn.com/mnresize/600/600/ty184/product/media/images/20231113/4/121372449/541770291/1/1_org_zoom.jpg", category: "appliances" },
  { id: 21, title: "Instant Pot Duo 7-in-1", price: 296.67, image: "instantpot1.jpg", category: "appliances" },
  { id: 29, title: "Philips Mixer Grinder", price: 468.89, image: "https://www.istockphoto.com/photo/single-electric-food-processor-in-retail-store-gm500455404-80772765?searchscope=image%2Cfilm", category: "appliances" },
  { id: 56, title: "Smart Vacuum Cleaner", price: 419.85, image: ".jpg", category: "appliances" },
  { id: 80, title: "Philips Mixer Grinder", price: 264.72, image: "https://images.philips.com/is/image/philipsconsumer/HL7756_00-IMS-in-01?$jpglarge$", category: "appliances" },
  { id: 93, title: "Instant Pot Duo 7-in-1", price: 457.41, image: "https://m.media-amazon.com/images/I/81VYFzDtJwL._AC_SL1500_.jpg", category: "appliances" },

  // Audio
  { id: 4, title: "JBL Flip 6 Speaker", price: 158.82, image: "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw83d0a2b6/JBL_Flip6_NAVY_CONTROL.png", category: "audio" },
  { id: 8, title: "Apple AirPods Pro 2nd Gen", price: 341.06, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV1?wid=2000&hei=2000&fmt=jpeg", category: "audio" },
  { id: 14, title: "Sony WH-1000XM5 Wireless Headphones", price: 113.54, image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg", category: "audio" },
  { id: 20, title: "Bose QuietComfort 45", price: 93.75, image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/qc45_silver_EC_hero.psd/jcr:content/renditions/cq5dam.web.320.320.png", category: "audio" },
  { id: 26, title: "Sennheiser Momentum 4", price: 418.26, image: "https://m.media-amazon.com/images/I/71rbrF9KNKL._AC_SL1500_.jpg", category: "audio" },
  { id: 44, title: "Sony WH-1000XM5", price: 162.58, image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg", category: "audio" },
  { id: 51, title: "Apple AirPods Pro 2nd Gen", price: 454.87, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV1?wid=2000&hei=2000&fmt=jpeg", category: "audio" },
  { id: 63, title: "JBL Flip 6 Speaker", price: 450.07, image: "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw83d0a2b6/JBL_Flip6_NAVY_CONTROL.png", category: "audio" },
  { id: 85, title: "Apple AirPods Pro 2nd Gen", price: 481.72, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV1?wid=2000&hei=2000&fmt=jpeg", category: "audio" },

  // Gaming
  { id: 5, title: "Logitech G733 Wireless Gaming Headset", price: 402.81, image: "https://m.media-amazon.com/images/I/61hwaz2uHuL._AC_SL1500_.jpg", category: "gaming" },
  { id: 6, title: "Nintendo Switch Pro Controller", price: 422.88, image: "https://m.media-amazon.com/images/I/61drpi3cYUL._AC_SL1500_.jpg", category: "gaming" },
  { id: 7, title: "Xbox Series X Controller", price: 276.02, image: "https://m.media-amazon.com/images/I/61II8p5SIPL._AC_SL1500_.jpg", category: "gaming" },
  { id: 23, title: "PS5 DualSense Wireless Controller", price: 425.57, image: "https://m.media-amazon.com/images/I/619BkvKW02L._AC_SL1500_.jpg", category: "gaming" },
  { id: 24, title: "Razer BlackWidow V3 Keyboard", price: 486.82, image: "https://m.media-amazon.com/images/I/81Lp6gGZlHL._AC_SL1500_.jpg", category: "gaming" },
  { id: 46, title: "Razer BlackWidow V3 Keyboard", price: 364.00, image: "https://m.media-amazon.com/images/I/81Lp6gGZlHL._AC_SL1500_.jpg", category: "gaming" },
  { id: 58, title: "Nintendo Switch Pro Controller", price: 253.70, image: "https://m.media-amazon.com/images/I/61drpi3cYUL._AC_SL1500_.jpg", category: "gaming" },
  { id: 75, title: "Nintendo Switch Pro Controller", price: 64.36, image: "https://m.media-amazon.com/images/I/61drpi3cYUL._AC_SL1500_.jpg", category: "gaming" },
  { id: 99, title: "Razer BlackWidow V3 Keyboard", price: 56.04, image: "https://m.media-amazon.com/images/I/81Lp6gGZlHL._AC_SL1500_.jpg", category: "gaming" },
];

export default staticProducts;
