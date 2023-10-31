"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const client = new QueryClient();

export default function PublicLayout(props: PublicLayoutProps) {
  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
}
