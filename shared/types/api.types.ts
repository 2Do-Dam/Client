// 인증 관련 타입
export interface UserRegisterRequest {
  email: string;
  password: string;
  name: string;
  role?: string; // youtuber/instagrammer/tiktoker, 기본값 youtuber
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface GoogleLoginRequest {
  id_token: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string; // "bearer"
  user: User;
}

export interface User {
  id: string; // UUID
  email: string;
  name: string;
  nickname: string;
  role: string;
  profile_image: string | null;
  created_at: string; // ISO 8601
  is_deleted: boolean;
}

// 사용자 관리
export interface UserListItem extends User {
  // UserListItem은 User와 동일하므로 별도 정의 불필요
}

// 콘텐츠 관리
export interface ContentCreate {
  title: string;
  description?: string;
  hashtags?: string[];
  is_published?: boolean;
}

export interface Content {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  upload_time: string; // ISO 8601
  hashtags?: string[];
  is_published: boolean;
}

// 캘린더 추천
export interface CalendarRecommendRequest {
  content_type: string; // video, image, story, reel
  platform: string; // youtube, instagram, tiktok
  duration?: number;
  complexity?: string; // easy, medium, hard (기본 medium)
}

export interface CalendarRecommendResponse {
  recommended_date: string; // YYYY-MM-DD
  reason: string;
  estimated_duration: number;
}

// 일일 계획
export interface DailyPlannerRequest {
  plan_date: string; // YYYY-MM-DD
  content_count?: number;
  platforms?: string[];
  content_types?: string[];
}

export interface DailyPlannerResponse {
  plan_date: string;
  tasks: string[];
  estimated_duration: number;
  priority_order: string[];
}

// 해시태그 추천
export interface HashtagRecommendRequest {
  keywords: string[];
  platform?: string;
  limit?: number;
}

export interface HashtagRecommendResponse {
  hashtags: string[];
  relevance_scores: number[];
  platform: string;
}

// 제목 분석
export interface TitleAnalyzeRequest {
  title: string;
  platform: string;
  content_type?: string;
}

export interface TitleAnalyzeResponse {
  title: string;
  click_through_rate_score: number;
  engagement_score: number;
  suggestions: string[];
  feedback: string;
  platform_optimized: boolean;
}

// 피드백
export interface FeedbackCreateRequest {
  content: string;
  category?: string; // general, bug, feature, content, other
  priority?: string; // low, medium, high, urgent
}

export interface FeedbackResponse {
  id: number;
  content: string;
  category: string;
  priority: string;
  user_id: string;
  created_at: string; // ISO 8601
  status: string;
}

export interface SendEmailCodeRequest {
  email: string;
}

export interface SendEmailCodeResponse {
  message: string;
}

export interface VerifyEmailCodeRequest {
  email: string;
  code: string;
}

export interface VerifyEmailCodeResponse {
  message: string;
}