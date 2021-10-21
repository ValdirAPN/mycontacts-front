import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="1">Instagram</option>
        <option value="2">Linkedin</option>
        <option value="3">Twitter</option>
      </Select>
    </>
  );
}
