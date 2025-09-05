import axios, { AxiosInstance } from 'axios';
import { API_ENDPOINTS } from './endpoints';

import {
  UserRegisterRequest,
  UserLoginRequest,
  GoogleLoginRequest,
  AuthResponse,
  UserListItem,
  ContentCreate,
  Content,
  CalendarRecommendRequest,
  CalendarRecommendResponse,
  DailyPlannerRequest,
  DailyPlannerResponse,
  HashtagRecommendRequest,
  HashtagRecommendResponse,
  TitleAnalyzeRequest,
  TitleAnalyzeResponse,
  FeedbackCreateRequest,
  FeedbackResponse,
  SendEmailCodeRequest,
  SendEmailCodeResponse,
  VerifyEmailCodeRequest,
  VerifyEmailCodeResponse,
} from '../types/api.types';

const TOKEN_KEY = 'access_token';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    this.client.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  private getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  }

  private setToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, token);
    }
  }

  private removeToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(TOKEN_KEY);
    }
  }

  // 인증
  async register(data: UserRegisterRequest): Promise<AuthResponse> {
    const res = await this.client.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, data);
    if (res.data.access_token) this.setToken(res.data.access_token);
    return res.data;
  }

  async login(data: UserLoginRequest): Promise<AuthResponse> {
    const res = await this.client.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, data);
    if (res.data.access_token) this.setToken(res.data.access_token);
    return res.data;
  }

  async googleLogin(data: GoogleLoginRequest): Promise<AuthResponse> {
    const res = await this.client.post<AuthResponse>(API_ENDPOINTS.AUTH.GOOGLE, data);
    if (res.data.access_token) this.setToken(res.data.access_token);
    return res.data;
  }

  async logout(): Promise<void> {
    await this.client.get(API_ENDPOINTS.AUTH.LOGOUT);
    this.removeToken();
  }

  // 사용자
  async getUsers(): Promise<UserListItem> {
    const res = await this.client.get<UserListItem>(API_ENDPOINTS.USERS.BASE);
    return res.data;
  }

  // 콘텐츠
  async getContents(): Promise<Content[]> {
    const res = await this.client.get<Content[]>(API_ENDPOINTS.CONTENTS.BASE);
    return res.data;
  }

  async createContent(data: ContentCreate): Promise<Content> {
    const res = await this.client.post<Content>(API_ENDPOINTS.CONTENTS.BASE, data);
    return res.data;
  }

  // 캘린더
  async getCalendar(): Promise<any> {
    const res = await this.client.get(API_ENDPOINTS.CALENDAR.BASE);
    return res.data;
  }

  async createCalendar(data: any): Promise<any> {
    const res = await this.client.post(API_ENDPOINTS.CALENDAR.BASE, data);
    return res.data;
  }

  async updateCalendar(id: string, data: any): Promise<any> {
    const res = await this.client.put(API_ENDPOINTS.CALENDAR.BY_ID(id), data);
    return res.data;
  }

  async deleteCalendar(id: string): Promise<void> {
    await this.client.delete(API_ENDPOINTS.CALENDAR.BY_ID(id));
  }

  async recommendCalendar(data: CalendarRecommendRequest): Promise<CalendarRecommendResponse> {
    const res = await this.client.post<CalendarRecommendResponse>(API_ENDPOINTS.CALENDAR.RECOMMEND, data);
    return res.data;
  }

  // 일일 계획
  async createDailyPlan(data: DailyPlannerRequest): Promise<DailyPlannerResponse> {
    const res = await this.client.post<DailyPlannerResponse>(API_ENDPOINTS.PLANNER.DAILY, data);
    return res.data;
  }

  // 해시태그 추천
  async recommendHashtags(data: HashtagRecommendRequest): Promise<HashtagRecommendResponse> {
    const res = await this.client.post<HashtagRecommendResponse>(API_ENDPOINTS.HASHTAGS.RECOMMEND, data);
    return res.data;
  }

  // 제목 분석
  async analyzeTitle(data: TitleAnalyzeRequest): Promise<TitleAnalyzeResponse> {
    const res = await this.client.post<TitleAnalyzeResponse>(API_ENDPOINTS.TITLE.ANALYZE, data);
    return res.data;
  }

  // 피드백
  async createFeedback(data: FeedbackCreateRequest): Promise<FeedbackResponse> {
    const res = await this.client.post<FeedbackResponse>(API_ENDPOINTS.FEEDBACK.BASE, data);
    return res.data;
  }

  // 이메일 인증 코드 발송
  async sendEmailCode(data: SendEmailCodeRequest): Promise<SendEmailCodeResponse> {
    const res = await this.client.post<SendEmailCodeResponse>(API_ENDPOINTS.USERS.SEND_EMAIL_CODE, data);
    return res.data;
  }

  // 이메일 인증 코드 검증
  async verifyEmailCode(data: VerifyEmailCodeRequest): Promise<VerifyEmailCodeResponse> {
    const res = await this.client.post<VerifyEmailCodeResponse>(API_ENDPOINTS.USERS.VERIFY_EMAIL_CODE, data);
    return res.data;
  }
}

const apiClient = new ApiClient();
export default apiClient;
