export interface DashboardModel {
  prr?: {
    value: string | number,
    chart: {
      name: string,
      data: string | number,
      color: string
    }[],

    // operationalExcellence: string | number,
    // safety: string | number,
    // reliability: string | number,
    // performanceEfficiency: string | number,
    // costOptimization: string | number,
  },
  risk?: {
    low: string | number,
    medium: string | number,
    critical: string | number,
  },
  // scoreHistory: [
  //   {
  //     date: string,
  //     value: string | number,
  //   }
  // ],
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
