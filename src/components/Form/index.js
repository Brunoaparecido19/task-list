import { FiPlus } from "react-icons/fi";
import { FormContainer, FormInput, FormBtn } from "./styles";

export default function Form() {
  return (
    <FormContainer className="container-form">
      <form action="#">
        <FormInput type="text" placeholder="New Task" />
        <FormBtn type="submit">
          <FiPlus />{" "}
        </FormBtn>
      </form>
    </FormContainer>
  );
}
// onChange={handleChange}
// onSubmit={handleSubmit}
