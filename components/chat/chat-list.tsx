import { type Message } from "ai";

import { Separator } from "@/components/ui/separator";

import Skeleton from "../Skeleton";
import PapermarkSparkle from "../shared/icons/papermark-sparkle";
import { ChatMessage } from "./chat-message";

export interface ChatList {
  messages: Message[];
  status: "in_progress" | "awaiting_message";
}

export function ChatList({ messages, status }: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative max-w-2xl px-4 mx-auto">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && (
            <Separator className="my-4 bg-background" />
          )}
        </div>
      ))}
      {status === "in_progress" && (
        <>
          <Separator className="my-4 bg-background" />
          <div
            key={"loading-message"}
            className="relative flex items-start mb-4 ml-5 whitespace-pre-wrap group"
          >
            <div className="flex items-center justify-center w-8 h-8 border rounded-md shadow select-none shrink-0 bg-primary text-primary-foreground">
              <PapermarkSparkle />
            </div>
            <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">
              <div className="font-semibold select-none">Deck3 Assistant</div>
              <Skeleton className="w-64 h-4" />
              <Skeleton className="w-48 h-4" />
              <Skeleton className="w-24 h-4" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
