import { cn } from "@/lib/utils";

const Blobby = ({ className }) => {
  return (
    <div className={cn("absolute blur-3xl min-h-24 min-w-24", className)} />
  );
};

export default Blobby;
