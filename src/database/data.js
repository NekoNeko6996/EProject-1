import homeBanner01 from "../resource/img/home-banner.png";
import homeBanner02 from "../resource/img/home-banner-2.png";
import homeBanner03 from "../resource/img/home-banner-3.png";

// banner img url
const dataBanner = [
  {
    url: homeBanner01,
    link: "/",              //redirect link (optional)
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
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
      no3: "",
      no4: "",
    },
    price: 120000,
    sale: 10,
    tech: "mechanical",
    availability: {
      status: true,
      amount: 21,
    },
    properties: {
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 1,
    name: "Casio X-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
      no3: "",
      no4: "",
    },
    price: 400000,
    sale: 0,
    tech: "mechanical",
    availability: {
      status: true,
      amount: 21,
    },
    properties: {
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 2,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
      no3: "",
      no4: "",
    },
    price: 1200,
    sale: 0,
    tech: "mechanical",
    availability: {
      status: true,
      amount: 21,
    },
    properties: {
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 3,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 4,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 5,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 6,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 7,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 8,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 9,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  },
  {
    id: 10,
    name: "Casio G-Shock",
    SKU: "YVM401",
    imgUrl: {
      no1: "https://th.bing.com/th/id/R.41193bcc7748a198136aec0b1f8bb16e?rik=AvJxjs7jHWVXQQ&riu=http%3a%2f%2fjpwatch.vn%2fuploaded%2fDong-ho-nam%2fdong-ho-Casio-G-Shock-nam-GA-120-1ADR.jpg&ehk=IAT5LmCmGry3DUVlGe0cNh6R%2bq3zodMx9GuN44vnZy8%3d&risl=&pid=ImgRaw&r=0",
      no2: "",
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
      collection: "",
      movement: "",
      caseColor: "",
      dialColor: "",
      strap: "",
      waterResistant: "",
      warranty: "",
    },
    rate: {
      star: 5,
      amount: 213,
    },
    
  }
];

export { dataBanner, productDB };
