export type WeekSchedule = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

export type HttpPayload = {
  isoWeek: string;
  isoYear: string;
  week: WeekSchedule;
  weekAvailable: WeekSchedule;
  userId: string;
};
