type Buyer = {
  price: number;
  accepts: () => Promise<boolean>;
};

export function bestBuyer(buyers: Buyer[]) {}
