import { Hydrate, QueryClient, dehydrate } from "@tanstack/react-query";
import { cache } from "react";

import { getTodos, getTodosRoute } from "@/services/todos";

export const getQueryClient = cache(() => new QueryClient());

export const QueryHydrate = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: [getTodosRoute()],
    queryFn: () => getTodos(),
  });
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
