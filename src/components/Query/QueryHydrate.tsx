import { Hydrate, QueryClient, dehydrate } from "@tanstack/react-query";
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient());

export const QueryHydrate = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const client = getQueryClient();
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
