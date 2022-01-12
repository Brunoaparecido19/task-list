import { GlobalStyle } from "./styles";
// eslint-disable-next-line import/named
import { Box } from "./components/Box";
import { Title } from "./components/Title/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Title>task list</Title>
      <Box />
    </>
  );
}

export default App;
