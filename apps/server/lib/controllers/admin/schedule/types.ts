export type WeekSchedule = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

export type HttpPayload = {
  day: string;
  month: string;
  year: string;
  week: WeekSchedule;
  weekAvailable: WeekSchedule;
  userId: string;
};
