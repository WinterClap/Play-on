import { useRouter } from "next/dist/client/router";

interface Props {}

const SectionsId = (props: Props) => {
  const router = useRouter();
  console.log(router.pathname, router.query.sectionsId);
  return <div>{SectionsId}</div>;
};

export default SectionsId;
