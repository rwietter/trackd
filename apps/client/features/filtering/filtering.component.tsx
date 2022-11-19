/* eslint-disable prettier/prettier */
import { useCallback, useEffect, useMemo, useState } from 'react';

import dynamic from 'next/dynamic';

import type { MomentInput } from 'moment'
import { useIsoWeek, DatePicker } from 'ui';

import { Properties } from '../../@types';
import { HeaderContent } from '../../components/header-content';
import { useFetch } from '../../hooks/useFetch';
import * as S from './styles';

const Components = {
  Card: dynamic<{ data: Properties[], loading: boolean }>(() => import('../../components/card-schedule/card.component'), {
    ssr: false
  })
}

const FilteringComponent = () => {
  const { disableEndWeek } = useIsoWeek();
  const [isLoading, setIsLoading] = useState(false);
  const { schedule, handleFetch } = useFetch();

  const handleChange = (value: { _d: MomentInput }) => {
    setIsLoading(true)
    handleFetch(value)
  }

  useEffect(() => {
    if (schedule) {
      setIsLoading(false)
    }
  }, [schedule])


  return (
    <>
      <S.DateContainer>
        <HeaderContent
          title="Pesquisa"
          description="Selecione uma data para buscar a agenda"
        />
        <DatePicker
          disableDate={disableEndWeek as (curr: any) => boolean[]}
          onChangeDate={handleChange}
        />
      </S.DateContainer>
      <S.ScheduleContainer>
        <Components.Card data={schedule} loading={isLoading} />
      </S.ScheduleContainer>
    </>
  );
};

export default FilteringComponent;
