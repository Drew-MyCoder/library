interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    rating: number;
    total_copies: number;
    available_copies: number;
    description: string;
    cover_color: string;
    cover: string;
    videoUrl: string;
    color: string;
    summary: string;
    createdAt: Date | null;
    isLoanedBook?: boolean;
  }