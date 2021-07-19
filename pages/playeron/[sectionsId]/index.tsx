import { useRouter } from "next/dist/client/router";

interface Props {}

const SectionsId = (props: Props) => {
  const router = useRouter();
  console.log(router.pathname, router.query.sectionsId);
  return <div>{router.query.sectionsId}</div>;
};

export default SectionsId;
