const en = {
  common: {
    appName: 'IntellectCaseStudy',
    reset: 'Reset',
    cancel: 'Cancel',
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
    outOf: ' out of {{total}}',
    growthAreas: 'Your areas of growth are:',
    strengthAreas: 'Your strengths are:',
  },
  daily: {
    title: 'Daily',
    resetAlert: 'This will reset your session progress.',
    banner: {
      desc: 'Try these activities daily to see long term improvement in your mental-health & productivity',
      setReminder: 'Set reminder',
      resetSession: 'Reset Session',
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
    chooseTheme: 'Choose Theme',
    auto: 'Auto',
    light: 'Light',
    dark: 'Dark',
    chooseLanguage: 'Choose Language',
    english: 'English',
    french: 'French',
  },
};

export default en;
export type Translations = typeof en;
