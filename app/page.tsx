'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import CoverPage from '@/components/pages/CoverPage';
import JoinDayPage from '@/components/pages/JoinDayPage';
import PurchasePage from '@/components/pages/PurchasePage';
import ActivityPage from '@/components/pages/ActivityPage';
import PointsPage from '@/components/pages/PointsPage';
import VoucherPage from '@/components/pages/VoucherPage';
import SummaryPage from '@/components/pages/SummaryPage';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟加载数据
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-primary-900">
        <div className="text-white text-2xl animate-pulse">加载中...</div>
      </div>
    );
  }

  return (
    <main className="h-screen w-screen overflow-hidden bg-primary-900">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        effect="fade"
        modules={[Mousewheel, EffectFade]}
        className="h-full w-full"
      >
        <SwiperSlide><CoverPage /></SwiperSlide>
        <SwiperSlide><JoinDayPage /></SwiperSlide>
        <SwiperSlide><PurchasePage /></SwiperSlide>
        <SwiperSlide><ActivityPage /></SwiperSlide>
        <SwiperSlide><PointsPage /></SwiperSlide>
        <SwiperSlide><VoucherPage /></SwiperSlide>
        <SwiperSlide><SummaryPage /></SwiperSlide>
      </Swiper>
    </main>
  );
} 