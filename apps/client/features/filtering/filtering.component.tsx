/* eslint-disable prettier/prettier */

import dynamic from 'next/dynamic';

import { useIsoWeek, DatePicker } from 'ui';

import { Properties } from '../../@types';
import { HeaderContent } from '../../components/header-content';
import { useFetch } from '../../hooks/useFetch';
import * as S from './styles';

const DynamicCard = dynamic<{ data: Properties[] | null }>(() => import('../../components/card-schedule/card.component'), {
  loading: () => <p>...</p>,
})

const FilteringComponent = () => {
  const { disableDate } = useIsoWeek();
  const { schedule, handleFetch } = useFetch();

  console.log('schedule', schedule)

  return (
    <>
      <S.DateContainer>
        <HeaderContent
          title="Pesquisa"
          description="Selecione uma data para buscar a agenda"
        />
        <DatePicker
          disableDate={disableDate as (curr: any) => boolean[]}
          onChangeDate={handleFetch}
        />
      </S.DateContainer>
      <S.ScheduleContainer>
        <DynamicCard data={schedule.length < 1 ? null : schedule} />
      </S.ScheduleContainer>
    </>
  );
};

export default FilteringComponent;
