/* eslint-disable prettier/prettier */

import { useState } from 'react';

import dynamic from 'next/dynamic';

import type { MomentInput } from 'moment'
import { useIsoWeek, DatePicker } from 'ui';

import { Properties } from '../../@types';
import { HeaderContent } from '../../components/header-content';
import { useFetch } from '../../hooks/useFetch';
import * as S from './styles';

const DynamicCard = dynamic<{ data: Properties[], loading: boolean }>(() => import('../../components/card-schedule/card.component'), {
  ssr: false
})

const FilteringComponent = () => {
  const { disableEndWeek } = useIsoWeek();
  const { schedule, handleFetch, loading } = useFetch();

  return (
    <>
      <S.DateContainer>
        <HeaderContent
          title="Pesquisa"
          description="Selecione uma data para buscar a agenda"
        />
        <DatePicker
          disableDate={disableEndWeek as (curr: any) => boolean[]}
          onChangeDate={handleFetch}
        />
      </S.DateContainer>
      <S.ScheduleContainer>
        <DynamicCard data={schedule} loading={loading} />
      </S.ScheduleContainer>
    </>
  );
};

export default FilteringComponent;
