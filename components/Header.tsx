import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "@/auth";
import { Button } from "./ui/button";


const Header = () => {
    
  return (
  <header className="my-10 flex justify-between gap-5">
    <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
    </Link>

    <ul className="flex flex-row items-center gap-8">
        <li>
          
        

        {/* <li>
          <Link href='/my-profile'>
          <Avatar>
            <AvatarFallback className="dark:text-white text-black bg-amber-100">
              {getInitials(session?.user?.name || 'IN')}
            </AvatarFallback>
          </Avatar>
          </Link>
        </li> */}

           <form action={async () => {
              'use server';

              await signOut();
          }}
          className="mb-10">
              <Button>Logout</Button>
          </form>
          </li>
    </ul>
  </header>
)};

export default Header;
