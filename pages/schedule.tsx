import { GetStaticProps } from 'next';

import Page from '@components/page';
import Schedule from '@components/schedule';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllStages } from '@lib/cms-api';
import { Stage } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  allStages: Stage[];
};

export default function SchedulePage({ allStages }: Props) {
  const meta = {
    title: 'برنامه زمانی - رویداد مجازی',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="برنامه زمانی" description={meta.description} />
        {/* <Schedule allStages={allStages} /> */}
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allStages = await getAllStages();

  return {
    props: {
      allStages
    },
    revalidate: 60
  };
};
