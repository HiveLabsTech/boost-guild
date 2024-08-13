import { FrameMetadata } from '@coinbase/onchainkit';

import styles from '../styles/Home.module.css';

import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Marketing from '@/app/components/Marketing';
import Grants from './components/Grants';
import Contributors from '@/app/components/Contributors';


export default function Page() {
  const members = [
    { name: 'Brian Flynn', twitter: 'Flynnjamm', profileUrl: 'https://pbs.twimg.com/profile_images/1599076785194516491/jzjsD8nJ_400x400.jpg' },
    { name: 'Mattie', twitter: 'EthMattie', profileUrl: 'https://pbs.twimg.com/profile_images/1450857327779713024/Ga2fvg2Q_400x400.jpg' },
    { name: 'Zeck', twitter: 'zeckxyz', profileUrl: 'https://pbs.twimg.com/profile_images/1790737712225607680/qFYgf3tb_400x400.jpg' },
    { name: 'Spark', twitter: '0x_xifeng', profileUrl: 'https://pbs.twimg.com/profile_images/1807061005287264256/xrbWhaTT_400x400.jpg' },
    { name: 'Odysseus', twitter: 'odysseusksk', profileUrl: 'https://pbs.twimg.com/profile_images/1651956741888778244/zHIp1T39_400x400.jpg' },
    { name: 'HOANG', twitter: 'tranhoangh49', profileUrl: 'https://pbs.twimg.com/profile_images/1816121394629074948/faML2OUy_400x400.jpg' },
    { name: 'Pedram', twitter: 'wikipedram', profileUrl: 'https://pbs.twimg.com/profile_images/1790707563077537792/CxmGzVHK_400x400.jpg' },
    { name: 'Rrrusx', twitter: 'rrrusxx', profileUrl: 'https://pbs.twimg.com/profile_images/1731479116048711680/VnKv89Nz_400x400.jpg' },
    { name: 'cRekto', twitter: 'Boost_Herald', profileUrl: 'https://pbs.twimg.com/profile_images/1820267222545416192/kFU7xI5__400x400.jpg' }
    
  ];
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.mainContent}>
          <Marketing />
          <About />
          <Contributors members={members} />
          {/* <Actions /> */}
          {/* <Grants /> */}
        </main>
      </div>
    </>
  );
}
