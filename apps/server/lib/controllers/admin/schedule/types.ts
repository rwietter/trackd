export type WeekSchedule = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

export type HttpPayload = {
  date: string;
  week: WeekSchedule;
  weekAvailable: WeekSchedule;
  userId: string;
};
