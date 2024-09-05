export interface Alphabets {
  middle: Letter[];
  high: Letter[];
  low: Letter[];
}

interface Letter {
  letter: string;
  pronunciation: string;
  group: string;
}
