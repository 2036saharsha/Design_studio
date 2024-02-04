import { useMyPresence, useOthers } from "@/liveblocks.config"
import LiveCursors from "./cursor/LiveCursors"
import { useCallback } from "react";

function Live() {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;
  const handlePointerMove = useCallback 
  return (
    <div>
        <LiveCursors others={others} />
    </div>
  )
}

export default Live