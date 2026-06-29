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

function checkComplete(prices: (Item | null)[]) {
  let best: null | Item = null;

  for (const item of prices) {
    if (item === null) {
      break;
    }

    if (!item.accept) continue;

    if (
      best === null ||
      item.price > best.price ||
      (item.price === best.price && item.date < best.date)
    ) {
      best = item;
    }
  }

  return best;
}

export async function bestBuyerOld(buyers: Buyer[]) {
  if (!buyers?.length) return -1;

  const sortedBuyers = buyers
    .map((b, index) => ({ ...b, index }))
    .sort((a, b) => b.price - a.price);

  const prices: (Item | null)[] = new Array(sortedBuyers.length).fill(null);
  let order = 0;

  let pending = sortedBuyers.map((buyer, sortedIndex) => ({
    sortedIndex,
    buyer,
    promise: buyer.accepts().then((accept) => ({
      sortedIndex,
      index: buyer.index,
      price: buyer.price,
      accept,
      date: order++,
    })),
  }));

  while (pending.length) {
    const item = await Promise.race(pending.map((p) => p.promise));
    pending = pending.filter((b) => b.sortedIndex !== item.sortedIndex);

    prices[item.sortedIndex] = item;

    const winner = checkComplete(prices);

    if (winner) {
      return winner.index;
    }

    if (pending.length === 0) {
      return -1;
    }
  }

  return -1;
}

export async function bestBuyer(buyers: Buyer[]) {
  const buyersWithIndices = buyers.map((buyer, index) => ({ ...buyer, index }));

  const promises = Array.from(
    Map.groupBy(buyersWithIndices, (b) => b.price).entries(),
  )
    .toSorted(([priceA], [priceB]) => priceB - priceA)
    .map(([_, buyers]) => {
      const promises = buyers.map((b) =>
        b.accepts().then((result) => (result ? b.index : Promise.reject())),
      );

      return Promise.any(promises).catch(() => -1);
    });

  for (const promise of promises) {
    const index = await promise;

    if (index !== -1) {
      return index;
    }
  }

  return -1;
}
