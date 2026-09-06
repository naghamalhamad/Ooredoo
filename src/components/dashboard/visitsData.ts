export type AreaVisitStatus = 'Scheduled' | 'Active' | 'Completed' | 'Canceled'

export type HomeVisitStatus =
  | 'Door Closed'
  | 'Interested Later'
  | 'Not Interested'
  | 'Activation Completed'
  | 'Activation Cancelled'
  | 'Not interested at all'

export interface HomeVisit {
  status: HomeVisitStatus
  title: string
  datetime: string
  hotLead?: boolean
}

export interface AreaVisit {
  name: string
  status: AreaVisitStatus
  title: string
  visitNumber: string
  channelType: string
  surveyType: string
  dateFrom: string
  dateTo: string
  region: string
  wilaya: string
  locality: string
  completedHomeVisits: number
  homeVisits: HomeVisit[]
}

export const areaVisits: AreaVisit[] = [
  {
    name: 'Visit name',
    status: 'Scheduled',
    title: 'Visit title',
    visitNumber: 'visit number',
    channelType: 'Dealer',
    surveyType: 'Survey Type',
    dateFrom: '14-1-2024',
    dateTo: '14-2-2024',
    region: 'Region',
    wilaya: 'Wilaya',
    locality: 'locality',
    completedHomeVisits: 0,
    homeVisits: [],
  },
  {
    name: 'Visit name',
    status: 'Active',
    title: 'Visit title',
    visitNumber: 'visit number',
    channelType: 'Dealer',
    surveyType: 'Survey Type',
    dateFrom: '14-1-2024',
    dateTo: '14-2-2024',
    region: 'Region',
    wilaya: 'Wilaya',
    locality: 'locality',
    completedHomeVisits: 0,
    homeVisits: [
      { status: 'Door Closed', title: 'Al Ghubrah Ash Shamaliyah, Muscat', datetime: '2 May 2022  01:00:00' },
      { status: 'Interested Later', title: 'Ahmad Mohammad', datetime: '2 May 2022  01:00:00', hotLead: true },
      { status: 'Not Interested', title: 'Ahmad Mohammad', datetime: '2 May 2022  01:00:00' },
      { status: 'Activation Completed', title: 'Ahmad Mohammad', datetime: '2 May 2022  01:00:00' },
      { status: 'Activation Cancelled', title: 'Ahmad Mohammad', datetime: '2 May 2022  01:00:00' },
      { status: 'Not interested at all', title: 'Ahmad Mohammad', datetime: '2 May 2022  01:00:00' },
    ],
  },
  {
    name: 'Visit name',
    status: 'Completed',
    title: 'Visit title',
    visitNumber: 'visit number',
    channelType: 'Dealer',
    surveyType: 'Survey Type',
    dateFrom: '14-1-2024',
    dateTo: '14-2-2024',
    region: 'Region',
    wilaya: 'Wilaya',
    locality: 'locality',
    completedHomeVisits: 4,
    homeVisits: [],
  },
  {
    name: 'Visit name',
    status: 'Canceled',
    title: 'Visit title',
    visitNumber: 'visit number',
    channelType: 'Dealer',
    surveyType: 'Survey Type',
    dateFrom: '14-1-2024',
    dateTo: '14-2-2024',
    region: 'Region',
    wilaya: 'Wilaya',
    locality: 'locality',
    completedHomeVisits: 0,
    homeVisits: [],
  },
]

export const homeAreaVisit: AreaVisit = {
  name: 'North Muscat Coverage',
  status: 'Active',
  title: 'North Muscat Coverage',
  visitNumber: 'visit number',
  channelType: 'Dealer',
  surveyType: 'Survey Type',
  dateFrom: '9-8-2023',
  dateTo: '10-8-2023',
  region: 'Region',
  wilaya: 'Wilaya',
  locality: 'locality',
  completedHomeVisits: 0,
  homeVisits: [],
}
