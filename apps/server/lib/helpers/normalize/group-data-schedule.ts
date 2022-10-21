/* eslint-disable no-shadow */
import { WeekSchedule } from '@prisma/client';

type IRecord = {
  record: string;
}

type IRecordAvailables = {
  recordAvailable: string;
}

const week = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

const normalizeSchedule = (weekSchedule: WeekSchedule) => {
  const recordAvailables: IRecordAvailables[] = [];
  const records: IRecord[] = [];

  Object.entries(weekSchedule).map(([key, value]) => {
    if (!key.includes('_record')) return {};

    if (key.match('_record_available')) recordAvailables.push({ recordAvailable: value.toString() });
    else records.push({ record: value.toString() });

    return {};
  }, []);

  const schedule = records.map((curr, idx) => ({
    day: week[idx],
    key: `${idx}`,
    records: records[idx].record,
    records_available: recordAvailables[idx].recordAvailable,
  }), {});

  return schedule;
};

export { normalizeSchedule };
