import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '触摸屏生产',
    Image: require('@site/static/img/touch.png').default,
    description: (
      <>
        自有工厂，支持触摸屏产品定制。
		主力尺寸从5寸到32寸，在工控、商显、消费电子、车载应用领域均有广泛使用
      </>
    ),
  },
  {
    title: '液晶屏全自动贴合',
    Image: require('@site/static/img/lcd.png').default,
    description: (
      <>
        全自动线，支持液晶屏与触摸屏快速精准贴合。
		提供液晶屏产品选型与定制，满足异形、高亮、宽温、防窥等特殊要求
      </>
    ),
  },
  {
    title: '触摸显示一体机组装',
    Image: require('@site/static/img/machine.png').default, 
    description: (
      <>
        触摸屏或触显总成生产出来之后，可直接组装为整机
		提供高洁净生产车间，减少物流运输。提供显示方案，
		x86主板与各种嵌入式主板选型，一站式服务
      </>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}