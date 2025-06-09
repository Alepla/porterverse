export interface ZoneData {
    name: string;
    position: [number, number, number];
    color: number;
    link: string;
  }
  
  export const zones: ZoneData[] = [
    {
      name: "Nurture",
      position: [3, 1, 0],
      color: 0xA8E6A2,
      link: "https://www.youtube.com/watch?v=PkiIPzG37vQ"
    },
    {
      name: "Worlds",
      position: [-3, 1, 0],
      color: 0x66CCFF,
      link: "https://www.youtube.com/watch?v=HAIDqt2aUek"
    },
    {
      name: "Virtual Self",
      position: [0, 1, -3],
      color: 0xF7FF00,
      link: "https://www.youtube.com/watch?v=HPc8QMycGno"
    },
    {
        name: "SMILE! :D",
        position: [0, 1, 3],
        color: 0xFF8AE2,
        link: "https://www.youtube.com/watch?v=CzJbz9qSsd0"
    }
  ];
  