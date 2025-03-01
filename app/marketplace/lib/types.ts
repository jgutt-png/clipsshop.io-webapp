export interface Seller {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  isVerified: boolean;
  joinedDate: Date;
}

export interface ReelPack {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnailUrl: string;
  category: string;
  tags: string[];
  numberOfClips: number;
  totalDuration: string;
  seller: Seller;
  rating: number;
  reviewCount: number;
  createdAt: Date;
}
