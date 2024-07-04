import { cn } from "@/lib/utils";

const blobby = ({ className }) => {
  return (
    <div
      className={cn("absolute backdrop-blur-3xl min-h-24 min-w-24", className)}
    />
  );
};

export default blobby;
