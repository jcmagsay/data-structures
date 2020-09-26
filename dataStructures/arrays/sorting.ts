const orders = [
  {
    timestamp: 2,
    product: 'a'
  },
  {
    timestamp: 3,
    product: 'a'
  },
  {
    timestamp: 5,
    product: 'b'
  }
];

const ads = [
  {
    timestamp: 1,
    product: 'a'
  },
  {
    timestamp: 3,
    product: 'b'
  },
  {
    timestamp: 4,
    product: 'a'
  },
];

const determineAttributions = (orders, ads) => {
  const orderMap = {};

  orders.forEach((order) => {
    const currentProduct = order.product;
    const currentTimestamp = order.timestamp;

    const mappedProduct = orderMap[currentProduct];

    let valuesToSet;

    if (mappedProduct) {
      mappedProduct.push(currentTimestamp);
      valuesToSet = mappedProduct;
    } else {
      valuesToSet = new Array();
      valuesToSet.push(currentTimestamp);
    }

    orderMap[currentProduct] = valuesToSet;
  });

  ads.map((ad) => {
    const adTimestamp = ad.timestamp;
    const adProduct = ad.product;

    orderMap[adProduct] =

  });
};

determineAttributions(orders, ads);