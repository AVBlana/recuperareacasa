import {
  ContactSingleScreen,
  IContactSingleScreen,
} from "@/screens/Contact/ContactSingle";

export async function getServerSideProps({ query }: { query: { id: string } }) {
  return {
    props: {
      id: query.id,
    },
  };
}

export default function ContactSingle(props: IContactSingleScreen) {
  return <ContactSingleScreen {...props} />;
}
