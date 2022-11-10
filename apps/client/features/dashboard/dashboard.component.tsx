/* eslint-disable prettier/prettier */
import { useEffect } from "react";

import dynamic from "next/dynamic";

import { Properties } from '../../@types';
import { useFetch } from "../../hooks/useFetch";
import * as S from "./styles";

const DynamicCard = dynamic<{ data: Properties[] }>(() => import('../../components/card-schedule/card.component'), {
  loading: () => <p>...</p>,
})

const DashboardComponent = () => {
  const { schedule, handleFetch } = useFetch();

  useEffect(() => {
    handleFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Dashboard>
      <DynamicCard data={schedule} />
    </S.Dashboard>
  );
};

export default DashboardComponent;
