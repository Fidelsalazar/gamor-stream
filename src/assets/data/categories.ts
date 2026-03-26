export interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
  image?: string;
}

export const categories: Category[] = [
  { id: "01", name: "Action Games", image: "/images/fortnite_PNG95.png" },
  { id: "02", name: "Sports Games", image: "/images/fortnite_PNG96.png" },
  { id: "03", name: "Adventure Games", image: "/images/fortnite_PNG32.png" },
  { id: "04", name: "Arcade Games", image: "/images/fortnite_PNG52.png" },
  { id: "05", name: "Fantasy Games", image: "/images/fortnite_PNG68.png" },
  { id: "06", name: "Strategy Games", image: "/images/fortnite_PNG45.png" },
  { id: "07", name: "Shooter Games", image: "/images/fortnite_PNG45.png" }
];