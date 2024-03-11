import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import NavItems from './NavItems';
import Menu from '../icons/Menu';

const MobileNav = () => {
  
  return (
    <nav className="md:hidden">
      <Sheet modal open={false}>
        <SheetTrigger  className="align-middle">
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white dark:bg-slate-700 md:hidden">
          <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
