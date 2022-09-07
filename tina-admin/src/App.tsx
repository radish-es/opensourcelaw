import TinaCMS, { TinaAdmin } from "tinacms";
import { TinaEditProvider, setEditing } from "tinacms/dist/edit-state";

function App() {
  setEditing(true);

  const branch = 'dev';
  const clientId = 'eb6f1d9a-c35d-40b3-8488-d39b4bf7d5fb';
  const apiURL =
    process.env.NODE_ENV == "development"
      ? "http://localhost:4001/graphql"
      : `https://content.tinajs.io/content/${clientId}/github/${branch}`;

  return (
    <TinaEditProvider
      editMode={
        <TinaCMS apiURL={apiURL}>
          <TinaAdmin />
        </TinaCMS>
      }
    >
      <div>Need to be in edit mode!</div>
    </TinaEditProvider>
  );
}

export default App;
