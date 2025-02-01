const en = {
  common: {
    appName: 'IntellectCaseStudy',
  },
  component: {
    greeting: {
      morning: 'Good morning',
      afternoon: 'Good afternoon',
      evening: 'Good evening',
    },
  },
  home: {
    title: 'Home',
  },
  daily: {
    title: 'Daily',
    banner: {
      desc: 'Try these activities daily to see long term improvement in your mental-health & productivity',
      setReminder: 'Set reminder',
    },
    progress: {
      title_zero: 'Finish 3+ exercises today to stay calm and focused',
      title_one: '{{count}}/{{total}} Completed. Keep going',
      title_other: '{{count}}/{{total}} Completed. Keep going',
      sessionTogether: '{{count}} people doing session with you this hour',
    },
    quote:
      '"I advise all of my clients to develop a consistent daily routine which includes a mindfulness exercise"\n- Linda Rinn, Clinical Psychologist',
  },
  settings: {
    title: 'Settings',
  },
};

export default en;
export type Translations = typeof en;
