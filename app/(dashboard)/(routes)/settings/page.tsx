import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { PartyPopper, Settings } from "lucide-react";
import Image from "next/image";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? (
            <p className="flex items-center gap-x-2">
              <Image
                src="/poppers.png"
                alt="Party popper"
                width={24}
                height={24}
              />
              Congrats! You are a Pro user.
            </p>
          ) : (
            "You are currently on a free plan."
          )}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
