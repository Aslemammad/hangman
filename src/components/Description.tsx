import React, { useEffect } from "react";
import { useStore } from "../store";
import ToolTip from "./ToolTip";
import { Store } from "interfaces";

const Description = () => {
  const [state, setState] = useStore();
  useEffect(() => {
    fetch(process.env.API_URL as string + state?.word?.toLowerCase()).then(
      async (response) => await response,
    ).then(async (thesaurus) => (await thesaurus.json()).thesaurus).then((
      thesaurus,
    ) => setState((prevState: Store) => ({ ...prevState, thesaurus })));
  }, [state.word]);
  return (
    <div>
      {state.thesaurus?.length
        ? state.thesaurus?.filter((word) => word != state.word)?.slice(1, 5)
          ?.join(", ")
        : "The API didn't help us, Sorry please."}
    </div>
  );
};

export default ToolTip(Description);
