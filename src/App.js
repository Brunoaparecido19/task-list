import { GlobalStyle } from "./styles";
// eslint-disable-next-line import/named
import { Title } from "./components/Title/styles";
import BoxComponents from "./components/Box";

function App() {
  return (
    <>
      <GlobalStyle />
      <Title>task list</Title>
      <BoxComponents />
    </>
  );
}

export default App;
