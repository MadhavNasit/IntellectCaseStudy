export interface InsightItem {
  id: number;
  heading: string;
  progress: number;
  change: number;
}

export const insights: InsightItem[] = [
  {
    id: 1,
    heading: 'Mental Wellbeing',
    progress: 41,
    change: -9,
  },
  {
    id: 2,
    heading: 'Work-Life Balance',
    progress: 88,
    change: 22,
  },
  {
    id: 3,
    heading: 'Self Efficacy',
    progress: 50,
    change: 0,
  },
  {
    id: 4,
    heading: 'Relationship Building',
    progress: 33,
    change: -30,
  },
  {
    id: 5,
    heading: 'Optimism',
    progress: 86,
    change: 14,
  },
];
