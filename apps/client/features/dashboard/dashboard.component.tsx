/* eslint-disable prettier/prettier */
import { useEffect } from "react";

import dynamic from "next/dynamic";

import { Properties } from '../../@types';
import { useFetch } from "../../hooks/useFetch";
import * as S from "./styles";

const DynamicCard = dynamic<{ data: Properties[], loading: boolean }>(() => import('../../components/card-schedule/card.component'), {
  loading: () => <p>...</p>,
})

const DashboardComponent = () => {
  const { schedule, handleFetch, loading } = useFetch();

  useEffect(() => {
    handleFetch();
  // eslint-disable-next-line
  }, []);

  return (
    <S.Dashboard>
      <DynamicCard data={schedule} loading={loading} />
    </S.Dashboard>
  );
};

export default DashboardComponent;
