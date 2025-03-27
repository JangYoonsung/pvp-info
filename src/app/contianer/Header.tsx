'use client';

import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();

  const clientId = process.env.NEXT_PUBLIC_BATTLE_NET_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_BATTLE_NET_REDIRECT_URI;

  const oauthUrl = `https://oauth.battle.net/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid&state=AbCdEfGhIjKlMnOpQrStUvWxYz`;

  const onClick = () => {
    router.push(oauthUrl);
  };

  return (
    <header className="border border-white m-4">
      <div className="text-white flex items-center justify-center !p-4">
        <Button onClick={onClick}>login</Button>
      </div>
    </header>
  );
};

export default Header;
