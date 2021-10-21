import ContactsForm from "../../components/ContactsForm";
import PageHeader from "../../components/PageHeader";

export default function EditContact() {
  return (
    <>
      <PageHeader title="Editar contato" />
      <ContactsForm buttonLabel="Salvar alterações" />
    </>
  );
}
