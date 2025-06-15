export interface ResponsePayloadWithMeta<T> {
  items: T;
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export async function paginate<T>(
  queryFn: () => Promise<T>,
  countFn: () => Promise<number>,
  page: number = 1,
  limit: number = 10,
): Promise<ResponsePayloadWithMeta<T>> {
  const [items, total] = await Promise.all([queryFn(), countFn()]);

  return {
    items,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}
