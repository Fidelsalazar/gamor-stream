import fortnitePNG95 from '../images/fortnite_PNG95.png';
import fortnitePNG96 from '../images/fortnite_PNG96.png';
import fortnitePNG32 from '../images/fortnite_PNG32.png';
import fortnitePNG52 from '../images/fortnite_PNG52.png';
import fortnitePNG68 from '../images/fortnite_PNG68.png';
import fortnitePNG45 from '../images/fortnite_PNG45.png';

export interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
  image?: string;
}

export const categories: Category[] = [
  { id: "01", name: "Action Games", image: fortnitePNG95 },
  { id: "02", name: "Sports Games", image: fortnitePNG96 },
  { id: "03", name: "Adventure Games", image: fortnitePNG32 },
  { id: "04", name: "Arcade Games", image: fortnitePNG52 },
  { id: "05", name: "Fantasy Games", image: fortnitePNG68 },
  { id: "06", name: "Strategy Games", image: fortnitePNG45 },
  { id: "07", name: "Shooter Games", image: fortnitePNG45 }
];