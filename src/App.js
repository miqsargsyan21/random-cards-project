import Instructions from "./components/sections/Instructions";
import Container from "./components/shared/Container";
import Content from "./components/sections/Content";
import Layout from "./components/Layout";
import './styles/global.scss';

function App() {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-4">
      <Layout className="col-span-full lg:col-span-3 h-screen flex flex-col border-l border-black border-r lg:border-r-0">
        <Content className="grow overflow-auto px-10" />
      </Layout>
      <Instructions className="lg:col-span-1" />
    </Container>
  );
}

export default App;
