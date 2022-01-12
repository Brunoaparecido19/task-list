import { Boxs, Section } from "./styles";
import { TitleBoxs } from "../Title/styles";
import Form from "../Form";

export function Box() {
  return (
    <main>
      <Section>
        <Boxs>
          <TitleBoxs>backlog</TitleBoxs>
          <Form />
        </Boxs>
        <Boxs>
          <TitleBoxs> to do </TitleBoxs>
          <Form />
        </Boxs>
        <Boxs>
          <TitleBoxs> in progress</TitleBoxs>
          <Form />
        </Boxs>
        <Boxs>
          <TitleBoxs> designed</TitleBoxs>
          <Form />
        </Boxs>
      </Section>
    </main>
  );
}
