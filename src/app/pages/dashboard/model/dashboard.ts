export interface DashboardModel {
  prr?: {
    value: number,
    chart: {
      name: string,
      data: string | number,
      color: string
    }[],
  },
  risk?: {
    name: string,
    data: string | number,
    color: string
  }[],
  scoreHistory?: {
    date: string,
    data: string | number,
  }[],
  acronymsAffected?: [
    string,
    string | number
  ][],
  technicalDebts?: {
    chart: {
      name: string,
      data: string | number,
      color: string
    }[],
    low: string,
    medium: string,
    critical: string,
  },
  error404?: boolean,
  error500?: boolean
}
