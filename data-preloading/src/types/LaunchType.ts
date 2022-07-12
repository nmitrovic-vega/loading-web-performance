interface LaunchLinks {
  article_link: string;
  flickr_images: string[];
  mission_patch_small: string;
  mission_patch: string;
  presskit: string;
  reddit_campaign: string;
  reddit_launch: string;
  reddit_media: string;
  reddit_recovery: string;
  video_link: string;
  wikipedia: string;
}

interface LaunchRocket {
  rocket_name: string;
  rocket_type: string;
  rocket: {
    active: boolean;
    boosters: number;
    company: string;
    cost_per_launch: number;
    country: string;
    description: string;
    first_flight: Date;
    id: string;
    name: string;
    stages: number;
    success_rate_pct: number;
    type: string;
    wikipedia: string;
  };
}

export interface LaunchType {
  id: string;
  details: string;
  launch_date_utc: Date;
  //   launch_site: LaunchSite;
  launch_success: boolean;
  launch_year: string;
  links: LaunchLinks;
  mission_name: string;
  rocket: LaunchRocket;
  //   telemetry: LaunchTelemetry;
  upcoming: boolean;
}
