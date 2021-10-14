export interface DashboardModelResponseMock {
  status: string | number,
  body: {
    prr: {
      value: string | number,
      operational_excellence: string | number,
      safety: string | number,
      reliability: string | number,
      performance_efficiency: string | number,
      cost_optimization: string | number,
    },
    risk: {
      low: string | number,
      medium: string | number,
      critical: string | number,
    },
    score_history: {
      date: string | number,
      value: string | number,
    }[],
    acronyms_affected: {
      acronyms: string | number,
      score: string | number
    }[],
    technical_debts: {
      low: string | number,
      medium: string | number,
      critical: string | number,
    },
  },
}

export interface DashboardModelResponse {
  prr: {
    value: string | number,
    operational_excellence: string | number,
    safety: string | number,
    reliability: string | number,
    performance_efficiency: string | number,
    cost_optimization: string | number,
  },
  risk: {
    low: string | number,
    medium: string | number,
    critical: string | number,
  },
  score_history: {
    date: string | number,
    value: string | number,
  }[],
  acronyms_affected: {
    acronyms: string | number,
    score: string | number
  }[],
  technical_debts: {
    low: string | number,
    medium: string | number,
    critical: string | number,
  },
}

export interface DashboardModelFactory {
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
    low: string | number,
    medium: string | number,
    critical: string | number,
  },
  error404?: boolean,
  error500?: boolean
}
