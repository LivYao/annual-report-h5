export interface UserReport {
  // 基础信息
  joinDate: string;
  scanDays: number;
  
  // 进货信息
  totalBottles: number;
  topBrand: {
    name: string;
    bottles: number;
  };
  
  // 活动信息
  activities: {
    participated: Array<{
      name: string;
      reward: string;
    }>;
    missed: string[];
  };
  
  // 积分信息
  points: {
    total: number;
    exchangedGifts: number;
    favoriteGift: string;
  };
  
  // 货券信息
  vouchers: {
    months: number;
    totalValue: number;
  };
  
  // 用户画像
  profile: {
    type: '资深收藏家' | '积分达人' | '活动达人' | '进货王者';
    description: string;
  };
} 