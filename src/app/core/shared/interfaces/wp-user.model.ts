export interface WpUser {
  ID?: number;
  user_login: string;
  user_pass: string;
  user_nicename: string;
  user_email: string;
  user_url: string;
  user_registered: Date;
  user_activation_key: string;
  user_status: number;
  display_name: string;
}
