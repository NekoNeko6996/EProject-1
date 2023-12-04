import homeBanner01 from "../resource/img/home-banner.png";
import homeBanner02 from "../resource/img/home-banner-2.png";
import homeBanner03 from "../resource/img/home-banner-3.png";

// --- simulate data returned from the server --- //
// banner img url
const dataBanner = [
  {
    url: homeBanner01,
    link: "/", //redirect link (optional)
  },
  {
    url: homeBanner02,
    link: "/",
  },
  {
    url: homeBanner03,
    link: "/",
  },
];

// product data
const productDB = [
  {
    id: 0,
    name: "PCAT WATCH",
    SKU: " CB5916-59L",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/ShopifyPDt_6_4e8eb8da-5fb3-42a9-a313-8c3495d5ee1a_1800x1800.jpg?v=1637700071",
      no2: "https://shopalbertopr.com/cdn/shop/products/ShopifyPDt_7_a5e0ba84-54fc-47ae-b411-cff47f87ea55_1800x1800.jpg?v=1637700072",
      no3: "",
      no4: "",
    },
    price: 1200000,
    sale: 0,
    tech: "mechanical",
    availability: {
      status: true,
      amount: 21,
    },
    properties: {
      describe:
        "The PCAT from Citizen improves on this classic collection with a modern design, including a two-tone, rose gold stainless-steel 43mm case and a two-tone stainless-steel bracelet, capped off with a blue dial. It uses a Tachymeter bezel, and in addition to Eco-Drive technology, it includes advanced features such as atomic timekeeping with synchronized time adjustment in 43 cities worldwide, power reserve indicator, a perpetual calendar and a chronograph. This timepiece is the definition of sporty elegance, with a timeless style that can be effortlessly dressed up or down as the situation changes.",
      movement: "E660 EcoDrive Technology",
      caseColor: "Two Tone Stainless Steel Case",
      dialColor: "Blue Dial",
      strap: "Stainless Steel Bracelet",
      waterResistant: "200 meters",
      warranty: "2 years",
    },
    rate: {
      star: 4,
      amount: 223,
    },
  },
  {
    id: 1,
    name: "GEN 4 RUNWAY SMARTWATCH",
    SKU: "MKT5045",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MKT5045_1_1800x1800.png?v=1605662805",
      no2: "https://shopalbertopr.com/cdn/shop/products/MKT5044-2_728e72c8-606d-4c8b-b4fb-92c742aedce3_1400x1400.png?v=1605662805",
      no3: "https://shopalbertopr.com/cdn/shop/products/MKT5044-3_af15e3a3-ae79-4749-93e6-cae0c3238899_1000x1000.png?v=1605662805",
      no4: "",
    },
    price: 1200000,
    sale: 90,
    tech: "quartz",
    availability: {
      status: true,
      amount: 10,
    },
    properties: {
      describe:
        "The iconic Runway is back and better than ever in an innovative smartwatch design. In gold-plated stainless steel, this Michael Kors Access style offers a new highly personalized experience with heart rate tracking, swimproof technology, NFC payments, GPS functionality and more. Customize the full-round display with new digital dial designs that connect to and visually show your heart rate, receive notifications (on the go) and automatically track your activity from the sidewalk to the gym. Smartwatches built with Wear OS by Google™ are compatible with iPhone® and Android™ phones. Wear OS by Google and other related marks are trademarks of Google LLC. Touchscreen smartwatches built with Wear OS by Google require a phone running Android 6.0+ (excluding Go edition) and iOS 10.0+. Supported features may vary between platforms and countries",
      movement:
        "Powered by Wear OS by Google Compatible with iPhone and Android phonesSocial Media UpdatesText/Email AlertsApp Notifications",
      caseColor: "Gold-tone Stainless Steel Case",
      dialColor: "AMOLED Display: Active-Matrix Organic Light-Emitting Diode",
      strap: "Gold- tone Stainless Steel Bracelet",
      waterResistant: "300 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 2,
    name: "GEN 4 LEXINGTON SMARTWATCH",
    SKU: "MKT5077",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MKT5077_1_1800x1800.png?v=1605662631",
      no2: "https://shopalbertopr.com/cdn/shop/products/MKT5077-2_1173x1800.jpg?v=1605662631",
      no3: "https://shopalbertopr.com/cdn/shop/products/MKT5077-3_387x490.png?v=1605662631",
      no4: "https://shopalbertopr.com/cdn/shop/products/MKT5077-4_1173x1800.jpg?v=1605662631",
    },
    price: 3200000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 14,
    },
    properties: {
      describe:
        "Busy lifestyles call for a smart watch that lets you stay organized, in touch and ready for any late-breaking developments or change of plans. Though it boasts a traditional design, when synced to your smartphone, the touchscreen displays all sorts of practical features, from text, e-mail and incoming call notifications to fitness tracking and payment technology.",
      movement:
        "Powered by Wear OS by Google Compatible with iPhone and Android phones Social Media Updates Text/Email Alerts App Notifications",
      caseColor: "Stainless Steel Case",
      dialColor: "AMOLED Display: Active-Matrix Organic Light-Emitting Diode",
      strap: "Stainless Steel Bracelet",
      waterResistant: "300 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 3,
    name: "GEN4 SOFIE SMART WATCH",
    SKU: "MKT5020",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MKT5020_1_1800x1800.png?v=1605663087",
      no2: "https://shopalbertopr.com/cdn/shop/products/MKT5020-2_1000x1000.png?v=1605663087",
      no3: "https://shopalbertopr.com/cdn/shop/products/MKT5020-3_1000x1000.png?v=1605663087",
      no4: "https://shopalbertopr.com/cdn/shop/products/shopping_500x500.png?v=1605663087",
    },
    price: 2200000,
    sale: 50,
    tech: "quartz",
    availability: {
      status: true,
      amount: 7,
    },
    properties: {
      describe:
        "The Michael Kors Access Gen 4 Sofie smartwatch is better than ever. Powered by Wear OS by Google™, this version is equipped with heart-rate tracking, payment methods, swimproof functionality and more to keep you connected to your goals and favorite apps. We kept the design the same—a slim profile crafted from stainless steel featuring pavé accents, plus multiple display faces and an interchangeable strap for the ultimate in customization.",
      movement:
        "Powered by Wear OS by Google Compatible with iPhone and Android phones Social Media Updates Text/Email Alerts App Notifications",
      caseColor: "Rose-gold tone Stainless Steel Case",
      dialColor: "AMOLED Display: Active-Matrix Organic Light-Emitting Diode",
      strap:
        "Rose-Gold Tone Stainless Steel Bracelet with Pave Topring Centre Links",
      waterResistant: "300 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 4,
    name: "RUNWAY",
    SKU: "MK8086",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MK8086_1_1800x1800.png?v=1605659858",
      no2: "https://shopalbertopr.com/cdn/shop/products/MK8086-2_400x400.png?v=1605659858",
      no3: "https://shopalbertopr.com/cdn/shop/products/MK8086-3_900x900.png?v=1605659858",
      no4: "",
    },
    price: 15000000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: false,
      amount: 0,
    },
    properties: {
      describe:
        "The Michael Kors Access Gen 4 Sofie smartwatch is better than ever.",
      movement: "Quartz",
      caseColor: "Stainless steel case",
      dialColor: "Silver Dial",
      strap: "Stainless Steel bracelet",
      waterResistant: "100 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 5,
    name: "PARKER",
    SKU: "MK6414",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MK6414_1_1800x1800.png?v=1605663901",
      no2: "https://shopalbertopr.com/cdn/shop/products/MK6414-2_1000x1000.png?v=1605663901",
      no3: "https://shopalbertopr.com/cdn/shop/products/MK6414-5_1000x1000.png?v=1605663901",
      no4: "",
    },
    price: 3800000,
    sale: 79,
    tech: "quartz",
    availability: {
      status: true,
      amount: 12,
    },
    properties: {
      describe:
        "The Michael Kors Access Gen 4 Sofie smartwatch is better than ever.",
      movement: "Quartz",
      caseColor: "Rose Gold Plated Stainless Steel Case",
      dialColor: "Black Mother of Pearl Dial",
      strap: "Rose Gold Stainless Steel Bracelet with black Acrylic Links",
      waterResistant: "100 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 500,
    },
  },
  {
    id: 6,
    name: "JARYN",
    SKU: "MK4438",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MK4438_1800x1800.png?v=1605663280",
      no2: "https://shopalbertopr.com/cdn/shop/products/sd_1000x1200.jpg?v=1605663280",
      no3: "",
      no4: "",
    },
    price: 2900000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 47,
    },
    properties: {
      describe:
        "The Michael Kors Access Gen 4 Sofie smartwatch is better than ever.",
      movement: "Quartz",
      caseColor: "Stainless steel case",
      dialColor: "White dial",
      strap: "Stainless Steel Mercer lock bangle bracelet",
      waterResistant: "50 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 7,
    name: "PYPER",
    SKU: "MK3901",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MK3901_1_1800x1800.png?v=1605664238",
      no2: "https://shopalbertopr.com/cdn/shop/products/MK3901-3_900x900.png?v=1605664238",
      no3: "https://shopalbertopr.com/cdn/shop/products/MK3901-2_1552x1800.png?v=1605664238",
      no4: "",
    },
    price: 2800000,
    sale: 20,
    tech: "quartz",
    availability: {
      status: true,
      amount: 102,
    },
    properties: {
      describe:
        "The Michael Kors Access Gen 4 Sofie smartwatch is better than ever. real",
      movement: "Quartz",
      caseColor: "Stainless steel case",
      dialColor: "White Sunray",
      strap: "Tri-tone Stainless Steel Bracelet",
      waterResistant: "50 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 312,
    },
  },
  {
    id: 8,
    name: "CINTHIA",
    SKU: "MK3641",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MK3641_1_1800x1800.png?v=1605658658",
      no2: "https://shopalbertopr.com/cdn/shop/products/MK3641-2_1157x1157.png?v=1605658658",
      no3: "https://shopalbertopr.com/cdn/shop/products/MK3641-3_900x900.png?v=1605658658",
      no4: "",
    },
    price: 2300000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 6,
    },
    properties: {
      describe:
        "The Michael Kors Access Gen 4 Sofie smartwatch is better than ever. real",
      movement: "Quartz",
      caseColor: "Stainless steel case",
      dialColor: "Mother of Pearl Dial",
      strap: "Stainless Steel Bracelet",
      waterResistant: "50 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 100,
    },
  },
  {
    id: 9,
    name: "PORTIA",
    SKU: "MK3639",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MK3639_1_1800x1800.png?v=1605664014",
      no2: "https://shopalbertopr.com/cdn/shop/products/MK3639-2_1200x1200.png?v=1605664014",
      no3: "https://shopalbertopr.com/cdn/shop/products/MK3639-3_1200x1200.png?v=1605664014",
      no4: "",
    },
    price: 2300000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 14,
    },
    properties: {
      describe:
        "The Michael Kors Access Gen 4 Sofie smartwatch is better than ever. ",
      movement: "Quartz",
      caseColor: "Gold-Tone Stainless steel case",
      dialColor: "Gold-Tone Dial",
      strap: "Gold-Tone Stainless Steel Bracelet",
      waterResistant: "50 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 10,
    name: "LAURYN",
    SKU: "MK2757",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MK2757_1800x1800.png?v=1605663383",
      no2: "https://shopalbertopr.com/cdn/shop/products/MK2757-2_900x900.png?v=1605663383",
      no3: "https://shopalbertopr.com/cdn/shop/products/MK2757-3_1280x720.png?v=1605663383",
      no4: "",
    },
    price: 2300000,
    sale: 10,
    tech: "quartz",
    availability: {
      status: true,
      amount: 11,
    },
    properties: {
      describe: "Scratch Resistant Mineral Crystal",
      movement: "Quartz",
      caseColor: "Rose Gold-tone stainless steel case",
      dialColor: "Mother of Pearl",
      strap: "Navy Leather Strap",
      waterResistant: "50 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 200,
    },
  },
  {
    id: 11,
    name: "MOVADO BOLD MID-SIZE TWO-TONE ROSE GOLD WATCH",
    SKU: "3600504",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/3600504_1_1800x1800.png?v=1605653694",
      no2: "https://shopalbertopr.com/cdn/shop/products/3600504-2_533x533.jpg?v=1605653694",
      no3: "https://shopalbertopr.com/cdn/shop/products/3600504-3_533x533.jpg?v=1605653694",
      no4: "",
    },
    price: 19000000,
    sale: 10,
    tech: "quartz",
    availability: {
      status: true,
      amount: 3,
    },
    properties: {
      describe: "K1 crystal ",
      movement: "Swiss Quartz",
      caseColor: "Stainless Steel and Rose Gold ion-plated case",
      dialColor:
        "Silver-toned dial with matching frosted-textured outer ring, rose gold-toned dot and hands",
      strap: "Stainless Steel and Rose Gold Link Bracelet",
      waterResistant: "30 meters",
      warranty: "5 years",
    },
    rate: {
      star: 5,
      amount: 400,
    },
  },
  {
    id: 12,
    name: "MUSEUM CLASSIC WATCH",
    SKU: "0606876",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/0606876_3e66cbb8-642d-47a7-93e4-2545179c37fd_1800x1800.png?v=1608220578",
      no2: "https://shopalbertopr.com/cdn/shop/products/0606876-2_bfd15eba-2e6a-4f1e-b4dc-afb713dae941_1056x1273.jpg?v=1608220578",
      no3: "https://shopalbertopr.com/cdn/shop/products/0606876-3_064712e0-751b-4ae9-8ade-263c5f5e98d0_1056x1273.jpg?v=1608220578",
      no4: "",
    },
    price: 13000000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 6,
    },
    properties: {
      describe: "Crysal is special",
      movement: "Swiss Quartz",
      caseColor: "Stainless Steel and Flower Gold ion-plated case",
      dialColor: "Silver-toned dial with matching frosted-textured outer ring",
      strap: "Stainless Steel and Rose Gold Link Bracelet",
      waterResistant: "30 meters",
      warranty: "4 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 13,
    name: "LUNO SPORT WATCH",
    SKU: "0606380",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/0606380_1800x1800.png?v=1605652348",
      no2: "https://shopalbertopr.com/cdn/shop/products/0606380-3_96bcb4ed-5624-4b07-9df6-36399aab8f61_870x870.jpg?v=1605652348",
      no3: "",
      no4: "",
    },
    price: 17000000,
    sale: 30,
    tech: "quartz",
    availability: {
      status: true,
      amount: 34,
    },
    properties: {
      describe: "Sapphire Crystal",
      movement: "Swiss Quartz",
      caseColor: "Stainless Steel",
      dialColor: "Blue Dial with Silver Tone Hands",
      strap: "Stainless Steel Link Bracelet",
      waterResistant: "30 meters",
      warranty: "5 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 14,
    name: "PORTRAIT GENT WATCH",
    SKU: "SFDR00519",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/SFDR00519_1800x1800.png?v=1605657296",
      no2: "https://shopalbertopr.com/cdn/shop/products/ScreenShot2020-06-06at11.24.33PM_998x564.png?v=1605657296",
      no3: "https://shopalbertopr.com/cdn/shop/products/ScreenShot2020-06-06at11.24.23PM_864x1058.png?v=1605657296",
      no4: "",
    },
    price: 32000000,
    sale: 90,
    tech: "quartz",
    availability: {
      status: false,
      amount: 0,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste. The strap versions come with karung leather in 3 classical yet very chic color variations.",
      movement: "Quartz Movement",
      caseColor: "IP Gold 1N Rectangular Case",
      dialColor: "Blue enamel Dial",
      strap: "Stainless Steel and Yellow Gold Bracelet with Butterfly Closure",
      waterResistant: "31 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 0,
    },
  },
  {
    id: 15,
    name: "MINUETTO WATCH",
    SKU: "SF8200519",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/SF8200519_1800x1800.png?v=1605657251",
      no2: "https://shopalbertopr.com/cdn/shop/products/ScreenShot2020-06-06at11.05.58PM_1222x530.png?v=1605657251",
      no3: "https://shopalbertopr.com/cdn/shop/products/ScreenShot2020-06-06at11.05.51PM_834x844.png?v=1605657251",
      no4: "",
    },
    price: 33000000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 2,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste. The strap versions come with karung leather in 3 classical yet very chic color variations.",
      movement: "Quartz Movement",
      caseColor: "IP Gold 1N Case",
      dialColor: "White mother of pearl dial guilloche and Gancini logo",
      strap: "IP Gold 1N mesh band with slide buckle",
      waterResistant: "31 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 3,
    },
  },
  {
    id: 16,
    name: "SAWYER",
    SKU: "MK2580",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/MK2580_1800x1800.png?v=1605659477",
      no2: "https://shopalbertopr.com/cdn/shop/products/MK2580-2_300x300.jpg?v=1605659477",
      no3: "https://shopalbertopr.com/cdn/shop/products/MK2580-3_540x540.jpg?v=1605659477",
      no4: "",
    },
    price: 37000000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 10,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste. The strap versions come with karung leather in 3 classical yet very chic color variations.",
      movement: "Quartz",
      caseColor: "Rose-Gold Plated Stainless Steel",
      dialColor: "Plum",
      strap: "Plum Leather Strap",
      waterResistant: "100 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 17,
    name: "MUSEUM SPORT BLACK PVD WATCH",
    SKU: "0606615",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/0606615_1800x1800.png?v=1605655357",
      no2: "https://shopalbertopr.com/cdn/shop/products/0606615-2_448cb9f8-8921-4bb9-9257-325e8876ac36_315x315.jpg?v=1605655357",
      no3: "",
      no4: "",
    },
    price: 43000000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 4,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste.",
      movement: "Swiss Quartz",
      caseColor: "Black PVD-finished Stainless Steel",
      dialColor:
        "Black Museum dial with silver-tone hands, concave dot marker, black minute reflector ring and date window",
      strap:
        "Black PVD-finished stainless steel bracelet with deployment clasp",
      waterResistant: "30 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 18,
    name: "SPORT EDGE WATCH",
    SKU: "0606927",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/0606927_1800x1800.png?v=1605656101",
      no2: "https://shopalbertopr.com/cdn/shop/products/0606927-2_40e09cab-4f1b-424b-b8cf-28266330099a_612x612.jpg?v=1605656101",
      no3: "https://shopalbertopr.com/cdn/shop/products/0606927-3_a0c6cca3-6068-4872-a7da-3b8f1e0a938f_612x612.jpg?v=1605656101",
      no4: "",
    },
    price: 29000000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 21,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste.",
      movement: "Swiss Quartz",
      caseColor: "Stainless Steel Case",
      dialColor: "Black dial with blue markers",
      strap: "Black Rubber Strap",
      waterResistant: "30 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 19,
    name: "MUSEUM CLASSIC WATCH",
    SKU: "0606610",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/0606610_1800x1800.png?v=1605655244",
      no2: "https://shopalbertopr.com/cdn/shop/products/0606610-2_860f9b47-f235-4c8a-845c-5f3999f3f1fb_1056x1273.jpg?v=1605655244",
      no3: "https://shopalbertopr.com/cdn/shop/products/0606610-3_d7456fc7-40cd-4d3d-bcaf-c1d0976a41c2_1056x1273.jpg?v=1605655244",
      no4: "",
    },
    price: 12000000,
    sale: 19,
    tech: "quartz",
    availability: {
      status: true,
      amount: 18,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste.",
      movement: "Swiss Quartz",
      caseColor: "Stainless Steel",
      dialColor:
        "Blue Museum dial with silver-tone hands and dot marker at twelve o'clock",
      strap: "Black Calfskin Strap",
      waterResistant: "30 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 20,
    name: "MOVADO BOLD BLACK TITANIUM WATCH",
    SKU: "3600190",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/3600190_1800x1800.png?v=1605652558",
      no2: "https://shopalbertopr.com/cdn/shop/products/3600190-2_225x225.jpg?v=1605652558",
      no3: "https://shopalbertopr.com/cdn/shop/products/3600190-3_1500x1096.jpg?v=1605652558",
      no4: "",
    },
    price: 28000000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 12,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste.",
      movement: "Swiss Quartz",
      caseColor: "Titanium",
      dialColor: "Textured Black Dial with Orange Accents",
      strap: "Black Ion Plated Titanium and Polyurethane Bracelet",
      waterResistant: "30 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 21,
    name: "MOVADO BOLD MEDIUM TWO-TONE WATCH",
    SKU: "3600129",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/3600129_1800x1800.png?v=1605653527",
      no2: "https://shopalbertopr.com/cdn/shop/products/3600129-2_612x612.jpg?v=1605653527",
      no3: "https://shopalbertopr.com/cdn/shop/products/3600129-3_612x612.jpg?v=1605653527",
      no4: "",
    },
    price: 12000000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 10,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste.",
      movement: "Swiss Quartz",
      caseColor: "Yellow Gold Ion-Plated Stainless Steel",
      dialColor:
        "Silver-tone Museum dial with gold-tone two hands and dot markers at twelve o'clock",
      strap: "Yellow Gold Ion-Plated with Stainless Steel Link Bracelet",
      waterResistant: "30 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 22,
    name: "MOVADO BOLD MEDIUM YELLOW GOLD WATCH",
    SKU: " 3600104",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/3600104_1_1800x1800.png?v=1605653583",
      no2: "https://shopalbertopr.com/cdn/shop/products/3600104-2_533x533.jpg?v=1605653583",
      no3: "https://shopalbertopr.com/cdn/shop/products/3600104-3_533x533.jpg?v=1605653583",
      no4: "https://shopalbertopr.com/cdn/shop/products/3600104-4_533x533.jpg?v=1605653583",
    },
    price: 21000000,
    sale: 99,
    tech: "quartz",
    availability: {
      status: true,
      amount: 400,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste.",
      movement: "Swiss Quartz",
      caseColor: "Yellow Gold Ion-Plated Stainless Steel",
      dialColor: "Gold Tone Metallic Museum with Flash Dot",
      strap: "Yellow Gold Ion-Plated Stainless Steel Link Bracelet",
      waterResistant: "30 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 23,
    name: "HERITAGE SERIES CALENDOPLAN S CHRONOGRAPH WATCH",
    SKU: " 3650062",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/3650062_1_533x533.png?v=1605651794",
      no2: "https://shopalbertopr.com/cdn/shop/products/3650062-2_533x533.jpg?v=1605651794",
      no3: "https://shopalbertopr.com/cdn/shop/products/3650062-3_533x533.jpg?v=1605651794",
      no4: "",
    },
    price: 25000000,
    sale: 0,
    tech: "quartz",
    availability: {
      status: true,
      amount: 10,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous collection with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste.",
      movement: "Swiss Quartz",
      caseColor:
        "Yellow Gold ion-plated stainless steel case with fluidly extended lugs",
      dialColor:
        "Cognac leather strap with top-stitching and yellow gold ion-plated classic stainless steel buckle",
      strap:
        "Cognac leather strap with top-stitching and yellow gold ion-plated classic stainless steel buckle",
      waterResistant: "50 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
  {
    id: 24,
    name: "MOVADO BOLD LARGE EVOLUTION WATCH",
    SKU: "3600510",
    imgUrl: {
      no1: "https://shopalbertopr.com/cdn/shop/products/3600510_1_1800x1800.png?v=1605653281",
      no2: "https://shopalbertopr.com/cdn/shop/products/3600510-2_533x533.jpg?v=1605653281",
      no3: "https://shopalbertopr.com/cdn/shop/products/3600510-3_533x533.jpg?v=1605653281",
      no4: "https://shopalbertopr.com/cdn/shop/products/3600510-4_533x533.jpg?v=1605653281",
    },
    price: 23000000,
    sale: 20,
    tech: "quartz",
    availability: {
      status: true,
      amount: 50,
    },
    properties: {
      describe:
        "The new Ferragamo Portrait Gent is a contemporary and glamourous describe with a vintage inspiration. It is characterized by geometrical shapes and a minimalist taste.",
      movement: "Swiss Quartz",
      caseColor: "Blue Ion plated Stainless Steel case",
      dialColor: "Blue Sunray dial with matching Sunray dot/hands",
      strap: "Blue ion-plated stainless steel link bracelet",
      waterResistant: "30 meters",
      warranty: "2 years",
    },
    rate: {
      star: 5,
      amount: 213,
    },
  },
];

export { dataBanner, productDB };
