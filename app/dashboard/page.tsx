"use client";
import React from 'react';
import Calendar from '@/features/calendar/components/Calendar';
import Graph from '@/features/graph/Graph';
import HashtagGenerator from '@/features/hashtag/components/HashtagGenerator';

export default function Dashboard() {
  return (
    <div>
      <Calendar />
      <Graph />
      <HashtagGenerator />
    </div>
  );
}