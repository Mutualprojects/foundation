import { OurPride } from "@/components/OurPride";

export const metadata = {
  title: "Events - Sri Harsha Foundation",
  description: "Take a look at some of our most memorable events, campaigns, and the incredible people who stood by our cause to make a difference.",
};

export default function EventsPage() {
  return (
    <div className="flex flex-col flex-1 bg-white pt-20">
      {/* Adding top padding to account for the sticky header if there is one */}
      <OurPride />
    </div>
  );
}
