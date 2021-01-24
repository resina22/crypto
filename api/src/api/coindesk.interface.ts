export interface Coindesk {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  bpi: BPI;
}

export interface BPI {
  [index: string]: {
    code: string;
    rate: string;
    description: string;
    rate_float: number;
  };
}
