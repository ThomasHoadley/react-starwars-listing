import { useMutation } from "@tanstack/react-query";
import { updateCharacter } from "../../../api/characters/characters-listing.api";
import { UpdateCharacterBody } from "../../../api/types";

function useUpdateCharacter() {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: UpdateCharacterBody) => {
      const response = await updateCharacter(body);
      const result = await response.json();
      console.log("useUpdateCharacter", { response, result });
    },
  });
}

export default useUpdateCharacter;
