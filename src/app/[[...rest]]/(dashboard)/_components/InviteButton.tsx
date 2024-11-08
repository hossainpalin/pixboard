import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export default function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-limed-spruce-900">
          <Plus className="mr-2 h-4 w-4" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[880px] border-none bg-transparent p-0">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
}
