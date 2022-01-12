import { Boxs, Section } from "./styles";
import { TitleBoxs } from "../Title/styles";

export function Box() {
  return (
    <main>
      <Section>
        <Boxs>
          <TitleBoxs>backlog</TitleBoxs>
        </Boxs>
        <Boxs>
          <TitleBoxs> to do </TitleBoxs>
        </Boxs>
        <Boxs>
          <TitleBoxs> in progress</TitleBoxs>
        </Boxs>
        <Boxs>
          <TitleBoxs> designed</TitleBoxs>
        </Boxs>
      </Section>
    </main>
  );
}
