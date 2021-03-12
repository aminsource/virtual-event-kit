import { Job, Sponsor, Stage, Speaker } from '@lib/types';
const API_URL = 'http://api.hoomanamini.ir/graphql';
// const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query: string, { variables }: { variables?: Record<string, any> } = {}) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    const json = await res.json();
    if (json.errors) {
        // eslint-disable-next-line no-console
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

export async function getAllSpeakers(): Promise<Speaker[]> {
    const data = await fetchCmsAPI(`
{
 speakers{
    name
    bio
    slug
    title
    image{
      url
    }
    twitter
    github
    company
  }
}  `);
    return data.speakers;
}

export async function getAllSponsors(): Promise<Sponsor[]> {
    const data = await fetchCmsAPI(`
{
  companies{
    name
    description
    slug
    website
    callToAction
    callToActionLink
    discord
    youtubeSlug
    tier
    cardImage{
      url
    }
    logo{
      url
    }

  }
}`);

    return data.companies;
}
