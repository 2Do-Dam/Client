"use client";
import React from 'react';
import Calendar from '@/features/calendar/components/Calendar';
import Graph from '@/features/graph/Graph';

export default function Dashboard() {
  return (
    <div>
      <Calendar />
      <Graph />
    </div>
  );
}