import { useMutation, useSelf } from "~/liveblocks.config";

export function useDeleteLayer() {
  const selection = useSelf((self) => self.presence.selection);

  const deleteLayer = useMutation(
    ({ storage, setMyPresence }) => {
      const liveLayers = storage.get("layers");
      const liveLayerIds = storage.get("layerIds");

      for (const id of selection) {
        liveLayers.delete(id);
        const index = liveLayerIds.indexOf(id);

        if (index !== -1) {
          liveLayerIds.delete(index);
        }
      }

      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection],
  );

  return deleteLayer;
}
