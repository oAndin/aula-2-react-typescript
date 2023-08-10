import Card from "./components/Card";
import CardList from "./components/CardList";

const App = () => {

  return (
    <>
      <CardList>
        <Card
          titulo='titulo 1'
          imagem="https://avatars.githubusercontent.com/u/84361085?v=4"
          descricao="Gustavo"
        />
        <Card
          titulo='titulo 2'
          imagem="https://avatars.githubusercontent.com/u/131361529?v=4"
          descricao="Caue de 4"
          acoes
          categoria="Homem bonito"
        />
        <Card
          titulo='titulo 3'
          imagem="https://avatars.githubusercontent.com/u/113113171?v=4"
          descricao="Talyson"
        />
      </CardList>

    </>
  )
};

export default App;