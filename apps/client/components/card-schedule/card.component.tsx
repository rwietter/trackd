/* eslint-disable prettier/prettier */
import { Spinner } from 'ui';

import { Properties } from '../../@types';
import { useTheme, ThemeStore } from '../../store';
import { mapColors } from './mapping';
import * as S from './styles';
import { Props } from './types'

const NoContent = () => (
  <S.NoContent>
    <h2>Não foram encontrados registros para a data selecionada.</h2>
    <p>Tente buscar por outra data.</p>
  </S.NoContent>
)

const CardComponent = ({ data }: Props) => {
  const { theme } = useTheme() as ThemeStore

  if (!data) return <NoContent />

  if (data.length < 1) return <Spinner size="large" />

  return (
    <>
      {data.map(({ key, day, isOld, records, records_available, border }: Properties) => {
        if (!isOld) {
          return null
        }

        return (
          <S.Card
            key={day}
            borders={border ? mapColors[key] as any : 'disabled'}
            data-theme={theme}
          >
            <S.CardHeader>
              <S.CardTitle
                color={day ? (mapColors[key] as any) : "Segunda"}
                data-border={border}
              >
                {key.toUpperCase()}
              </S.CardTitle>
              <S.CardDate>{day}</S.CardDate>
            </S.CardHeader>
            <S.Records>
              <S.Record>
                <S.RecordIndicator>{records}</S.RecordIndicator>
                <S.RecordTitle>Totais</S.RecordTitle>
              </S.Record>
              <S.Record>
                <S.RecordIndicator>
                  {records_available}
                </S.RecordIndicator>
                <S.RecordTitle>Disponíveis</S.RecordTitle>
              </S.Record>
            </S.Records>
          </S.Card>
        );
      })}
    </>
  )
}


export default CardComponent;