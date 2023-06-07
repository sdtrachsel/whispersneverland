const data = [
  {
    id: 1686161130801,
    title: "The Super Cool Dream Factory",
    calendarDate: new Date("2023-06-15"),
    displayDate: "06.15.2023",
    description: "Description for Object 1",
    image: {
      default: true,
      urls: {
        altText: "Whispers From Neverland with moon",
        regular: "https://i.imgur.com/6b9hrSL.png",
        small: "",
        thumb: "",
        raw: ""
      }
    }
  },
  {
    id: 1686161130802,
    title: "I went back to highschool. I didn't like it",
    calendarDate: new Date("2023-06-07"),
    displayDate: "06.07.2023",
    description: "Description for Object 2",
    image: {
      default: true,
      urls: {
        altText: "Whispers From Neverland with moon",
        regular: "https://i.imgur.com/6b9hrSL.png",
        small: "",
        thumb: "",
        raw: ""
      }
    }
  },
  {
    id: 1686161130803,
    title: "Paul goes on a journey",
    calendarDate: new Date("2023-06-07"),
    displayDate: "06.07.2023",
    description: "Description for Object 3",
    image: {
      default: true,
      urls: {
        altText: "Whispers From Neverland with moon",
        regular: "https://i.imgur.com/6b9hrSL.png",
        small: "",
        thumb: "",
        raw: ""
      }
    }
  },
  {
    id: 1686161130804,
    title: "Bats",
    calendarDate: new Date("2023-06-04"),
    displayDate: "06.04.2023",
    description: "Description for Object 4",
    image: {
      default: false,
      urls: {
        altText: "white cow lying on grass",
        regular: "https://i.imgur.com/6b9hrSL.png",
        small: "https://images.unsplash.com/photo-1568794045709-edaad184e7da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHwxfHxjb3d8ZW58MHwyfHx8MTY4NjE0ODMzN3ww&ixlib=rb-4.0.3&q=80&w=400",
        thumb: "https://images.unsplash.com/photo-1568794045709-edaad184e7da?ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHwxfHxjb3d8ZW58MHwyfHx8MTY4NjE0ODMzN3ww&ixlib=rb-4.0.3",
        raw: "https://images.unsplash.com/photo-1568794045709-edaad184e7da?ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHwxfHxjb3d8ZW58MHwyfHx8MTY4NjE0ODMzN3ww&ixlib=rb-4.0.3"
      }
    }
  },
  {
    id: 1686161130805,
    title: "Eating grapes",
    calendarDate: new Date("2023-06-01"),
    displayDate: "06.01.2023",
    description: "Description for Object 5",
    image: {
      default: false,
      urls: {
        altText: "green yellow and blue hot air balloon",
        regular: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=400",
        thumb: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=200",
        raw: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3"
      }
    }
  },
  {
    id: 1686161130806,
    title: "Cake tastes gross",
    calendarDate: new Date("2023-05-27"),
    displayDate: "05.27.2023",
    description: "Description for Object 6",
    image: {
      default: false,
      urls: {
        altText: "green yellow and blue hot air balloon",
        regular: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=400",
        thumb: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=200",
        raw: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3"
      }
    }
  },
  {
    id: 1686161130807,
    title: "Look at me fly",
    calendarDate: new Date("2023-05-21"),
    displayDate: "05.21.2023",
    description: "Description for Object 7",
    image: {
      default: false,
      urls: {
        altText: "green yellow and blue hot air balloon",
        regular: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=400",
        thumb: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=200",
        raw: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3"
      }
    }
  },
  {
    id: 1686161130808,
    title: "Polar Bears Ice Skating",
    calendarDate: new Date("2023-05-15"),
    displayDate: "05.15.2023",
    description: "Description for Object 8",
    image: {
      default: false,
      urls: {
        altText: "green yellow and blue hot air balloon",
        regular: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=400",
        thumb: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=200",
        raw: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3"
      }
    }
  },
  {
    id: 1686161130809,
    title: "Aliens",
    calendarDate: new Date("2023-05-04"),
    displayDate: "05.04.2023",
    description: "Description for Object 9",
    image: {
      default: false,
      urls: {
        altText: "green yellow and blue hot air balloon",
        regular: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=400",
        thumb: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=200",
        raw: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3"
      }
    }
  },
  {
    id: 1686161130810,
    title: "Don't Eat Beets for Dinner",
    calendarDate: new Date("2023-05-01"),
    displayDate: "05.01.2023",
    description: "Description for Object 10",
    image: {
      default: false,
      urls: {
        altText: "green yellow and blue hot air balloon",
        regular: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=400",
        thumb: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3&q=80&w=200",
        raw: "https://images.unsplash.com/photo-1594029870771-ae37231fb19d?ixid=M3w0NTc1NDB8MHwxfHNlYXJjaHw2fHxiYWxvb258ZW58MHwyfHx8MTY4NjE2MTI1OHww&ixlib=rb-4.0.3"
      }
    }
  }
];


export default data;