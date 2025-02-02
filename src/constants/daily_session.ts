enum SessionType {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
}

export interface SessionItem {
  id: number;
  heading: string;
  description: string;
  type: SessionType;
}

const session: SessionItem[] = [
  {
    id: 1,
    heading: 'Embracing Your Body: A Self-Compassion Meditation',
    description:
      'Embrace self-compassion and shift from body criticism to kindness and appreciation with this guided meditation',
    type: SessionType.Morning,
  },
  {
    id: 2,
    heading: 'Communication Skills for Self-Respect - FAST Technique',
    description:
      'Equip yourself with skills to maintain boundaries and self-respect in relationships',
    type: SessionType.Morning,
  },
  {
    id: 3,
    heading: 'Appearance ideals in the media',
    description: 'Session',
    type: SessionType.Afternoon,
  },
  {
    id: 4,
    heading: 'Body Dysmorphic Disorder Screener',
    description: '10-item screening questionnaire for Body Dysmorphic Disorder',
    type: SessionType.Afternoon,
  },
  {
    id: 5,
    heading: 'Overcoming Self-Doubt',
    description: 'Unleash your full potential by silencing your inner critic',
    type: SessionType.Evening,
  },
  {
    id: 6,
    heading: 'Silencing Your Inner Critic',
    description:
      'Challenge the negative, self-doubting voice in your head that undermines your confidence',
    type: SessionType.Evening,
  },
];

export { SessionType, session };
