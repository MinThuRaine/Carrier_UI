import { Profile } from './profile.model';

export interface Way {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  requested: boolean;
  requestCount: number;
  owner: Profile;
}
