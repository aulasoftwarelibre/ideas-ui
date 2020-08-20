import faker from 'faker';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import Hero from '../components/Hero/Hero';
import IdeaCardList from '../components/IdeaCard/IdeaCardList';
import { ideas } from '../components/IdeaCard/IdeaCardList.stories';
import Main from '../components/Main/Main';
import SearchBar from '../components/SearchBar/SearchBar';

const Home: NextPage = () => {
  const [criteria, setCriteria] = React.useState("");

  return (
    <div>
      <Head>
        <title>Inicio</title>
      </Head>
      <Hero />
      <Main>
        <div className="mb-10 lg:mx-20">
          <SearchBar criteria={criteria} onChange={setCriteria} />
        </div>
        <IdeaCardList ideas={ideas} />
      </Main>
    </div>
  );
};

export default Home;
