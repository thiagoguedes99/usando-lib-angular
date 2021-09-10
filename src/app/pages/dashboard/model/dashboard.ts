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
    value: string | number,
  }[],
  acronymsAffected?: [
    string,
    string | number
  ][],
  technicalDebts?: {
    low: string | number,
    medium: string | number,
    critical: string | number,
  },
  error404?: boolean,
  error500?: boolean
}
