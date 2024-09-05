import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

export default function EmptyOrg() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src="/assets/icons/empty-organization.png"
        alt="Empty-organization"
        width={200}
        height={200}
      />
      <h2 className="mt-6 text-2xl font-semibold text-limed-spruce-900">
        Welcome to Real-time PixBoard
      </h2>
      <p className="mt-2 text-sm text-limed-spruce-600">
        Create your own organization and start collaborating with your team
      </p>

      <div className="mt-6"></div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"lg"} className="bg-limed-spruce-950">
            Create Organization
          </Button>
        </DialogTrigger>
        <DialogContent className="flex max-w-[480px] items-center justify-center border-none bg-transparent p-0">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
}
