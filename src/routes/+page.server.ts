import type { PageServerLoad } from "./$types";

function sleep(ms: number, then: string) {
  return new Promise((resolve) => setTimeout(() => resolve(then), ms));
}

export const load: PageServerLoad = () => {
  return {
    p2: sleep(2000, "2000ms slept"),
    p3: sleep(3000, "3000ms slept"),
  };
};
