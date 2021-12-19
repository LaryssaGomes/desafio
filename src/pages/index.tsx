import Background from "../components/Background";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { ICard } from "../components/interfaces/ICard";
import Main from "../components/Main";
import Section from "../components/Section";
const datas: ICard[] = [
  {
    id: 1,
    text: "Após seu primeiro login será redirecionado uma sequência de questões elas são importantes para que possamos indicar salas mais relevantes para o usuário.",
    number: "01",
  },
  {
    id: 2,
    text: "O usuário entra-lá numa sala, onde nela existirá uma lista de questões ordenadas pelas mais recentes. O usuário poderá criar uma nova questão ou responder alguma que esteja aberta.",
    number: "02",
  },
  {
    id: 3,
    text: "O usuário também poderá criar sua própria sala. E além disso receberá a moeda do jogo a cada resposta respondida. ",
    number: "03",
  },
];
const datasSection2: ICard[] = [
  {
    id: 1,
    text: "Os usuários também podem marcar encontros virtuais, para trocarem conhecimento. A data desses encontros será escolhida pelo usuário que a criou e ela pode ser pública para qualquer pessoa dentro ou fora da sala a qual o usuário pertence.",
    number: "01",
  },
  {
    id: 2,
    text: "Ainda na página de listagem terá ao lado a imagem de um calendário, que lá ficará marcado a data e o link do encontro. A plataforma apenas marca que o encontro em si ocorrerá externo a ela. Ocorreria no meet, ou em outra plataforma.",
    number: "02",
  },
  {
    id: 3,
    text: "Esses encontros poderam ser avaliado pelos participantes, e também os menbros do mesmo receberam algumas moedas da plataforma",
    number: "03",
  },
];

const datasSection3: ICard[] = [
  {
    id: 1,
    text: "Todas essas moedas podem ser usadas para comprar itens de decoração da plataforma, esses itens são colocados nos quartos virtuais dos usuários.",
    number: "01",
  },
  {
    id: 2,
    text: "Ainda nesses quartos existirá uma espécie de um quadrado de notas onde ficará registrando todas as pessoas ajudadas pelo usuário. E também os usuários podem visitar os quartos uns dos outros",
    number: "02",
  },
  {
    id: 3,
    text: "Existirá alguns rankings na plataforma, ranking de pontos, de popularidade, mais pessoas ajudadas na semana...",
    number: "03",
  },
];
export default function Home() {
  return (
    <>
      <Background />
      <Main />
      <Section title="Tire suas dúvidas">
        <Card datas={datas} />
      </Section>
      <Section
        title="
       Encontros"
      >
        <Card datas={datasSection2} />
      </Section>
      <Section
        title="
        Quartos e ranking"
      >
        <Card datas={datasSection3} />
      </Section>
    </>
  );
}
