import { generateOgImage, loadDataUrl } from 'lib/utils/og';
import { getTranslations } from 'next-intl/server';

// This is a workaround to enable static OG image generation, see
// https://github.com/vercel/next.js/issues/51147#issuecomment-1842197049

interface Props {
  params: {
    locale: string;
  };
}

export const dynamic = 'error';
export const dynamicParams = false;

export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpg';

const OgImage = async ({ params }: Props) => {
  const t = await getTranslations({ locale: params.locale });

  const title = t(`learn.add_network.sidebar_title`);
  const background = loadDataUrl(`public/assets/images/learn/wallets/add-network/cover.jpg`, 'image/jpeg');

  return generateOgImage({ title, background });
};

export default OgImage;
