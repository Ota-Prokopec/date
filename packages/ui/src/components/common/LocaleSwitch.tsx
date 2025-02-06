'use client';
import { usePlayerContext } from '../../contexts/PlayerContext';
import { useLocale } from '../../hooks/useLocale';
import { LuLanguages } from 'react-icons/lu';
import { Row } from '../common/Row';
import { Text } from '../common/Text';
import { Icon } from '../Icon/Icon';

export type LocaleSwitchProps = {};

export const LocaleSwitch = ({}: LocaleSwitchProps) => {
  const { locale, setLocale } = useLocale();
  const { pause } = usePlayerContext();

  return (
    <Icon
      onClick={() => {
        pause();
        setLocale((c) => (c === 'cs' ? 'en' : 'cs'));
        //router.push(pathname, { locale: locale === 'en' ? 'cs' : 'en' })
      }}
    >
      <Row className="justify-center items-center">
        <LuLanguages className="w-8 h-8"></LuLanguages>
        <Text className="font-bold text-xl">{locale === 'en' ? 'cs' : 'en'}</Text>
      </Row>
    </Icon>
  );
};
