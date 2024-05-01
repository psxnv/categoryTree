export const data = [
  {
    id: 1,
    name: "автомобили",
    subItems: [
      { id: 11, name: "файл" },
      { id: 12, name: "файл" },
      { id: 13, name: "файл" },
      { id: 14, name: "файл" },
      {
        id: 15,
        name: "папка",
        subItems: [
          { id: 111, name: "файл" },
          { id: 112, name: "файл",
          subItems: [
            { id: 113, name: "файл" },
            { id: 113, name: "файл" },
            { id: 113, name: "файл" },
          ],
        },
          { id: 113, name: "файл" },
          {
            id: 111,
            name: "папка",
            subItems: [
              { id: 113, name: "файл" },
              { id: 113, name: "файл" },
              { id: 113, name: "файл", 
              subItems: [
                { id: 113, name: "файл" },
                { id: 113, name: "файл" },
                { id: 113, name: "файл" },
              ],
            },

            ],
          },
        ],
      },
    ],
  },
  { id: 2, name: "файл"},
  { id: 3, name: "файл"},
  { id: 4, name: "файл"},
  { 
    id: 5, 
    name: "папка",
    subItems: [
        { id: 211, name: "файл" },
        { id: 222, name: "файл" },
        { id: 233, name: "файл" },
        { id: 244, name: "файл" },
    ]
},
];

