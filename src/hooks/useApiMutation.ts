import { useMutation } from "convex/react";
import { useState } from "react";

export function useApiMutation(mutationFunction: any) {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = async (args: any) => {
    setPending(true);
    try {
      const result = await apiMutation(args);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setPending(false);
    }
  };

  return { mutate, pending };
}
