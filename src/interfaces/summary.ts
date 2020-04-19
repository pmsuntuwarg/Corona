export interface CoronaSummary {
  Global: Summary;
  Countries: Array<Summary>;
  Date: Date;
}

export interface Summary {
    Country: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
}
