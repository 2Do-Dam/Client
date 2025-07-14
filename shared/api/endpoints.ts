export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    GOOGLE: '/auth/google',
    LOGOUT: '/auth/logout',
  },
  USERS: {
    BASE: '/api/users',
    ROLES: '/api/users/roles',
  },
  CONTENTS: {
    BASE: '/api/contents',
  },
  HASHTAGS: {
    RECOMMEND: '/api/hashtags/recommend',
  },
  TITLE: {
    ANALYZE: '/api/title/analyze',
  },
  CALENDAR: {
    BASE: '/api/calendar',
    RECOMMEND: '/api/calendar/recommend',
    BY_ID: (id: string | number) => `/api/calendar/${id}`,
  },
  PLANNER: {
    DAILY: '/api/planner/daily',
  },
  FEEDBACK: {
    BASE: '/api/feedback',
  },
} as const;
