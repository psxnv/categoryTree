export const data = [
  {
    id: 1,
    title: "Автомобили",
    subCategories: [
      {
        id: 111,
        title: "BMW",
        parentId: 1111,
        subCategories: [
          {
            id: 222,
            title: "5-series",
            parentId: 2221,
          },
          {
            id: 222,
            title: "5-series",
            parentId: 2220,
          },
        ],
      },
      {
        id: 112,
        title: "Mersedes",
        parentId: 1111,
        subCategories: [
          {
            id: 222,
            title: "A-class",
            parentId: 2222,
          },
          {
            id: 222,
            title: "S-class",
            parentId: 2223,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Мотоциклы",
    subCategories: [
      {
        id: 112,
        title: "Honda",
        parentId: 1112,
        subCategories: [
          {
            id: 223,
            title: "600-cubs",
            parentId: 2224,
          },
          {
            id: 224,
            title: "500-cubs",
            parentId: 2225,
          },
        ],
      },
      {
        id: 113,
        title: "Suzuki",
        parentId: 1113,
        subCategories : [
          {
            id : 225,
            title: "1000-cubs",
            parentId: 2224
          },
          {
            id : 226,
            title: "800-cubs",
            parentId: 2225,
          },
        ],
      }
    ],
  },
  
];
