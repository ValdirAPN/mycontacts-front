import PropTypes from 'prop-types';

import { ButtonContainer, Form } from "./styles";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import FormGroup from "../FormGroup";

export default function ContactsForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup
        error="O formato do e-mail é inválido."
      >
        <Input type="email" placeholder="Email" error />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactsForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
