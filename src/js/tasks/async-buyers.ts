export type Buyer = {
  price: number;
  accepts: () => Promise<boolean>;
};

type Item = {
  sortedIndex: number;
  index: number;
  price: number;
  accept: boolean;
  date: number;
};

export async function bestBuyer(buyers: Buyer[]) {
  const buyersWithIndices = buyers.map((buyer, index) => ({ ...buyer, index }));

  const groupedBuyes = Object.groupBy(buyersWithIndices, (b) => b.price);
  const items = Object.entries(groupedBuyes).toSorted(
    ([kA], [kB]) => +kB - +kA,
  );

  const promises = items.map(([_, byers]) => {
    const prms = byers?.map((b) => {
      return b.accepts().then((v) => {
        if (v) {
          return b.index;
        }

        return Promise.reject();
      });
    });

    return Promise.any(prms ?? []).catch(() => -1);
  });

  for await (const p of promises) {
    const result = await p;

    if (p !== -1) {
      return result;
    }
    console.log(result);
  }

  return -1;
}
