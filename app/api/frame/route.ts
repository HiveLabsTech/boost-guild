import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import axios from 'axios';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  let number = 0;
  if (message?.button === 1) {
    const checkUrl = `https://api.rabbithole.gg/v1.3/quests/${accountAddress}?pageNo=1&pageSize=10&status=redeemable`;
    (async () => {
      try {
        const result = await axios.get(checkUrl);
        number = result.data.quests.length;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }

  if (message?.button === 2) {
    return NextResponse.redirect(
      'https://rabbithole.gg/quests?wallet_ref=0x7FF4F8FE1dBbBA8Dc27103359BF96e97a4d44114',
      { status: 302 },
    );
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `🐇 Quest Numbers: ${number}`,
        },
      ],
      image: `${NEXT_PUBLIC_URL}/park-2.png`,
      post_url: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
