import { Item } from "./types";

const tradWeek = {
  'Segunda': 'monday',
  'Terça': 'tuesday',
  'Quarta': 'wednesday',
  'Quinta': 'thursday',
  'Sexta': 'friday',
} as const

const normalize = (recordsData: Item[]) => {
  const week = recordsData.reduce((acc, { day, records }: Item) => {
    const typeDay = day as keyof typeof tradWeek
    return { ...acc, [tradWeek[typeDay]]: records };
  }, {})

  const weekAvailable = recordsData.reduce((acc, { day, records_available }: Item) => {
    const typeDay = day as keyof typeof tradWeek
    return { ...acc, [tradWeek[typeDay]]: records_available };
  }, {})

  return { week, weekAvailable };
}

export { normalize };