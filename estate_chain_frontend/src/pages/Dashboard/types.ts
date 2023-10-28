export interface WorkExperience {
  employeeName: string,
  companyName: string,
  position: string,
  location: string,
  startDate: number,
  endDate: number,
}

export interface WorkExperienceResponseData {
  employeeName: string,
  companyName: string,
  position: string,
  location: string,
  startDate: {
    _hex: string,
  },
  endDate: {
    _hex: string,
  },
  isVerified: boolean,
}