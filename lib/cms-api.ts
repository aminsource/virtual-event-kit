import { Job, Sponsor, Stage, Speaker } from '@lib/types';

import * as datoCmsApi from './cms-providers/dato';
import * as strapiCmsApi from './cms-providers/strapi';

let cmsApi: {
  getAllSpeakers: () => Promise<Speaker[]>;
  getAllStages: () => Promise<Stage[]>;
  getAllSponsors: () => Promise<Sponsor[]>;
  getAllJobs: () => Promise<Job[]>;
};
if (process.env.DATOCMS_READ_ONLY_API_TOKEN) {
  cmsApi = datoCmsApi;
} else {
  cmsApi = {
    getAllSpeakers: async () => [],
    getAllStages: async () => [],
    getAllSponsors: async () => [],
    getAllJobs: async () => []
  };
}

export async function getAllSpeakers(): Promise<Speaker[]> {

  return strapiCmsApi.getAllSpeakers();
}

export async function getAllStages(): Promise<Stage[]> {
  return cmsApi.getAllStages();
}

export async function getAllSponsors(): Promise<Sponsor[]> {
  return strapiCmsApi.getAllSponsors();
  // return cmsApi.getAllSponsors();
}

export async function getAllJobs(): Promise<Job[]> {
  return cmsApi.getAllJobs();
}
