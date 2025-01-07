"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ClerkProvider } from "@clerk/nextjs";

const queryClient = new QueryClient();

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
