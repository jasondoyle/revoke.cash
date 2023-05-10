import PublicLayout from './PublicLayout';

interface Props {
  children: React.ReactNode;
}

const ContentPageLayout = ({ children }: Props) => {
  return <PublicLayout>{children}</PublicLayout>;
};

export default ContentPageLayout;
