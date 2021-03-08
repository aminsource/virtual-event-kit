/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://event.hoomanamini.ir';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'hooman.amini';
export const BRAND_NAME = 'رویداد مجازی';
export const SITE_NAME_MULTILINE = ['ACME', 'Conf'];
export const SITE_NAME = 'رویداد مجازی';
export const META_DESCRIPTION =
  'این یک اپ متن باز جهت برگزاری رویدادهای مجازی می باشد';
export const SITE_DESCRIPTION =
  'این یک اپلیکیشن متن باز جهت برگزاری رویدادهای مجازی می باشد';
export const DATE = 'شانزدهم فروردین ماه ۱۴۰۰';
export const SHORT_DATE = 'شانزده فروردین ماه';
export const FULL_DATE = 'شانزده فروردین ماه';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/aminsource/virtual-event-kit';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'روز اول',
    route: '/stage/a'
  },
  {
    name: 'روز دوم',
    route: '/stage/c'
  },
  {
    name: 'روز سوم',
    route: '/stage/m'
  },
  {
    name: 'روز چهارم',
    route: '/stage/e'
  },
  {
    name: 'برنامه زمانی',
    route: '/schedule'
  },
  {
    name: 'سخن رانان',
    route: '/speakers'
  },
  {
    name: 'نمایشگاه',
    route: '/expo'
  },
  {
    name: 'فرصت ‌های شغلی',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
