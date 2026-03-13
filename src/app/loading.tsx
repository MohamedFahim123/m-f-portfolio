"use client";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="animate-[loading-fade_0.5s_ease_both] flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        <p className="text-lg font-medium text-foreground">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
