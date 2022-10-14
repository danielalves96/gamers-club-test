import { IconArrowRight } from '@/components/icons/ArrowRight';
import { IconCog } from '@/components/icons/Cog';
import { IconDoor } from '@/components/icons/Door';
import { IconDownload } from '@/components/icons/Download';
import { IconEyeOff } from '@/components/icons/EyeOff';
import { IconMissions } from '@/components/icons/Missions';
import { IconPin } from '@/components/icons/Pin';
import { IconTrophy } from '@/components/icons/Trophy';
import { IconUserPlus } from '@/components/icons/UserPlus';
import { IconUsers } from '@/components/icons/Users';

export default function Home() {
  return (
    <>
      <IconUserPlus size={25} />
      <IconUsers size={25} />
      <IconArrowRight size={25} />
      <IconTrophy size={25} />
      <IconCog size={25} />
      <IconDoor size={25} />
      <IconDownload size={25} />
      <IconEyeOff size={25} />
      <IconMissions size={25} />
      <IconPin size={20} />
    </>
  );
}
