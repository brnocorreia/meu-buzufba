import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

export default function AvatarUserHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return (
      <Avatar
        className="w-[38px] h-[38px] cursor-pointer"
        onClick={() => router.push("/login")}
      >
        <AvatarImage />
        <AvatarFallback className="text-sm font-semibold">?</AvatarFallback>
      </Avatar>
    );
  }

  const initials = `${user.name.charAt(0)}${user.surname.charAt(0)}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-[38px] h-[38px] cursor-pointer">
          <AvatarImage />
          <AvatarFallback className="text-sm">{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={handleLogout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
