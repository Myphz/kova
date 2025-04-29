import type { Readable } from "svelte/store";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Overwrite<T, U> = Omit<T, keyof U> & U;
export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

export type UnwrapWritable<T> = T extends Readable<infer R> ? R : never;
